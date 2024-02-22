import Ajv, { DefinedError, AnySchema } from 'ajv';
import * as grpc from '@grpc/grpc-js';


const ajv = new Ajv({
  allErrors: true,
});

/**
 * Validate schema middleware.
 * @param  {AnySchema} schema
 */
export const validateSchema = (schema: AnySchema) => {
  return function (call: any, callback: any, next: any) {
    
    const payload = {};
    const validate = ajv.compile(schema);

    if (!validate(payload)) {
      const errors: string[] = [];
      for (const err of validate.errors as DefinedError[]) {
        if (err.message) {
          errors.push(err.message);
        }
      }
      const res = buildErrorResponse(errors, grpc.status.INVALID_ARGUMENT);
      callback({
        code: res.code,
        message: res.details,
      });
    }

    return next(call);
  };
};

export const buildSuccessResponse = (data: object | [] | null, status: grpc.status) => {
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
  errors: string[] | object,
  status: grpc.status
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

