import { IResponse } from '../interfaces';
import {
  ILoginRequest,
  ISignupRequest,
  IUpdateAccountRequest,
  IVerifyAccountRequest,
} from '../interfaces/auth.interface';
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

/**
 * Verify account.
 * @returns Promise
 */
export const verifyAccount = async (
  payload: IVerifyAccountRequest
): Promise<IResponse> => {
  try {
    return await repository.verifyAccount(payload);
  } catch (error) {
    throw error;
  }
};

/**
 * Update account.
 * @returns Promise
 */
export const updateAccount = async (
  payload: IUpdateAccountRequest
): Promise<IResponse> => {
  try {
    return await repository.updateAccount(payload);
  } catch (error) {
    throw error;
  }
};

/**
 * Login.
 * @returns Promise
 */
export const login = async (payload: ILoginRequest): Promise<IResponse> => {
  try {
    return await repository.login(payload);
  } catch (error) {
    throw error;
  }
};