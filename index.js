require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const {
  GarminHeartRateSummary,
  GarminSpO2Summary,
  AppleHealthData,
  FitBitSpO2Data,
  FitBitHeartRateData,
} = require("./models/HealthData");

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
//
//
//
//
//

// Route to start the OAuth flow
app.get("/authorize", (req, res) => {
  const params = queryString.stringify({
    response_type: "code",
    client_id: process.env.FITBIT_CLIENT_ID,
    redirect_uri: process.env.CALLBACK_URL,
    scope: "activity heartrate sleep", // Specify needed scopes
    expires_in: "31536000", // 1 year
  });

  res.redirect(`https://www.fitbit.com/oauth2/authorize?${params}`);
});

// Callback route Fitbit will redirect to
app.get("/callback", async (req, res) => {
  const { code } = req.query;

  try {
    const response = await axios.post(
      "https://api.fitbit.com/oauth2/token",
      queryString.stringify({
        clientId: process.env.FITBIT_CLIENT_ID,
        grant_type: "authorization_code",
        redirect_uri: process.env.CALLBACK_URL,
        code: code,
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

    // Save the tokens somewhere (e.g., database)
    console.log("Access Token:", response.data.access_token);
    console.log("Refresh Token:", response.data.refresh_token);

    res.send("Authorization successful! You can close this window.");
  } catch (error) {
    console.error("Error exchanging code for tokens:", error.response.data);
    res
      .status(500)
      .send(
        "Authorization failed. Please check the server logs for more details.",
      );
  }
});

app.get("/fetch-spo2/:date", async (req, res) => {
  try {
    const date = req.params.date;
    const userId = req.params.userId;
    const accessToken = req.params.accessToken;

    const spo2Data = await fetchSpO2DataByDate(accessToken);
    await FitBitSpO2Data.create({
      dateTime: spo2Data.dateTime,
      value: spo2Data.value,
      userId: userId,
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
    const accessToken = req.params.accessToken;
    const { dateTime, restingHeartRate } =
      await fetchRestingHeartRate(accessToken);
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
