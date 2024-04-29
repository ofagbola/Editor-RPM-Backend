require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");

let openGlobal;
(async () => {
  const { default: open } = await import("open");
  openGlobal = open;
})();
const queryString = require("querystring");

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
  return crypto.randomBytes(length).toString("hex");
}

function generateSignature(
  method,
  url,
  params,
  consumerSecret,
  tokenSecret = "",
) {
  // 1. Percent encode every key and value that will be signed
  const encodedParams = Object.fromEntries(
    Object.entries(params).map(([key, value]) => [
      encodeURIComponent(key),
      encodeURIComponent(value),
    ]),
  );

  // 2. Sort the list of parameters alphabetically [RFC 5849 Section 3.4.1.3.2]
  const sortedParams = Object.keys(encodedParams)
    .sort()
    .reduce((obj, key) => {
      obj[key] = encodedParams[key];
      return obj;
    }, {});

  // 3. Concatenate the request elements into a single string
  const baseString = [
    method.toUpperCase(),
    encodeURIComponent(url),
    encodeURIComponent(queryString.stringify(sortedParams)),
  ].join("&");

  // 4. Use the consumer secret and token secret to generate the signature
  const signingKey = `${encodeURIComponent(consumerSecret)}&${encodeURIComponent(tokenSecret)}`;
  const signature = crypto
    .createHmac("sha1", signingKey)
    .update(baseString)
    .digest("base64");

  return signature;
}

const { Vitals, Tokens, CodeStuff } = require("./models/HealthData");

const {
  fetchRestingHeartRate,
  fetchSpO2DataByDate,
} = require("./utils/fitbitapi");

// Initialize Express
const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(express.json());

app.post("/authorize-garmin", async (req, res) => {
  const url = "https://connectapi.garmin.com/oauth-service/oauth/request_token";
  const customerKey = process.env.GARMIN_CUSTOMER_KEY;
  const customerSecret = process.env.GARMIN_CUSTOMER_SECRET;
  const tokenSecret = "";
  const nonce = generateNonce();

  const params = {
    oauth_consumer_key: customerKey,
    oauth_nonce: nonce,
    oauth_timestamp: Math.floor(Date.now() / 1000),
    oauth_signature_method: "HMAC-SHA1",
    oauth_version: "1.0",
  };

  const timestamp = Math.floor(Date.now() / 1000);
  const signature = generateSignature(
    "POST",
    url,
    params,
    customerSecret,
    tokenSecret,
  );
  try {
    // Perform the OAuth request
    const response = await axios.post(
      url,
      {
        // Add any request body data here if required
      },
      {
        headers: {
          Authorization:
            `OAuth oauth_nonce=${nonce}, ` +
            `oauth_signature=${signature}, ` +
            `oauth_consumer_key=${customerKey}, ` +
            `oauth_timestamp=${timestamp}, ` +
            'oauth_signature_method="HMAC-SHA1", ' +
            'oauth_version="1.0"',
        },
      },
    );

    // Return the response from the Garmin Connect API
    res.status(response.status).json(response.data);
  } catch (error) {
    // If an error occurs, return an error response
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
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
      (summary) => summary.summaryType === "heart_rate",
    );
    const spo2Data = data.summaries.find(
      (summary) => summary.summaryType === "spo2",
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

app.get("/callback", async (req, res) => {
  const code = req.query.code;
  const code_verifier = req.query.code_verifier;

  console.log("Code", code);

  console.log("Code verifier:", code_verifier);

  try {
    const response = await axios.post(
      "https://api.fitbit.com/oauth2/token",
      queryString.stringify({
        clientId: process.env.FITBIT_CLIENT_ID,
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
              `${process.env.FITBIT_CLIENT_ID}:${process.env.FITBIT_CLIENT_SECRET}`,
            ).toString("base64"),
        },
      },
    );

    console.log("Response Data:", response.data);
    console.log("Access Token:", response.data.access_token);
    console.log("Refresh Token:", response.data.refresh_token);

    const token_data = await Tokens.create({
      userId: "userId",
      accessToken: response.data.access_token,
      refreshToken: response.data.refresh_token,
      userIdFromProvider: response.data.user_id,
      expiresIn: response.data.expires_in,
      scope: response.data.scope, // Corrected from refresh_token to scope
      device: "FitBit",
    });

    console.log("Token Data:", token_data);

    res.send("Authorization successful! You can close this window.");
  } catch (error) {
    console.error(
      "Error exchanging code for tokens:",
      error.response?.data?.errors,
      error.message,
    );
    res
      .status(500)
      .send(
        "Authorization failed. Please check the server logs for more details.",
      );
  }
});

app.get("/authorize-fitbit", async (req, res) => {
  const clientId = process.env.FITBIT_CLIENT_ID;
  const redirectUri = encodeURIComponent(
    "http://localhost:" + PORT + "/callback",
  );
  const scope = encodeURIComponent(
    "activity cardio_fitness electrocardiogram heartrate location nutrition oxygen_saturation profile respiratory_rate settings sleep social temperature weight",
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

  const authorizationUrl = `https://www.fitbit.com/oauth2/authorize?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}&code_challenge=${codeChallenge}&code_challenge_method=S256&scope=${scope}&prompt=${prompt}`;

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
              `${process.env.FITBIT_CLIENT_ID}:${process.env.FITBIT_CLIENT_SECRET}`,
            ).toString("base64"),
        },
      },
    );
    // const token_data = await Tokens.findOneAndDelete({
    //   userId: userId,
    // });

    res.send("Token Revoked successfully");
  } catch (error) {
    console.error(
      "Error exchanging code for tokens:",
      error.response?.data?.errors,
      error.response,
    );
    res.status(500).send("something went terribly wrong");
  }
});

