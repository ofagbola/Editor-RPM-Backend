// package:
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as auth_pb from "./auth_pb";

interface IAuthServicesService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  patientSignup: IAuthServicesService_IPatientSignup;
  clinicianSignup: IAuthServicesService_IClinicianSignup;
  login: IAuthServicesService_ILogin;
  verifyAccount: IAuthServicesService_IVerifyAccount;
  createPassword: IAuthServicesService_ICreatePassword;
  verifyOneTimePassword: IAuthServicesService_IVerifyOneTimePassword;
  forgotPassword: IAuthServicesService_IForgotPassword;
  resetPassword: IAuthServicesService_IResetPassword;
  updateInsurance: IAuthServicesService_IUpdateInsurance;
}

interface IAuthServicesService_IPatientSignup
  extends grpc.MethodDefinition<
    auth_pb.PatientSignupPayload,
    auth_pb.Response
  > {
  path: "/AuthServices/PatientSignup";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<auth_pb.PatientSignupPayload>;
  requestDeserialize: grpc.deserialize<auth_pb.PatientSignupPayload>;
  responseSerialize: grpc.serialize<auth_pb.Response>;
  responseDeserialize: grpc.deserialize<auth_pb.Response>;
}
interface IAuthServicesService_IClinicianSignup
  extends grpc.MethodDefinition<
    auth_pb.ClinicianSignupPayload,
    auth_pb.Response
  > {
  path: "/AuthServices/ClinicianSignup";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<auth_pb.ClinicianSignupPayload>;
  requestDeserialize: grpc.deserialize<auth_pb.ClinicianSignupPayload>;
  responseSerialize: grpc.serialize<auth_pb.Response>;
  responseDeserialize: grpc.deserialize<auth_pb.Response>;
}
interface IAuthServicesService_ILogin
  extends grpc.MethodDefinition<auth_pb.LoginPayload, auth_pb.Response> {
  path: "/AuthServices/Login";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<auth_pb.LoginPayload>;
  requestDeserialize: grpc.deserialize<auth_pb.LoginPayload>;
  responseSerialize: grpc.serialize<auth_pb.Response>;
  responseDeserialize: grpc.deserialize<auth_pb.Response>;
}
interface IAuthServicesService_IVerifyAccount
  extends grpc.MethodDefinition<
    auth_pb.VerifyAccountPayload,
    auth_pb.Response
  > {
  path: "/AuthServices/VerifyAccount";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<auth_pb.VerifyAccountPayload>;
  requestDeserialize: grpc.deserialize<auth_pb.VerifyAccountPayload>;
  responseSerialize: grpc.serialize<auth_pb.Response>;
  responseDeserialize: grpc.deserialize<auth_pb.Response>;
}
interface IAuthServicesService_ICreatePassword
  extends grpc.MethodDefinition<
    auth_pb.CreatePasswordPayload,
    auth_pb.Response
  > {
  path: "/AuthServices/CreatePassword";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<auth_pb.CreatePasswordPayload>;
  requestDeserialize: grpc.deserialize<auth_pb.CreatePasswordPayload>;
  responseSerialize: grpc.serialize<auth_pb.Response>;
  responseDeserialize: grpc.deserialize<auth_pb.Response>;
}
interface IAuthServicesService_IVerifyOneTimePassword
  extends grpc.MethodDefinition<
    auth_pb.VerifyOneTimePasswordPayload,
    auth_pb.Response
  > {
  path: "/AuthServices/VerifyOneTimePassword";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<auth_pb.VerifyOneTimePasswordPayload>;
  requestDeserialize: grpc.deserialize<auth_pb.VerifyOneTimePasswordPayload>;
  responseSerialize: grpc.serialize<auth_pb.Response>;
  responseDeserialize: grpc.deserialize<auth_pb.Response>;
}
interface IAuthServicesService_IForgotPassword
  extends grpc.MethodDefinition<auth_pb.ForgotPayload, auth_pb.Response> {
  path: "/AuthServices/ForgotPassword";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<auth_pb.ForgotPayload>;
  requestDeserialize: grpc.deserialize<auth_pb.ForgotPayload>;
  responseSerialize: grpc.serialize<auth_pb.Response>;
  responseDeserialize: grpc.deserialize<auth_pb.Response>;
}
interface IAuthServicesService_IResetPassword
  extends grpc.MethodDefinition<auth_pb.ResetPayload, auth_pb.Response> {
  path: "/AuthServices/ResetPassword";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<auth_pb.ResetPayload>;
  requestDeserialize: grpc.deserialize<auth_pb.ResetPayload>;
  responseSerialize: grpc.serialize<auth_pb.Response>;
  responseDeserialize: grpc.deserialize<auth_pb.Response>;
}
interface IAuthServicesService_IUpdateInsurance
  extends grpc.MethodDefinition<auth_pb.InsurancePayload, auth_pb.Response> {
  path: "/AuthServices/UpdateInsurance";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<auth_pb.InsurancePayload>;
  requestDeserialize: grpc.deserialize<auth_pb.InsurancePayload>;
  responseSerialize: grpc.serialize<auth_pb.Response>;
  responseDeserialize: grpc.deserialize<auth_pb.Response>;
}

export const AuthServicesService: IAuthServicesService;

