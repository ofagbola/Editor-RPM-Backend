import * as grpc from '@grpc/grpc-js';
import logger from '../utils/logger';
import * as auth_controller from '../controllers/questionnaire.controller';
import { applyMiddleware, authorizer } from '../middlewares/verifyJWT.middleware';
import { validateSchema } from '../utils/utils';
import { SignUpSchema } from '../schemas/questionnaire.schema';



/**
 * Auth RPC Services.
 * @param  {Server} server
 *
 */

export const authRpcService = (server: grpc.Server | undefined): void => {
  
};
