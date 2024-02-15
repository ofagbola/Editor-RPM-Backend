import * as grpc from '@grpc/grpc-js';
import Joi from 'joi';

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
