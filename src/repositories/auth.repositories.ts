import { AuthModel } from '../models/auth.model';
import * as utils from '../utils/utils';
import { RequestError } from '../utils/errors';
import {
  ILoginRequest,
  ISignupRequest,
  IUpdateAccountRequest,
  IVerifyAccountRequest,
} from 'src/interfaces/auth.interface';
import { IResponse } from '../interfaces';
import * as grpc from '@grpc/grpc-js';
import { v4 as uuidv4 } from 'uuid';

/**
 * Sign up
 * @return promise
 */

export const signUp = async (payload: ISignupRequest): Promise<IResponse> => {
  try {
    const user = await AuthModel.findUserEmail(
      'users',
      ['user_id', 'user_email'],
      payload.email
    );

    if (user.length > 0) {
      throw new RequestError({
        code: grpc.status.ALREADY_EXISTS,
        message: 'Account already exist',
      });
    }

    const id = uuidv4();
    const verificationCode = await utils.generateOTP();

    await AuthModel.createVerification({
      otp: verificationCode,
      user_id: id,
    });

    await AuthModel.signup({
      email: payload.email,
      user_id: id,
    });

    return {
      code: grpc.status.OK,
      message: 'Successfully signed up',
      data: [],
    };
  } catch (error) {
    throw error;
  }
};

/**
 * Verify account
 * @return promise
 */

export const verifyAccount = async (
  payload: IVerifyAccountRequest
): Promise<IResponse> => {
  try {
    const user = await AuthModel.findUserEmail(
      'users',
      ['user_id'],
      payload.email
    );

    if (user.length === 0) {
      throw new RequestError({
        code: grpc.status.NOT_FOUND,
        message: 'User not found',
      });
    }

    const verification = await AuthModel.findUserById(
      'verifications',
      ['user_id', 'is_verified', 'otp'],
      user[0]?.user_id
    );

    if (verification.length === 0) {
      throw new RequestError({
        code: grpc.status.INVALID_ARGUMENT,
        message: 'Invalid code',
      });
    }

    const { user_id, otp, is_verified } = verification[0];

    if (is_verified) {
      throw new RequestError({
        code: grpc.status.OK,
        message: 'Account verified',
      });
    }

    if (otp !== payload.code) {
      throw new RequestError({
        code: grpc.status.OK,
        message: 'Invalid code',
      });
    }

    await AuthModel.updateUser(
      'verifications',
      ['is_verified', 'otp'],
      {
        is_verified: true,
        otp: '',
      },
      user_id
    );

    return {
      code: grpc.status.OK,
      message: 'Verified Successfully',
      data: [],
    };
  } catch (error) {
    throw error;
  }
};

/**
 * Update account
 * @return promise
 */

export const updateAccount = async (
  payload: IUpdateAccountRequest
): Promise<IResponse> => {
  try {
    const { first_name, last_name, email, date_of_birth, password } = payload;

    const user = await AuthModel.findUserEmail(
      'users',
      ['user_id'],
      payload.email
    );

    if (user.length === 0) {
      throw new RequestError({
        code: grpc.status.NOT_FOUND,
        message: 'User not found',
      });
    }

    const { user_id } = user[0];

    const hashedPassword = await utils.hashPassword(password, 10);

    await AuthModel.updateUser(
      'users',
      ['first_name', 'last_name', 'user_email', 'dob', 'password'],
      {
        first_name,
        last_name,
        user_email: email,
        dob: date_of_birth,
        password: hashedPassword,
      },
      user_id
    );

    return {
      code: grpc.status.OK,
      message: 'Account updated',
      data: [],
    };
  } catch (error) {
    throw error;
  }
};

/**
 * Login
 * @return promise
 */

export const login = async (payload: ILoginRequest): Promise<IResponse> => {
  try {
    const user = await AuthModel.findUserEmail(
      'users',
      ['user_id', 'user_email', 'password'],
      payload.email
    );

    if (user.length === 0) {
      throw new RequestError({
        code: grpc.status.NOT_FOUND,
        message: 'User not found',
      });
    }

    const { user_email, user_id, password: hashedPassword } = user[0];

    const verification = await AuthModel.findUserById(
      'verifications',
      ['is_verified'],
      user_id
    );

    if (verification.length === 0 || verification[0]?.is_verified === false) {
      throw new RequestError({
        code: grpc.status.NOT_FOUND,
        message: 'Account not verified',
      });
    }

    const isValidPassword = await utils.comparePassword(
      payload.password,
      hashedPassword
    );

    if (!isValidPassword) {
      throw new RequestError({
        code: grpc.status.INVALID_ARGUMENT,
        message: 'Invalid credentials',
      });
    }

    const token = await utils.jwtToken({
      user_id,
      user_email,
    });

    await AuthModel.updateUser(
      'verifications',
      ['access_token'],
      {
        access_token: token,
      },
      user_id
    );

    return {
      code: grpc.status.OK,
      message: 'Login successfully',
      data: [
        {
          token,
          user_id,
          email: user_email,
        },
      ],
    };
  } catch (error) {
    throw error;
  }
};
