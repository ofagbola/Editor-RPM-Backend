import { AuthModel } from '../models/auth.model';
import * as utils from '../utils/utils';
import { RequestError } from '../utils/errors';
import { ISignupRequest } from 'src/interfaces/auth.interface';
import { IResponse } from '../interfaces';
import * as grpc from '@grpc/grpc-js';
import { v4 as uuidv4 } from 'uuid';

/**
 * Sign up
 * @return promise
 */

export const signUp = async (payload: ISignupRequest): Promise<IResponse> => {
  try {
    const user = await AuthModel.findUserEmail(payload.email, [
      'user_id',
      'user_email',
    ]);

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
