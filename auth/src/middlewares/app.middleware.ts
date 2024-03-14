import { buildErrorResponse, jwtVerifyToken } from '../utils/utils';
import * as grpc from '@grpc/grpc-js';

export const authorizer = async (call: any, callback: any) => {
  try {
    const metadata = call.metadata;
    let authorizer = metadata.get('authorization');

    authorizer = Array.from(authorizer);
    const res = buildErrorResponse('UnAuthorized', grpc.status.UNAUTHENTICATED);

    if (authorizer === undefined || authorizer[0] === undefined) {
      // callback({
      //   code: res.code,
      //   details: res.details,
      // });
    }

    const token = authorizer[0].split(' ');

    // const validToken = await jwtVerifyToken(token[1]);
    // console.log(validToken, 'here');

    //next(call);
    call.end();
  } catch (error: any) {
    console.log(error);
    // const res = buildErrorResponse('UnAuthorized', grpc.status.UNAUTHENTICATED);
    // callback({
    //   code: res.code,
    //   details: res.details,
    // });
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
