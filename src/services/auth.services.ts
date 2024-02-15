import { IResponse } from '../interfaces';
import { ISignupRequest } from '../interfaces/auth.interface';
import * as repository from '../repositories/auth.repositories';

/**
 * Sign up.
 * @returns Promise
 */
export const signUp = async (payload: ISignupRequest): Promise<IResponse> => {
  try {
    return await repository.signUp(payload);
  } catch (error) {
    throw error;
  }
};
