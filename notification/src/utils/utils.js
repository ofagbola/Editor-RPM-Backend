import jwt from 'jsonwebtoken';

/**
 * Builds a success response.
 *
 * @param  {any} data
 */
export const buildSuccessResponse = (data) => {
  return {
    status: 'SUCCESS',
    result: data,
  };
};

/**
 * Builds an error response.
 *
 * @param  {string[]} errors
 */
export const buildErrorResponse = (errors) => {
  return {
    status: 'ERROR',
    errors,
  };
};

export const jwtToken = async (payload) => {
  return await jwt.sign(payload, process.env.JWTKEY ?? '');
};

export const jwtVerifyToken = async (token) => {
  return await jwt.verify(token, process.env.JWTKEY ?? '');
};
