import * as utils from '../utils/utils';
import * as services from '../services/auth.services';
import { DataBaseError, RequestError } from '../utils/errors';
import * as grpc from '@grpc/grpc-js';

/**
 * Clinician Signup  Controller.
 * @param  {grpc.Call} call
 * @param  {grpc.requestCallback} callback
 *
 */

export const clinicianSignup = async (
  call: any,
  callback: any
): Promise<void> => {
  
  try {
    const {
      email,
      first_name,
      last_name,
      phone_number,
      location,
      credentials,
      ethnicity,
      gender,
      language,
      specialties,
      image,
      clinic_name,
      clinic_id,
      accept_patient,
    } = call.request;

    const payload = {
      email,
      first_name,
      last_name,
      phone_number,
      location,
      ethnicity,
      gender,
      language,
      credentials,
      specialties,
      image,
      clinic_name,
      clinic_id,
      accept_patient,
    };

    const response = await services.clinicianSignUp(payload);

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
 * Patient Signup  Controller.
 * @param  {grpc.Call} call
 * @param  {grpc.requestCallback} callback
 *
 */

export const patientSignup = async (
  call: any,
  callback: any
): Promise<void> => {
  try {
    const { email, date_of_birth, first_name, last_name, phone_number } =
      call.request;

    const payload = {
      email,
      dob: date_of_birth,
      first_name,
      last_name,
      phone_number,
    };

    const response = await services.patientSignUp(payload);

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
 * Create password Controller.
 * @param  {grpc.Call} call
 * @param  {grpc.requestCallback} callback
 */

export const createPassword = async (
  call: any,
  callback: any
): Promise<void> => {
  try {
    const { email, password } = call.request;

    const payload = {
      email,
      password,
    };

    const response = await services.createPassword(payload);

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
 * Verify One Time Password Controller.
 * @param  {grpc.Call} call
 * @param  {grpc.requestCallback} callback
 */

export const verifyOneTimePassword = async (
  call: any,
  callback: any
): Promise<void> => {
  try {
    const { email, code } = call.request;

    const payload = {
      email,
      code,
    };

    const response = await services.verifyOneTimePassword(payload);

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
 *  Update patient insurance Controller
 * @param  {grpc.Call} call
 * @param  {grpc.requestCallback} callback
 *
 */

export const updateInsurance = async (
  call: any,
  callback: any
): Promise<void> => {
  try {
    const {
      medicalHistory,
      provider,
      out_of_network_expenses,
      co_pay,
      out_of_pocket_expenses,
      email,
    } = call.request;

    const payload = {
      medicalHistory,
      provider,
      out_of_network_expenses,
      co_pay,
      out_of_pocket_expenses,
      email,
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

/*
 * Forgot Password Controller.
 * @param  {grpc.Call} call
 * @param  {grpc.requestCallback} callback
 */

export const forgotPassword = async (
  call: any,
  callback: any
): Promise<void> => {
  try {
    const { email } = call.request;

    const payload = {
      email,
    };

    const response = await services.forgotPassword(payload);

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

/*
 * Reset Password Controller.
 * @param  {grpc.Call} call
 * @param  {grpc.requestCallback} callback
 */

export const resetPassword = async (
  call: any,
  callback: any
): Promise<void> => {
  try {
    const { email, new_password } = call.request;

    const payload = {
      email,
      new_password,
    };

    const response = await services.resetPassword(payload);

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
