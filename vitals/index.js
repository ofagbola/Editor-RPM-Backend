require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");

let openGlobal;
(async () => {
  const { default: open } = await import("open");
  openGlobal = open;
})();
const querystring = require("querystring");

const crypto = require("crypto");

function generateCodeVerifier() {
  return crypto.randomBytes(32).toString("hex");
}

function base64URLEncode(str) {
  return str
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
}

function sha256(buffer) {
  return crypto.createHash("sha256").update(buffer).digest();
}

function generateCodeChallenge(codeVerifier) {
  return base64URLEncode(sha256(Buffer.from(codeVerifier)));
}

function generateNonce(length = 32) {
  return crypto.randomBytes(length).toString("hex").substr(0, length);
}

function generateTimestamp() {
  return Math.floor(new Date().getTime() / 1000);
}

// function generateSignature(
//   method,
//   url,
//   params,
//   consumerSecret,
//   tokenSecret = ""
// ) {
//   // 1. Percent encode every key and value that will be signed
//   const encodedParams = Object.fromEntries(
//     Object.entries(params).map(([key, value]) => [
//       encodeURIComponent(key),
//       encodeURIComponent(value),
//     ])
//   );

//   // 2. Sort the list of parameters alphabetically [RFC 5849 Section 3.4.1.3.2]
//   const sortedParams = Object.keys(encodedParams)
//     .sort()
//     .reduce((obj, key) => {
//       obj[key] = encodedParams[key];
//       return obj;
//     }, {});

//   // 3. Concatenate the request elements into a single string
//   const baseString = [
//     method.toUpperCase(),
//     encodeURIComponent(url),
//     encodeURIComponent(queryString.stringify(sortedParams)),
//   ].join("&");

//   // 4. Use the consumer secret and token secret to generate the signature
//   const signingKey = `${encodeURIComponent(
//     consumerSecret
//   )}&${encodeURIComponent(tokenSecret)}`;
//   const signature = crypto
//     .createHmac("sha1", signingKey)
//     .update(baseString)
//     .digest("base64");

//   return signature;
// }

function generateSignature(method, url, params, consumerSecret) {
  const paramString = querystring.stringify(params);
  const baseString =
    method.toUpperCase() +
    "&" +
    encodeURIComponent(url) +
    "&" +
    encodeURIComponent(paramString);

  const signingKey = encodeURIComponent(consumerSecret) + "&";
  return crypto
    .createHmac("sha1", signingKey)
    .update(baseString)
    .digest("base64");
}

const { Vitals, Tokens, CodeStuff } = require("./models/HealthData");

const {
  fetchRestingHeartRate,
  fetchSpO2DataByDate,
  fetchUserProfile,
} = require("./utils/fitbitapi");
const { authenticateUser } = require("./middlewares/authentication.middleware");

// Initialize Express
const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
const mongodb_uri = `${process.env.MONGO_URI}?retryWrites=true&writeConcern=majority&authSource=admin`;

console.log({ mongodb_uri });