app.get("/fetch-spo2/:date", async (req, res) => {
  try {
    const userId = req.params.userId;

    const userTokens = await Tokens.findOne({ userId: userId });

    const spo2Data = await fetchSpO2DataByDate(userTokens.accessToken);
    await Vitals.create({
      dateTimeFromProvider: spo2Data.dateTime,
      value: spo2Data.value,
      userId: userId,
      dateTime: new Date(),
    });

    res.send({ success: true, message: "Data saved successfully" });
  } catch (error) {
    res
      .status(500)
      .send({ success: false, message: "Failed to fetch or save data" });
  }
});

app.get("/fetch-heart-rate", async (req, res) => {
  try {
    const userId = req.query.userId;
    const userTokens = await Tokens.findOne({ userId: userId });
    const { dateTime, restingHeartRate } = await fetchRestingHeartRate(
      userTokens.accessToken,
    );
    const newHeartRate = await FitBitHeartRateData.create({
      dateTime,
      restingHeartRate,
    });
    res.json({
      success: true,
      message: "Heart rate data saved successfully",
      data: newHeartRate,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch or save heart rate data",
      error: error.message,
    });
  }
});

// For Apple
app.post("/apple-health-data", async (req, res) => {
  try {
    if (
      !req.body.userId ||
      req.body.heartRate === undefined ||
      req.body.spo2 === undefined
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const newHealthData = new AppleHealthData({
      userId: req.body.userId,
      heartRate: req.body.heartRate,
      spo2: req.body.spo2,
    });
    await newHealthData.save();
    res
      .status(201)
      .json({ message: "Data saved successfully", data: newHealthData });
  } catch (error) {
    console.error("Failed to save health data", error);
    res.status(500).json({ message: "Failed to save health data" });
  }
});

app.post("/fetch-user-data", async (req, res) => {
  const { userId, platform } = req.body;

  if (!userId || !platform) {
    return res
      .status(400)
      .json({ message: "userId and platform are required" });
  }

  try {
    switch (platform) {
      case "Garmin":
        const heartRateData = await GarminHeartRateSummary.find({
          userId,
        }).sort({ createdAt: -1 });
        const spo2Data = await GarminSpO2Summary.find({ userId }).sort({
          createdAt: -1,
        });
        data = {
          heartRate: heartRateData ? heartRateData.avgValue : null,
          spo2: spo2Data ? spo2Data.avgValue : null,
        };
        break;
      case "FitBit":
        const fitBitHeartRateData = await FitBitHeartRateData.find({
          userId,
        }).sort({ createdAt: -1 });
        const fitBitSpO2Data = await FitBitSpO2Data.find({ userId }).sort({
          createdAt: -1,
        });
        data = {
          heartRate: fitBitHeartRateData
            ? fitBitHeartRateData.restingHeartRate
            : null,
          spo2: fitBitSpO2Data ? fitBitSpO2Data.value.avg : null,
        };
        break;
      case "Apple":
        const appleData = await AppleHealthData.find({ userId }).sort({
          createdAt: -1,
        });
        data = {
          heartRate: appleData ? appleData.heartRate : null,
          spo2: appleData ? appleData.spo2 : null,
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
  console.log(`Server running on http://localhost:${PORT}`),
);
