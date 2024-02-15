import { ISignupRequest } from 'src/interfaces/auth.interface';
import * as auth_repository from '../repositories/auth.repositories';

/**
 * @file auth service.
 */

/**
 * Sign up.
 * @returns Promise
 */
export const signUp = async (payload: ISignupRequest) => {
  try {
    await auth_repository.signUp(payload);
  } catch (error) {
    throw error;
  }
};
