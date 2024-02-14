import { buildErrorResponse } from "../utils/utils";
import * as grpc from '@grpc/grpc-js';

export const authorizer = (call: any, callback: any, next: any) => {
  try {
    // console.log(call);
    next(call);
  } catch (error) {
    callback(error, null);
  }
};

export const applyMiddleware = (middlewareChain: any[]) => {
  try {
    return function (call: any, callback: any): void {
      try {
        handleRequestWithMiddleware(call, callback, 0);
      } catch (error: any) {
        const res = buildErrorResponse(
          error,
          error.status ?? grpc.status.INTERNAL
        );
        callback({
          code: res.code,
          details: res.details,
        });
      }
    };

    function handleRequestWithMiddleware(
      request: any,
      callback: any,
      middlewareIndex = 0
    ) {
      try {
        if (middlewareIndex < middlewareChain.length) {
          const currentMiddleware = middlewareChain[middlewareIndex];

          const nextMiddleware = (request: any) => {
            return handleRequestWithMiddleware(
              request,
              callback,
              middlewareIndex + 1
            );
          };

          return currentMiddleware(request, callback, nextMiddleware);
        } else {
          return request; // Return the final request data
        }
      } catch (error: any) {
        const res = buildErrorResponse(
          error,
          error.status ?? grpc.status.INTERNAL
        );
        callback({
          code: res.code,
          message: res.details,
        });
      }
    }
  } catch (error) {
    throw error;
  }
};
