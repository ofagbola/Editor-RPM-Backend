import { AuthModel } from "../models/auth.model";
import * as utils from "../utils/utils";
import { RequestError } from "../utils/errors";
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
} from "../interfaces/auth.interface";
import { IResponse } from "../interfaces";
import * as grpc from "@grpc/grpc-js";
import { v4 as uuidv4 } from "uuid";
import { sendNotification } from "../../src/services/mail.services";

/**
 * Forgot password
 * @return promise
 */

export const forgotPassword = async (
  payload: IForgotPasswordRequest
): Promise<IResponse> => {
  try {
    const user = await AuthModel.findUserEmail(
      "users",
      ["user_id", "user_email"],
      payload.email
    );

    if (user.length === 0) {
      throw new RequestError({
        code: grpc.status.NOT_FOUND,
        message: "User not found",
      });
    }

    const { user_id } = user[0];

    const verificationCode = await utils.generateOTP();

    await AuthModel.updateUser(
      "verifications",
      ["otp"],
      {
        otp: verificationCode,
      },

      user_id
    );

    return {
      code: grpc.status.OK,
      message: "Verification code sent",
      data: [],
    };
  } catch (error) {
    throw error;
  }
};

/**
 * Reset password
 * @return promise
 */

export const resetPassword = async (
  payload: IPasswordResetRequest
): Promise<IResponse> => {
  try {
    const user = await AuthModel.findUserEmail(
      "users",
      ["user_id", "user_email"],
      payload.email
    );

    if (user.length === 0) {
      throw new RequestError({
        code: grpc.status.NOT_FOUND,
        message: "User not found",
      });
    }

    const { user_id } = user[0];

    const hashedPassword = await utils.hashPassword(payload.new_password, 10);

    await AuthModel.updateUser(
      "users",
      ["password"],
      {
        password: hashedPassword,
      },
      user_id
    );

    return {
      code: grpc.status.OK,
      message: "Password updated",
      data: [],
    };
  } catch (error) {
    throw error;
  }
};

/**
 * Patient Sign up
 * @return promise
 */

export const patientSignUp = async (
  payload: IPatientSignupRequest
): Promise<IResponse> => {
  try {
    const user = await AuthModel.findUserEmail(
      "users",
      ["user_id", "user_email"],
      payload.email
    );

    if (user.length > 0) {
      throw new RequestError({
        code: grpc.status.ALREADY_EXISTS,
        message: "Account already exist",
      });
    }

    const id = uuidv4();
    const verificationCode = await utils.generateOTP();

    await AuthModel.patientSignup({
      email: payload.email,
      user_id: id,
      first_name: payload.first_name,
      last_name: payload.last_name,
      dob: payload.dob,
      phone_number: payload.phone_number,
      user_type: "patient",
      otp: verificationCode,
    });

    await sendNotification({
      subject: `Email Verification`,
      message: `Your verification code is ${verificationCode}`,
      category: "OTP Verification",
    });

    return {
      code: grpc.status.OK,
      message: "Successfully signed up",
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
      "users",
      ["user_id"],
      payload.email
    );

    if (user.length === 0) {
      throw new RequestError({
        code: grpc.status.NOT_FOUND,
        message: "User not found",
      });
    }

    const verification = await AuthModel.findUserById(
      "verifications",
      ["user_id", "is_verified", "otp"],
      user[0]?.user_id
    );

    if (verification.length === 0) {
      throw new RequestError({
        code: grpc.status.INVALID_ARGUMENT,
        message: "Invalid code",
      });
    }

    const { user_id, otp, is_verified } = verification[0];

    if (is_verified) {
      throw new RequestError({
        code: grpc.status.OK,
        message: "Account verified",
      });
    }

    if (otp !== payload.code) {
      throw new RequestError({
        code: grpc.status.OK,
        message: "Invalid code",
      });
    }

    await AuthModel.updateUser(
      "verifications",
      ["is_verified", "otp"],
      {
        is_verified: true,
        otp: "",
      },
      user_id
    );

    return {
      code: grpc.status.OK,
      message: "Verified Successfully",
      data: [],
    };
  } catch (error) {
    throw error;
  }
};

/**
 * Update patient insurance
 * @return promise
 */

