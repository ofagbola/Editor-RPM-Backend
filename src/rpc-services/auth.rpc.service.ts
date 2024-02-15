import * as grpc from '@grpc/grpc-js';
import logger from '../utils/logger';
import * as controller from '../controllers/auth.controller';
import { authProtoDefinition } from '../protos';
import { applyMiddleware, authorizer } from '../middlewares/app.middleware';
import { validateSchema } from '../utils/utils';
import {
  LoginSchema,
  SignUpSchema,
  UpdateAccountSchema,
  VerifyAccountSchema,
} from '../schemas/auth.schema';

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
        controller.signup,
      ]),
      verifyAccount: applyMiddleware([
        validateSchema(VerifyAccountSchema),
        controller.verifyAccount,
      ]),

      finishUpAccount: applyMiddleware([
        validateSchema(UpdateAccountSchema),
        controller.finishUpAccount,
      ]),
      login: applyMiddleware([validateSchema(LoginSchema), controller.login]),
    });
  } catch (error) {
    logger.error(`Auth services failed to load ${error}`);
  }
};
