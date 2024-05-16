import { buildErrorResponse, jwtVerifyToken } from '../utils/utils.js';

/**
 * AllowedHttpMethods middleware.
 *
 * @param  {Request} req
 * @param  {Response} res
 * @param  {NextFunction} next
 */
export const allowedHttpMethods = (req, res, next) => {
  const allowedMethods = ['POST', 'GET', 'PUT', 'DELETE', 'OPTIONS'];
  if (!allowedMethods.includes(req.method)) {
    return res.status(405).json(buildErrorResponse(['Method Not Allowed']));
  }
  return next();
};

/**
 * AllowedHeader middleware.
 *
 * @param  {Request} req
 * @param  {Response} res
 * @param  {NextFunction} next
 */
export const allowedHeaders = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
};

/**
 * authorization middleware.
 *
 * @param  {Request} req
 * @param  {Response} res
 * @param  {NextFunction} next
 */

export const authorization = async (req, res, next) => {
  try {
    if (req.headers['authorization'] !== '') {
      const token = req.headers['authorization'].split(' ')[1] ?? '';

      const payload = await jwtVerifyToken(token ? token : '');
      req.user = {
        user_id: payload.user_id,
      };
      return next();
    }
    return res.status(403).json(
      buildErrorResponse({
        status: 403,
        message: 'Unauthorized',
      })
    );
  } catch (error) {
    return res.status(403).json(
      buildErrorResponse({
        status: 403,
        message: 'Unauthorized',
      })
    );
  }
};
