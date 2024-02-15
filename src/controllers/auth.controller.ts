import * as utils from '../utils/utils';
import * as services from '../services/auth.services';
import { DataBaseError, RequestError } from '../utils/errors';
import * as grpc from '@grpc/grpc-js';

/**
 * Signup  Controller.
 * @param  {grpc.Call} call
 * @param  {grpc.requestCallback} callback
 *
 */

export const signup = async (call: any, callback: any): Promise<void> => {
  try {
    const { email } = call.request;

    const payload = {
      email,
    };

    const response = await services.signUp(payload);

    callback(null, {
      message: response.message,
      statusCode: response.code,
      data: JSON.stringify(response.data),
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
 * @param  {grpc.requestCallback} callback
 */

export const verifyAccount = async (
  call: any,
  callback: any
): Promise<void> => {
  try {
    const { email, code } = call.request;

    const payload = {
      email,
      code,
    };

    const response = await services.verifyAccount(payload);

    callback(null, {
      message: response.message,
      statusCode: response.code,
      data: JSON.stringify(response.data),
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
 * Finish Up Account Controller.
 * @param  {grpc.Call} call
 * @param  {grpc.requestCallback} callback
 *
 */

export const finishUpAccount = async (
  call: any,
  callback: any
): Promise<void> => {
  try {
    const { first_name, last_name, email, date_of_birth, password } =
      call.request;

    const payload = {
      first_name,
      last_name,
      email,
      date_of_birth,
      password,
    };

    const response = await services.updateAccount(payload);

    callback(null, {
      message: response.message,
      statusCode: response.code,
      data: JSON.stringify(response.data),
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
 * Login Controller.
 * @param  {grpc.Call} call
 * @param  {grpc.requestCallback} callback
 *
 */

export const login = async (call: any, callback: any): Promise<void> => {
  try {
    const { email, password } = call.request;

    const payload = {
      email,
      password,
    };

    const response = await services.login(payload);

    callback(null, {
      message: response.message,
      statusCode: response.code,
      data: JSON.stringify(response.data),
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