mongoose
  .connect(mongodb_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(express.json());

app.use(authenticateUser);

// For Garmin
app.post("/authorize-garmin", async (req, res) => {
  const url = "https://connectapi.garmin.com/oauth-service/oauth/request_token";
  const customerKey = process.env.GARMIN_CUSTOMER_KEY;
  const customerSecret = process.env.GARMIN_CUSTOMER_SECRET;
  const nonce = generateNonce();
  const timestamp = generateTimestamp();

  const params = {
    oauth_consumer_key: customerKey,
    oauth_nonce: nonce,
    oauth_timestamp: timestamp,
    oauth_signature_method: "HMAC-SHA1",
    oauth_version: "1.0",
  };

  const signature = generateSignature("POST", url, params, customerSecret);

  console.log("signature", signature);
  console.log("url encoded", encodeURIComponent(signature));
  console.log();
  console.log();

  try {
    // Perform the OAuth request

    const authorizationHeader = `OAuth oauth_nonce="${nonce}", oauth_signature="${encodeURIComponent(
      signature
    )}", oauth_consumer_key="${customerKey}", oauth_timestamp="${timestamp}", oauth_signature_method="HMAC-SHA1", oauth_version="1.0"`;

    const response = await axios.post(
      url,
      {},
      {
        headers: {
          Authorization: authorizationHeader,
        },
      }
    );
    console.log(authorizationHeader);

    console.log(response.data);

    const parsedData = queryString.parse(response.data);

    const oauth_token = parsedData.oauth_token;
    const oauth_token_secret = parsedData.oauth_token_secret;

    const garminTokenData = await CodeStuff.create({
      oauth_nonce: nonce,
      oauth_signature: signature,
      oauth_token: oauth_token,
      oauth_timestamp: timestamp,
      oauth_token_secret: oauth_token_secret,
      oauth_verifier: "temp_",
      device: "Garmin",
    });

    const authorization_link = `https://connect.garmin.com/oauthConfirm?oauth_token=${oauth_token}&oauth_callback=https%3A%2F%2Fapis.garmin.com%2Ftools%2FoauthAuthorizeUser%3Faction%3Dstep3`;
    // Return the response from the Garmin Connect API
    res.status(response.status).json({
      oauth_tokens: response.data,
      other_things: "this is another thing",
      authorization_link: authorization_link,
    });
  } catch (error) {
    // If an error occurs, return an error response
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/garmin-callback", async (req, res) => {
  const consumer_key = process.env.GARMIN_CUSTOMER_KEY;
  const customerSecret = process.env.GARMIN_CUSTOMER_SECRET;
  const oauth_verifier = req.query.oauth_verifier;
  const oauth_token = req.query.oauth_token;
  const oauth_token_secret = req.query.oauth_token_secret;
  const timestamp = Math.floor(Date.now() / 1000);

  const url = "https://connectapi.garmin.com/oauth-service/oauth/access_token";
  const nonce = generateNonce();

  const params = {
    oauth_consumer_key: consumer_key,
    oauth_nonce: nonce,
    oauth_timestamp: timestamp,
    oauth_signature_method: "HMAC-SHA1",
    oauth_version: "1.0",
  };

  const signature = generateSignature(
    "POST",
    url,
    params,
    customerSecret,
    oauth_token_secret
  );

  try {
    const authorizationHeader = `OAuth oauth_nonce="${nonce}", oauth_signature="${encodeURIComponent(
      signature
    )}", oauth_consumer_key="${consumer_key}", oauth_token="${oauth_token}", oauth_timestamp="${timestamp}", oauth_verifier="${oauth_verifier}", oauth_signature_method="HMAC-SHA1", oauth_version="1.0"`;

    console.log(authorizationHeader);

    const response = await axios.post(
      url,
      {},
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: authorizationHeader,
        },
      }
    );
    console.log("##########################################");
    console.log("##########################################");

    console.log("response: ", response);

    console.log("Access Token Data:", response.data);
    return response.data; // Return the data for further processing or usage
  } catch (error) {
    console.error("Error fetching access token:", error.message);
    if (error.response) {
      console.error("Error status:", error.response.status);
      console.error("Error details:", error.response.data);
    }
  }
});

