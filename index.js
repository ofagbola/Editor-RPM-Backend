require("dotenv").config();
const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Fitbit API Demo");
});

app.get("/authorize", (req, res) => {
  const scope = "heartrate temperature";
  res.redirect(
    `https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=${
      process.env.FITBIT_CLIENT_ID
    }&redirect_uri=${encodeURIComponent(
      process.env.CALLBACK_URL
    )}&scope=${encodeURIComponent(scope)}`
  );
});

app.get("/callback", async (req, res) => {
  const { code } = req.query;
  const options = {
    method: "post",
    url: "https://api.fitbit.com/oauth2/token",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(
          `${process.env.FITBIT_CLIENT_ID}:${process.env.FITBIT_CLIENT_SECRET}`
        ).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: `clientId=${
      process.env.FITBIT_CLIENT_ID
    }&grant_type=authorization_code&redirect_uri=${encodeURIComponent(
      process.env.CALLBACK_URL
    )}&code=${code}`,
  };

  try {
    const response = await axios(options);
    const accessToken = response.data.access_token;
    res.send(`Access Token: ${accessToken}`);
  } catch (error) {
    console.error(error);
    res.send("An error occurred");
  }
});

app.get("/get-info", async (req, res) => {
  const { user_id, date, period, access_token } = req.query;

  const url = `https://api.fitbit.com/1/user/_/activities/heart/date/today/1d.json`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to retrieve heart rate information");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
