import * as grpc from '@grpc/grpc-js';
import logger from '../utils/logger';
import * as auth_controller from '../controllers/auth.controller';
import { authProtoDefinition } from '../protos';
import { applyMiddleware, authorizer } from '../middlewares/app.middleware';
import { validateSchema } from '../utils/utils';
import { SignUpSchema } from '../schemas/auth.schema';



/**
 * Auth RPC Services.
 * @param  {Server} server
 *
 */

export const authRpcService = (server: grpc.Server | undefined): void => {
  try {
    server!.addService(authProtoDefinition.AuthServices.service, {
      signup: applyMiddleware([
        validateSchema(SignUpSchema),
        auth_controller.signup,
      ]),
      verifyAccount: auth_controller.verifyAccount,
      finishUpAccount: auth_controller.finishUpAccount,
    });
  } catch (error) {
    logger.error(`Auth services failed to load ${error}`);
  }
};
