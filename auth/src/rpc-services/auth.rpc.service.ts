import * as grpc from '@grpc/grpc-js';
import logger from '../utils/logger';
import * as controller from '../controllers/auth.controller';
import { authProtoDefinition } from '../protos';
import { applyMiddleware, authorizer } from '../middlewares/app.middleware';
import { validateSchema } from '../utils/utils';
import {
  ClinicianSignUpSchema,
  CreatePasswordSchema,
  ForgotPasswordSchema,
  LoginSchema,
  PatientSignUpSchema,
  ResetPasswordSchema,
  UpdateAccountSchema,
  UpdatePatientInsuranceSchema,
  VerifyAccountSchema,
  VerifyOtpSchema,
} from '../schemas/auth.schema';

/**
 * Auth RPC Services.
 * @param  {Server} server
 *
 */

export const authRpcService = (server: grpc.Server | undefined): void => {
  try {
    server!.addService(authProtoDefinition.AuthServices.service, {
      patientSignup: applyMiddleware([
        validateSchema(PatientSignUpSchema),
        controller.patientSignup,
      ]),
      verifyAccount: applyMiddleware([
        validateSchema(VerifyAccountSchema),
        controller.verifyAccount,
      ]),

      // finishUpAccount: applyMiddleware([
      //   validateSchema(UpdateAccountSchema),
      //   controller.finishUpAccount,
      // ]),

      login: applyMiddleware([validateSchema(LoginSchema), controller.login]),

      verifyOneTimePassword: applyMiddleware([
        validateSchema(VerifyOtpSchema),
        controller.verifyOneTimePassword,
      ]),
      resetPassword: applyMiddleware([
        validateSchema(ResetPasswordSchema),
        controller.resetPassword,
      ]),
      forgotPassword: applyMiddleware([
        validateSchema(ForgotPasswordSchema),
        controller.forgotPassword,
      ]),

      createPassword: applyMiddleware([
        validateSchema(CreatePasswordSchema),
        controller.createPassword,
      ]),

      updateInsurance: applyMiddleware([
        validateSchema(UpdatePatientInsuranceSchema),
        controller.updateInsurance,
      ]),

      clinicianSignup: applyMiddleware([
        validateSchema(ClinicianSignUpSchema),
        controller.clinicianSignup,
      ]),
    });
     logger.info(`Auth services loaded`);
  } catch (error) {
    logger.error(`Auth services failed to load ${error}`);
  }
};
