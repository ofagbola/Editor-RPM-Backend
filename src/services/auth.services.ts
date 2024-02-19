import { IResponse } from '../interfaces';
import {
  IClinicianSignupRequest,
  ICreatePasswordRequest,
  IForgotPasswordRequest,
  ILoginRequest,
  IPasswordResetRequest,
  IPatientSignupRequest,
  IUpdateAccountInsuranceRequest,
  IVerifyAccountRequest,
  IVerifyOneTimePasswordRequest,
} from '../interfaces/auth.interface';
import * as repository from '../repositories/auth.repositories';

/**
 * Clinician Sign up.
 * @returns Promise
 */
export const clinicianSignUp = async (
  payload: IClinicianSignupRequest
): Promise<IResponse> => {
  try {
    return await repository.clinicianSignUp(payload);
  } catch (error) {
    throw error;
  }
};

/**
 * Patient Sign up.
 * @returns Promise
 */
export const patientSignUp = async (
  payload: IPatientSignupRequest
): Promise<IResponse> => {
  try {
    return await repository.patientSignUp(payload);
  } catch (error) {
    throw error;
  }
};

/**
 * Create password.
 * @returns Promise
 */
export const createPassword = async (
  payload: ICreatePasswordRequest
): Promise<IResponse> => {
  try {
    return await repository.createPassword(payload);
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
 * Update patient insurance.
 * @returns Promise
 */
export const updateAccount = async (
  payload: IUpdateAccountInsuranceRequest
): Promise<IResponse> => {
  try {
    return await repository.updateInsurance(payload);
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

/**
 * Verify one time password.
 * @returns Promise
 */
export const verifyOneTimePassword = async (
  payload: IVerifyOneTimePasswordRequest
): Promise<IResponse> => {
  try {
    return await repository.verifyOneTimePassword(payload);
  } catch (error) {
    throw error;
  }
};

/**
 * Forgot password.
 * @returns Promise
 */
export const forgotPassword = async (
  payload: IForgotPasswordRequest
): Promise<IResponse> => {
  try {
    return await repository.forgotPassword(payload);
  } catch (error) {
    throw error;
  }
};

/**
 * Reset password.
 * @returns Promise
 */
export const resetPassword = async (
  payload: IPasswordResetRequest
): Promise<IResponse> => {
  try {
    return await repository.resetPassword(payload);
  } catch (error) {
    throw error;
  }
};