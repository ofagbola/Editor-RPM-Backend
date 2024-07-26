const axios = require("axios");

const AUTH_BASE_URL = process.env.AUTH_SERVICE;

const authenticateUser = async (req, res, next) => {
  const bearerToken = req.headers["authorization"];
  const username = req.headers["x-username"];

  if (!!bearerToken) {
    try {
      const token = bearerToken?.split(" ")[1];
      console.log({ token, username });

      const response = await axios(
        `${AUTH_BASE_URL}/v1/get_profile?username=${username}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      if (response?.data) {
        next();
      } else {
        return res.status(response?.status);
      }
    } catch (error) {
      console.log({ error });
      res
        .status(error?.response?.status || 500)
        .json({ error: error?.response?.data || error });
    }
  }

  // next();
};

module.exports = { authenticateUser };
