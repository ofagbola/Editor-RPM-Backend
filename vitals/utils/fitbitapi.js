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
          `Failed to fetch SpO2 data: ${response.status} ${response.statusText}`
        );
      }
    })
    .catch((error) => {
      if (error.response) {
        // Handle errors thrown by the server
        throw new Error(
          `API Error: ${error.response.status} ${error.response.data}`
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
          `Failed to fetch user data: ${response.status} ${response.statusText}`
        );
      }
    })
    .catch((error) => {
      if (error.response) {
        // Handle errors thrown by the server
        throw new Error(
          `API Error: ${error.response.status} ${error.response.data}`
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
  const currentTime = getCurrentTime();
  const timeTenMinutesAgo = getPastTimeInMinutes(1);

  console.log({ currentTime, timeTenMinutesAgo });

  const options = {
    method: "get",
    url: `https://api.fitbit.com/1/user/-/activities/heart/date/today/1d/1sec/time/${timeTenMinutesAgo}/${currentTime}.json`,
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
      body["activities-heart-intraday"] &&
      body["activities-heart-intraday"]?.dataset?.length > 0
    ) {
      const averageHeartRate = datasetAverage(
        body["activities-heart-intraday"].dataset
      );
      return {
        dateTime: appendTimeToDate(
          body["activities-heart-intraday"].dataset?.at(-1)?.time
        ),
        heartRate: averageHeartRate,
      };
    } else if (
      body &&
      body["activities-heart"] &&
      body["activities-heart"][0] &&
      body["activities-heart"][0].value.restingHeartRate
    ) {
      return {
        dateTime:
          body["activities-heart"][0].dateTime === "today"
            ? new Date().toISOString()
            : body["activities-heart"][0].dateTime,
        heartRate: body["activities-heart"][0].value.restingHeartRate,
      };
    } else {
      throw new Error(
        "Heart rate data not found or the structure is not as expected."
      );
    }
  } catch (error) {
    console.error("Error fetching heart rate data from Fitbit:", error);
    throw new Error(
      "Error fetching heart rate data from Fitbit: " +
        (error.response
          ? `${error.response.status} ${error.response.statusText}`
          : error.message)
    );
  }
};

module.exports = fetchRestingHeartRate; // Export the function if you're using modules

module.exports = {
  fetchSpO2DataByDate,
  fetchRestingHeartRate,
  fetchUserProfile,
};

function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

function getPastTimeInMinutes(minutesPassed) {
  const now = new Date();
  now.setMinutes(now.getMinutes() - +minutesPassed);
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

const datasetAverage = (data) => {
  if (data.length === 0) {
    return 0;
  } else {
    const sum = data.reduce(
      (accumulator, current) => accumulator + current.value,
      0
    );
    const average = +(sum / data.length).toFixed();
    return average;
  }
};

function appendTimeToDate(time) {
  const today = new Date();
  const [hours, minutes, seconds] = time.split(":");
  today.setHours(hours, minutes, seconds, 0);
  return today.toISOString();
}
