/**
 * @file Auth repository.
 */


import { AuthModel } from '../models/auth.model';
import * as utils from '../utils/utils';
import { RequestError } from '../utils/errors';
import { ISignupRequest } from 'src/interfaces/auth.interface';

/**
 * Sign up
 * @return promise
 */

export const signUp = async (payload: ISignupRequest) => {
  try {
    await AuthModel.signup(['texting'], '');

    // return {
    //   code: 200,
    //   message: 'Project upgraded successfully',
    //   data: [{}],
    // };
  } catch (error) {
    throw error;
  }
};
