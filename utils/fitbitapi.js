const request = require("request");
require("dotenv").config();

const fetchSpO2DataByDate = (accessToken) => {
  return new Promise((resolve, reject) => {
    const options = {
      url: `https://api.fitbit.com/1/user/-/spo2/date/today/all.json`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    request(options, (error, response, body) => {
      if (error) reject(error);
      try {
        resolve(JSON.parse(body));
      } catch (e) {
        reject(e);
      }
    });
  });
};

const fetchRestingHeartRate = async (accessToken) => {
  const options = {
    url: "https://api.fitbit.com/1/user/-/activities/heart/date/today/1d.json",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    json: true,
  };

  try {
    const response = await request(options);
    if (
      response &&
      response["activities-heart"] &&
      response["activities-heart"][0]
    ) {
      return {
        dateTime: response["activities-heart"][0].dateTime,
        restingHeartRate:
          response["activities-heart"][0].value.restingHeartRate,
      };
    }
    throw new Error("Heart rate data not found");
  } catch (error) {
    console.error("Error fetching heart rate data from Fitbit:", error);
    throw error;
  }
};

module.exports = {
  fetchSpO2DataByDate,
  fetchRestingHeartRate,
};
