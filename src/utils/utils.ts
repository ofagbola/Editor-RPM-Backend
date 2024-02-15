import * as grpc from '@grpc/grpc-js';
import Joi from 'joi';
import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';
import * as otpGenerator from 'otp-generator';

/**
 * Validate schema middleware.
 * @param  {AnySchema} schema
 */
export const validateSchema = (schema: Joi.ObjectSchema<any>) => {
  return function (call: any, callback: any, next: any) {
    try {
      const payload = call.request;
      const { error } = schema.validate(payload) as any;

      if (error) {
        const errors: string[] = [];

        for (const err of error.details) {
          if (err.message) {
            errors.push(err.message);
          }
        }

        const res = buildErrorResponse(errors, grpc.status.INVALID_ARGUMENT);
        callback({
          code: res.code,
          details: res.details,
        });
      }

      return next(call);
    } catch (error) {
      const res = buildErrorResponse('Server error', grpc.status.INTERNAL);
      callback({
        code: res.code,
        details: res.details,
      });
    }
  };
};

export const buildSuccessResponse = (
  data: object | [] | null,
  status: number
) => {
  return new grpc.StatusBuilder()
    .withCode(status)
    .withDetails(
      JSON.stringify({
        status: 'SUCCESS',
        result: data,
      })
    )
    .build();
};

export const buildErrorResponse = (
  errors: string[] | object | string,
  status: number
) => {
  return new grpc.StatusBuilder()
    .withCode(status)
    .withDetails(
      JSON.stringify({
        status: 'ERROR',
        errors,
      })
    )
    .build();
};

export const generateOTP = async (): Promise<string> => {
  return await otpGenerator.generate(6, {
    upperCaseAlphabets: true,
    lowerCaseAlphabets: false,
    digits: true,
    specialChars: false,
  });
};

export const hashPassword = async (
  password: string,
  salt = 10
): Promise<string> => {
  return await bcrypt.hash(password, salt);
};

export const comparePassword = async (
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};

export const jwtToken = async (payload: {
  [key: string]: any;
}): Promise<string> => {
  return await jwt.sign(payload, process.env!.JWTKEY ?? '');
};

export const jwtVerifyToken = async (
  token: string
): Promise<string | JwtPayload> => {
  return await jwt.verify(token, process.env!.JWTKEY ?? '');
};
