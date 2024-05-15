const request = require("request");
require("dotenv").config();

const axios = require("axios");

const fetchSpO2DataByDate = (accessToken, date = "today") => {
  const options = {
    url: `https://api.fitbit.com/1/user/-/spo2/date/${date}/all.json`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return axios(options)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(
          `Failed to fetch SpO2 data: ${response.status} ${response.statusText}`,
        );
      }
    })
    .catch((error) => {
      if (error.response) {
        // Handle errors thrown by the server
        throw new Error(
          `API Error: ${error.response.status} ${error.response.data}`,
        );
      } else if (error.request) {
        // Handle errors that occurred during the making of the request
        throw new Error(`No response received: ${error.message}`);
      } else {
        // Handle other errors
        throw new Error(`Error: ${error.message}`);
      }
    });
};

const fetchUserProfile = (accessToken, date = "today") => {
  const options = {
    url: `https://api.fitbit.com/1/user/-/profile.json`,

    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return axios(options)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(
          `Failed to fetch user data: ${response.status} ${response.statusText}`,
        );
      }
    })
    .catch((error) => {
      if (error.response) {
        // Handle errors thrown by the server
        throw new Error(
          `API Error: ${error.response.status} ${error.response.data}`,
        );
      } else if (error.request) {
        // Handle errors that occurred during the making of the request
        throw new Error(`No response received: ${error.message}`);
      } else {
        // Handle other errors
        throw new Error(`Error: ${error.message}`);
      }
    });
};

const fetchRestingHeartRate = async (accessToken) => {
  const options = {
    method: "get",
    url: "https://api.fitbit.com/1/user/-/activities/heart/date/today/1d.json",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    const response = await axios(options);
    const body = response.data; // With axios, the response body is under 'data'

    console.log("Received response from Fitbit API:", body);

    // Check if the expected data is available
    if (
      body &&
      body["activities-heart"] &&
      body["activities-heart"][0] &&
      body["activities-heart"][0].value.restingHeartRate
    ) {
      const data = {
        dateTime: body["activities-heart"][0].dateTime,
        restingHeartRate: body["activities-heart"][0].value.restingHeartRate,
      };
      return data;
    } else {
      throw new Error(
        "Heart rate data not found or the structure is not as expected.",
      );
    }
  } catch (error) {
    console.error("Error fetching heart rate data from Fitbit:", error);
    throw new Error(
      "Error fetching heart rate data from Fitbit: " +
        (error.response
          ? `${error.response.status} ${error.response.statusText}`
          : error.message),
    );
  }
};

module.exports = fetchRestingHeartRate; // Export the function if you're using modules

module.exports = {
  fetchSpO2DataByDate,
  fetchRestingHeartRate,
  fetchUserProfile,
};