app.get("/fetch-and-save-garmin-data", async (req, res) => {
  const garminApiUrl =
    "https://apis.garmin.com/wellness-api/rest/healthSnapshot";
  const accessToken = req.params.accessToken;
  try {
    const response = await axios.get(garminApiUrl, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const data = response.data[0];

    const heartRateData = data.summaries.find(
      (summary) => summary.summaryType === "heart_rate"
    );
    const spo2Data = data.summaries.find(
      (summary) => summary.summaryType === "spo2"
    );

    // Save heart rate data
    if (heartRateData) {
      await GarminHeartRateSummary.create({
        ...heartRateData,
        calendarDate: new Date(heartRateData.calendarDate),
      });
    }

    // Save SpO2 data
    if (spo2Data) {
      await GarminSpO2Summary.create({
        ...spo2Data,
        calendarDate: new Date(spo2Data.calendarDate),
      });
    }

    res.json({ message: "Data saved successfully" });
  } catch (error) {
    console.error("Error fetching or saving Garmin data:", error);
    res.status(500).json({ message: "Error fetching or saving Garmin data" });
  }
});

// For FitBit
app.get("/fitbit-callback", async (req, res) => {
  const code = req.query.code;
  const username = req.query.username;
  const code_verifier = req.query.code_verifier;

  console.log("Code", code);

  console.log("Code verifier:", code_verifier);

  try {
    const response = await axios.post(
      "https://api.fitbit.com/oauth2/token",
      querystring.stringify({
        client_id: process.env.FITBIT_CLIENT_ID,
        grant_type: "authorization_code",
        redirect_uri: process.env.CALLBACK_URL,
        code: code,
        code_verifier: code_verifier,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            Buffer.from(
              `${process.env.FITBIT_CLIENT_ID}:${process.env.FITBIT_CLIENT_SECRET}`
            ).toString("base64"),
        },
      }
    );

    console.log("Response Data:", response.data);
    console.log("Access Token:", response.data.access_token);
    console.log("Refresh Token:", response.data.refresh_token);

    const filter = {
      username,
    };
    const dataToInsert = {
      username,
      accessToken: response.data.access_token,
      refreshToken: response.data.refresh_token,
      userIdFromProvider: response.data.user_id,
      expiresIn: response.data.expires_in,
      scope: response.data.scope, // Corrected from refresh_token to scope
      device: "FitBit",
    };

    const options = {
      upsert: true,
    };

    const token_data = await Tokens.findOneAndUpdate(
      filter,
      dataToInsert,
      options
    );

    console.log("Token Data:", token_data);

    res.status(200).json({
      message: "Authorization successful! You can close this window.",
    });
  } catch (error) {
    console.error(
      "Error exchanging code for tokens:",
      error.response?.data?.errors,
      error.message
    );
    res.status(500).json({
      message:
        "Authorization failed. Please check the server logs for more details.",
    });
  }
});

app.get("/authorize-fitbit", async (req, res) => {
  const clientId = process.env.FITBIT_CLIENT_ID;
  // const redirectUri = encodeURIComponent(
  //   "http://localhost:" + PORT + "/callback"
  // );
  const redirectUri = process.env.CALLBACK_URL;
  const scope = encodeURIComponent(
    "activity cardio_fitness electrocardiogram heartrate location nutrition oxygen_saturation profile respiratory_rate settings sleep social temperature weight"
  );
  const responseType = "code";
  const prompt = "login consent";

  const codeVerifier = generateCodeVerifier();
  console.log("Code verifier", codeVerifier);

  const codeChallenge = generateCodeChallenge(codeVerifier);
  console.log("Code challenge", codeChallenge);

  const codeStuff = await CodeStuff.create({
    codeChallenge: codeChallenge,
    codeVerifier: codeVerifier,
  });

  const authorizationUrl = `https://www.fitbit.com/oauth2/authorize?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}&code_challenge=${codeChallenge}&code_challenge_method=S256&scope=${scope}`;

  res.json({
    authorization_link: authorizationUrl,
    code_verifier: codeVerifier,
    code_challenge: codeChallenge,
  });
});

app.post("/revoke-fitbit-token", async (req, res) => {
  const { accessToken, userId } = req.body;
  console.log("$#%#$%@#$%$");
  console.log(accessToken);

  try {
    const response = await axios.post(
      "https://api.fitbit.com/oauth2/revoke",
      queryString.stringify({
        token: accessToken,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            Buffer.from(
              `${process.env.FITBIT_CLIENT_ID}:${process.env.FITBIT_CLIENT_SECRET}`
            ).toString("base64"),
        },
      }
    );
    // const token_data = await Tokens.findOneAndDelete({
    //   userId: userId,
    // });

    res.send("Token Revoked successfully");
  } catch (error) {
    console.error(
      "Error exchanging code for tokens:",
      error.response?.data?.errors,
      error.response
    );
    res.status(500).send("something went terribly wrong");
  }
});

app.get("/fetch-spo2-from-fitbit", async (req, res) => {
  const userId = req.query.userId;
  if (!userId) {
    return res
      .status(400)
      .send({ success: false, message: "User ID is required" });
  }

  try {
    console.log("User id: ", userId);
    const userTokens = await Tokens.findOne({ userId: userId });
    if (!userTokens) {
      return res
        .status(404)
        .send({ success: false, message: "User tokens not found" });
    }
    // console.log("user tokens: ", userTokens);

    const spo2Data = await fetchSpO2DataByDate(userTokens.accessToken);
    console.log("spo2 data: ", spo2Data);
    if (!spo2Data || !spo2Data.dateTime || spo2Data.value === undefined) {
      console.error("Invalid or empty SpO2 data received", spo2Data);
      return res
        .status(500)
        .send({ success: false, message: "Invalid or no SpO2 data received" });
    }

    const newVitals = await Vitals.create({
      dateTimeFromProvider: spo2Data.dateTime,
      value: spo2Data.value,
      userId: userId,
      dateTime: new Date(),
      device: "FitBit",
      metricType: "SpO2",
    });

    res.send({
      success: true,
      message: "Data saved successfully",
      data: newVitals,
    });
  } catch (error) {
    console.error("Error fetching or saving data: ", error);
    res.status(500).send({
      success: false,
      message: "Failed to fetch or save data",
      error: error.message,
    });
  }
});

app.get("/fetch-heart-rate-from-fitbit", async (req, res) => {
  const username = req.query.username;
  if (!username) {
    return res.status(400).json({
      success: false,
      message: "Username is required",
    });
  }

  try {
    const userTokens = await Tokens.findOne({ username });
    // console.log({ userTokens });
    if (!userTokens) {
      return res.status(404).json({
        success: false,
        message: "No access token found for the user",
      });
    }

    const heartRateData = await fetchRestingHeartRate(userTokens.accessToken);

    console.log({ heartRateData });

    const newVital = await Vitals.create({
      username,
      dateTime: new Date(), // Ensure dateTime is a Date object
      device: "FitBit",
      metricType: "HeartRate",
      dateTimeFromProvider: new Date(heartRateData.dateTime), // Assuming dateTime is in a format that can be converted to Date
      value: heartRateData.heartRate,
    });

    res.json({
      success: true,
      message: "Heart rate data saved successfully",
      data: newVital,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch or save heart rate data",
      error: error.message,
    });
  }
});

app.get("/fetch-user-profile-from-fitbit", async (req, res) => {
  const userId = req.query.userId;
  if (!userId) {
    return res.status(400).json({
      success: false,
      message: "User ID is required",
    });
  }

  try {
    const userTokens = await Tokens.findOne({ userId: userId });
    if (!userTokens) {
      return res.status(404).json({
        success: false,
        message: "No access token found for the user",
      });
    }

    const userData = await fetchUserProfile(userTokens.accessToken);

    res.json({
      success: true,
      message: "user data retrieved successfully",
      data: userData,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch user data",
      error: error.message,
    });
  }
});

// For Apple
app.post("/apple-heartrate", async (req, res) => {
  try {
    if (!req.body.userId || req.body.heartRate === undefined) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const appleHeartRate = req.body.heartRate;
    let appleCows;
    if (appleHeartRate <= 80) {
      appleCows = 0;
    } else if (appleHeartRate > 80 && appleHeartRate <= 100) {
      appleCows = 1;
    } else if (appleHeartRate > 100 && appleHeartRate <= 120) {
      appleCows = 2;
    } else if (appleHeartRate > 120) {
      appleCows = 4;
    } else {
      appleCows = 0; // default case, though it's unnecessary here
    }
    const appleHeartRateData = new Vitals({
      dateTime: new Date(),
      device: "Apple",
      metricType: "HeartRate",
      value: req.body.heartRate,
      cows: appleCows,
      userId: req.body.userId,
    });
    await appleHeartRateData.save();
    res
      .status(201)
      .json({ message: "Data saved successfully", data: appleHeartRateData });
  } catch (error) {
    console.error("Failed to save health data", error);
    res.status(500).json({ message: "Failed to save heart rate data" });
  }
});

app.post("/apple-spo2", async (req, res) => {
  try {
    if (!req.body.userId || req.body.spo2 === undefined) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const applespo2 = new Vitals({
      dateTime: new Date(),
      device: "Apple",
      metricType: "SpO2",
      value: req.body.spo2,
      userId: req.body.userId,
    });
    await applespo2.save();
    res
      .status(201)
      .json({ message: "Data saved successfully", data: applespo2 });
  } catch (error) {
    console.error("Failed to save health data", error);
    res.status(500).json({ message: "Failed to save spo2 data" });
  }
});

// For Editor RPM
app.get("/fetch-user-spo2", async (req, res) => {
  const { userId, platform } = req.query;

  if (!userId || !platform) {
    return res
      .status(400)
      .json({ message: "userId and platform are required" });
  }

  try {
    let data;
    switch (platform) {
      case "Garmin":
        const garminVitals = await Vitals.find({
          userId,
          metricType: "SpO2",
          device: "Garmin",
        }).sort({ createdAt: -1 });
        data = {
          vitals: garminVitals,
        };
        break;
      case "FitBit":
        const fitbitVitals = await Vitals.find({
          userId,
          metricType: "SpO2",
          device: "FitBit",
        }).sort({ createdAt: -1 });
        data = {
          vitals: fitbitVitals,
        };
        break;
      case "Apple":
        const appleVitals = await Vitals.find({
          userId,
          metricType: "SpO2",
          device: "Apple",
        }).sort({
          createdAt: -1,
        });
        data = {
          vitals: appleVitals,
        };
        break;

      default:
        return res.status(400).json({ message: "Invalid platform specified" });
    }
    res.json(data);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: "Failed to fetch user data" });
  }
});

app.get("/fetch-user-heartrate", async (req, res) => {
  const { userId, platform } = req.query;

  if (!userId || !platform) {
    return res
      .status(400)
      .json({ message: "userId and platform are required" });
  }

  try {
    let data;
    switch (platform) {
      case "Garmin":
        const garminVitals = await Vitals.find({
          userId,
          metricType: "HeartRate",
          device: "Garmin",
        }).sort({ createdAt: -1 });
        data = {
          vitals: garminVitals,
        };
        break;
      case "FitBit":
        const fitbitVitals = await Vitals.find({
          userId,
          metricType: "HeartRate",
          device: "FitBit",
        }).sort({ createdAt: -1 });
        data = {
          vitals: fitbitVitals,
        };
        break;
      case "Apple":
        const appleVitals = await Vitals.find({
          userId,
          metricType: "HeartRate",
          device: "Apple",
        }).sort({
          createdAt: -1,
        });
        data = {
          vitals: appleVitals,
        };
        break;

      default:
        return res.status(400).json({ message: "Invalid platform specified" });
    }
    res.json(data);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: "Failed to fetch user data" });
  }
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
