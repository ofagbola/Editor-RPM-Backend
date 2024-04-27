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

// For FitBit
app.get("/callback", async (req, res) => {
  // const { code } = req.query;
  // const { userId } = req.query;

  const code = req.query.code;
  const code_verifier = req.query.code_verifier;

  console.log("Code", code);

  console.log("Code:", code_verifier);

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
      device: "Fitbit",
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

// Redirect to Fitbit authorization URL
app.get("/authorize", async (req, res) => {
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

  // return auth link
  // code chall
  // code verrifier
  // openGlobal(authorizationUrl);

  const returned_data = {
    authorization_link: authorizationUrl,
    code_verifier: codeVerifier,
    code_challenge: codeChallenge,
  };
  res.send("Opening Fitbit authorization page...").json(returned_data);
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
    const userId = req.params.userId;
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