export interface IAuthServicesServer {
  patientSignup: grpc.handleUnaryCall<
    auth_pb.PatientSignupPayload,
    auth_pb.Response
  >;
  clinicianSignup: grpc.handleUnaryCall<
    auth_pb.ClinicianSignupPayload,
    auth_pb.Response
  >;
  login: grpc.handleUnaryCall<auth_pb.LoginPayload, auth_pb.Response>;
  verifyAccount: grpc.handleUnaryCall<
    auth_pb.VerifyAccountPayload,
    auth_pb.Response
  >;
  createPassword: grpc.handleUnaryCall<
    auth_pb.CreatePasswordPayload,
    auth_pb.Response
  >;
  verifyOneTimePassword: grpc.handleUnaryCall<
    auth_pb.VerifyOneTimePasswordPayload,
    auth_pb.Response
  >;
  forgotPassword: grpc.handleUnaryCall<auth_pb.ForgotPayload, auth_pb.Response>;
  resetPassword: grpc.handleUnaryCall<auth_pb.ResetPayload, auth_pb.Response>;
  updateInsurance: grpc.handleUnaryCall<
    auth_pb.InsurancePayload,
    auth_pb.Response
  >;
}

export interface IAuthServicesClient {
  patientSignup(
    request: auth_pb.PatientSignupPayload,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  patientSignup(
    request: auth_pb.PatientSignupPayload,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  patientSignup(
    request: auth_pb.PatientSignupPayload,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  clinicianSignup(
    request: auth_pb.ClinicianSignupPayload,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  clinicianSignup(
    request: auth_pb.ClinicianSignupPayload,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  clinicianSignup(
    request: auth_pb.ClinicianSignupPayload,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  login(
    request: auth_pb.LoginPayload,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  login(
    request: auth_pb.LoginPayload,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  login(
    request: auth_pb.LoginPayload,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  verifyAccount(
    request: auth_pb.VerifyAccountPayload,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  verifyAccount(
    request: auth_pb.VerifyAccountPayload,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  verifyAccount(
    request: auth_pb.VerifyAccountPayload,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  createPassword(
    request: auth_pb.CreatePasswordPayload,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  createPassword(
    request: auth_pb.CreatePasswordPayload,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  createPassword(
    request: auth_pb.CreatePasswordPayload,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  verifyOneTimePassword(
    request: auth_pb.VerifyOneTimePasswordPayload,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  verifyOneTimePassword(
    request: auth_pb.VerifyOneTimePasswordPayload,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  verifyOneTimePassword(
    request: auth_pb.VerifyOneTimePasswordPayload,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  forgotPassword(
    request: auth_pb.ForgotPayload,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  forgotPassword(
    request: auth_pb.ForgotPayload,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  forgotPassword(
    request: auth_pb.ForgotPayload,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  resetPassword(
    request: auth_pb.ResetPayload,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  resetPassword(
    request: auth_pb.ResetPayload,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  resetPassword(
    request: auth_pb.ResetPayload,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  updateInsurance(
    request: auth_pb.InsurancePayload,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  updateInsurance(
    request: auth_pb.InsurancePayload,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  updateInsurance(
    request: auth_pb.InsurancePayload,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
}

export class AuthServicesClient
  extends grpc.Client
  implements IAuthServicesClient
{
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: object
  );
  public patientSignup(
    request: auth_pb.PatientSignupPayload,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  public patientSignup(
    request: auth_pb.PatientSignupPayload,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  public patientSignup(
    request: auth_pb.PatientSignupPayload,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  public clinicianSignup(
    request: auth_pb.ClinicianSignupPayload,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  public clinicianSignup(
    request: auth_pb.ClinicianSignupPayload,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  public clinicianSignup(
    request: auth_pb.ClinicianSignupPayload,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  public login(
    request: auth_pb.LoginPayload,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  public login(
    request: auth_pb.LoginPayload,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  public login(
    request: auth_pb.LoginPayload,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  public verifyAccount(
    request: auth_pb.VerifyAccountPayload,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  public verifyAccount(
    request: auth_pb.VerifyAccountPayload,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  public verifyAccount(
    request: auth_pb.VerifyAccountPayload,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  public createPassword(
    request: auth_pb.CreatePasswordPayload,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  public createPassword(
    request: auth_pb.CreatePasswordPayload,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  public createPassword(
    request: auth_pb.CreatePasswordPayload,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  public verifyOneTimePassword(
    request: auth_pb.VerifyOneTimePasswordPayload,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  public verifyOneTimePassword(
    request: auth_pb.VerifyOneTimePasswordPayload,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  public verifyOneTimePassword(
    request: auth_pb.VerifyOneTimePasswordPayload,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  public forgotPassword(
    request: auth_pb.ForgotPayload,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  public forgotPassword(
    request: auth_pb.ForgotPayload,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  public forgotPassword(
    request: auth_pb.ForgotPayload,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  public resetPassword(
    request: auth_pb.ResetPayload,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  public resetPassword(
    request: auth_pb.ResetPayload,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  public resetPassword(
    request: auth_pb.ResetPayload,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  public updateInsurance(
    request: auth_pb.InsurancePayload,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  public updateInsurance(
    request: auth_pb.InsurancePayload,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
  public updateInsurance(
    request: auth_pb.InsurancePayload,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response
    ) => void
  ): grpc.ClientUnaryCall;
}
