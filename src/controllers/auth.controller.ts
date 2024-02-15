import * as utils from '../utils/utils';
import * as auth_services from '../services/auth.services';
import { DataBaseError, RequestError } from '../utils/errors';
import * as grpc from '@grpc/grpc-js';
/**
 * SIGNUP  Controller.
 * @param  {grpc.Call} call
 *  * @param  {NextCall} callback
 *
 */

export const signup = async (call: any, callback: any) => {
  try {
    const { email } = call.request;

    const payload = {
      email,
    };

    const response = await auth_services.signUp(payload);

    callback(null, {
      message: 'Successfully signed up',
      statusCode: grpc.status.OK,
      data: JSON.stringify(response),
    });
  } catch (error) {
    if (error instanceof DataBaseError) {
      const errorResponse = utils.buildErrorResponse(
        'Server error',
        grpc.status.INTERNAL
      );
      callback({
        code: errorResponse.code,
        message: errorResponse.details,
      });
    } else if (error instanceof RequestError) {
      const errorResponse = utils.buildErrorResponse(
        error,
        error.code ?? grpc.status.OK
      );
      callback({
        code: errorResponse.code,
        message: errorResponse.details,
      });
    } else {
      const errorResponse = utils.buildErrorResponse(
        'Server error',
        grpc.status.INTERNAL
      );
      callback({
        code: errorResponse.code,
        message: errorResponse.details,
      });
    }
  }
};

/**
 * Verify Account Controller.
 * @param  {grpc.Call} call
 *  * @param  {NextCall} callback
 *
 */

export const verifyAccount = (call: any, callback: any): void => {
  try {
    console.log(call.request);
    callback(null, {});
  } catch (error) {
    console.log(error);
    callback(error);
  }
};

/**
 * Finish Up Account  Controller.
 * @param  {grpc.Call} call
 *  * @param  {NextCall} callback
 *
 */

export const finishUpAccount = (call: any, callback: any): void => {
  try {
    console.log(call.request);
    callback(null, {});
  } catch (error) {
    console.log(error);
    callback(error);
  }
};