export const updateInsurance = async (
  payload: IUpdateAccountInsuranceRequest
): Promise<IResponse> => {
  try {
    const {
      medicalHistory: medical_history,
      provider,
      out_of_network_expenses,
      co_pay,
      out_of_pocket_expenses,
      email,
    } = payload;

    const user = await AuthModel.findUserEmail("users", ["user_id"], email);

    if (user.length === 0) {
      throw new RequestError({
        code: grpc.status.NOT_FOUND,
        message: "User not found",
      });
    }

    const { user_id } = user[0];

    console.log({ user });

    const insuranceExist = await AuthModel.findUserById(
      "patient_insurance",
      ["user_id"],
      user_id
    );

    console.log({ insuranceExist });

    if (insuranceExist.length > 0) {
      throw new RequestError({
        code: grpc.status.NOT_FOUND,
        message: "Insurance provider already linked",
      });
    }

    await AuthModel.createInsurance({
      medical_history,
      provider,
      out_of_network_expenses,
      out_of_pocket_expenses,
      co_pay,
      user_id,
      id: uuidv4(),
    });

    return {
      code: grpc.status.OK,
      message: "Insurance provider linked",
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
  console.log({ payloadEmail: payload.email });
  try {
    const user = await AuthModel.findUserEmail(
      "users",
      ["user_id", "user_email", "password"],
      payload.email
    );

    console.log({ user });

    if (user.length === 0) {
      throw new RequestError({
        code: grpc.status.NOT_FOUND,
        message: "User not found",
      });
    }

    const { user_email, user_id, password: hashedPassword } = user[0];

    if (hashedPassword === null || hashedPassword === undefined) {
      throw new RequestError({
        code: grpc.status.INVALID_ARGUMENT,
        message: "Set up a valid password for the account",
      });
    }

    const verification = await AuthModel.findUserById(
      "verifications",
      ["is_verified"],
      user_id
    );

    console.log({ verification });

    if (verification.length === 0 || verification[0]?.is_verified === false) {
      throw new RequestError({
        code: grpc.status.NOT_FOUND,
        message: "Account not verified",
      });
    }

    const isValidPassword = await utils.comparePassword(
      payload.password,
      hashedPassword
    );

    if (!isValidPassword) {
      throw new RequestError({
        code: grpc.status.INVALID_ARGUMENT,
        message: "Invalid credentials",
      });
    }

    const verificationCode = await utils.generateOTP();

    const token = await utils.jwtToken({
      user_id,
      user_email,
    });

    await AuthModel.updateUser(
      "verifications",
      ["access_token", "otp"],
      {
        access_token: token,
        otp: verificationCode,
      },

      user_id
    );

    return {
      code: grpc.status.OK,
      message: "Login successfully",
      data: {
        token,
      },
    };
  } catch (error) {
    throw error;
  }
};

/**
 * Verify one time password
 * @return promise
 */

export const verifyOneTimePassword = async (
  payload: IVerifyOneTimePasswordRequest
): Promise<IResponse> => {
  try {
    const user = await AuthModel.findUserEmail(
      "users",
      ["user_id", "user_email"],
      payload.email
    );

    if (user.length === 0) {
      throw new RequestError({
        code: grpc.status.NOT_FOUND,
        message: "User not found",
      });
    }

    const { user_id, user_email } = user[0];

    const verification = await AuthModel.findUserById(
      "verifications",
      ["otp"],
      user_id
    );

    if (verification.length === 0) {
      throw new RequestError({
        code: grpc.status.NOT_FOUND,
        message: "Invalid code",
      });
    }

    const { otp } = verification[0];

    if (payload.code !== otp) {
      throw new RequestError({
        code: grpc.status.INVALID_ARGUMENT,
        message: "Invalid code",
      });
    }

    const token = await utils.jwtToken({
      user_id,
      user_email,
    });

    await AuthModel.updateUser(
      "verifications",
      ["access_token", "is_verified"],
      {
        access_token: token,
        is_verified: true,
      },
      user_id
    );

    return {
      code: grpc.status.OK,
      message: "One time password verified",
      data: {
        token,
      },
    };
  } catch (error) {
    throw error;
  }
};

/**
 * Create account password
 * @return promise
 */

export const createPassword = async (
  payload: ICreatePasswordRequest
): Promise<IResponse> => {
  try {
    const { email, password } = payload;

    const user = await AuthModel.findUserEmail("users", ["user_id"], email);

    if (user.length === 0) {
      throw new RequestError({
        code: grpc.status.NOT_FOUND,
        message: "User not found",
      });
    }

    const { user_id } = user[0];
    const hashedPassword = await utils.hashPassword(password, 10);

    await AuthModel.updateUser(
      "users",
      ["password"],
      {
        password: hashedPassword,
      },
      user_id
    );

    return {
      code: grpc.status.OK,
      message: "Password created",
      data: [],
    };
  } catch (error) {
    throw error;
  }
};

/**
 * Clinician Sign up
 * @return promise
 */

export const clinicianSignUp = async (
  payload: IClinicianSignupRequest
): Promise<IResponse> => {
  try {
    const user = await AuthModel.findUserEmail(
      "users",
      ["user_id", "user_email"],
      payload.email
    );

    if (user.length > 0) {
      throw new RequestError({
        code: grpc.status.ALREADY_EXISTS,
        message: "Account already exist",
      });
    }

    const id = uuidv4();
    const verificationCode = await utils.generateOTP();

    await AuthModel.clinicianSignup({
      otp: verificationCode,
      email: payload.email,
      user_id: id,
      first_name: payload.first_name,
      last_name: payload.last_name,
      location: payload.location,
      gender: payload.gender,
      language: payload.language,
      ethnicity: payload.ethnicity,
      phone_number: payload.phone_number,
      user_type: "clinician",
      credentials: payload.credentials,
      clinic_id: payload.clinic_id,
      clinic_name: payload.clinic_name,
      specialties: payload.specialties,
      accept_patient: payload.accept_patient,
      image: payload.image,
    });

    return {
      code: grpc.status.OK,
      message: "Successfully signed up",
      data: [],
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
