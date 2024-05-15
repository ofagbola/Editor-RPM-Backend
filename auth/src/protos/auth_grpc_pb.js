// GENERATED CODE -- DO NOT EDIT!

"use strict";
var grpc = require("@grpc/grpc-js");
var auth_pb = require("./auth_pb.js");

function serialize_ClinicianSignupPayload(arg) {
  if (!(arg instanceof auth_pb.ClinicianSignupPayload)) {
    throw new Error("Expected argument of type ClinicianSignupPayload");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ClinicianSignupPayload(buffer_arg) {
  return auth_pb.ClinicianSignupPayload.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_CreatePasswordPayload(arg) {
  if (!(arg instanceof auth_pb.CreatePasswordPayload)) {
    throw new Error("Expected argument of type CreatePasswordPayload");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreatePasswordPayload(buffer_arg) {
  return auth_pb.CreatePasswordPayload.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_ForgotPayload(arg) {
  if (!(arg instanceof auth_pb.ForgotPayload)) {
    throw new Error("Expected argument of type ForgotPayload");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ForgotPayload(buffer_arg) {
  return auth_pb.ForgotPayload.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_InsurancePayload(arg) {
  if (!(arg instanceof auth_pb.InsurancePayload)) {
    throw new Error("Expected argument of type InsurancePayload");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_InsurancePayload(buffer_arg) {
  return auth_pb.InsurancePayload.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_LoginPayload(arg) {
  if (!(arg instanceof auth_pb.LoginPayload)) {
    throw new Error("Expected argument of type LoginPayload");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_LoginPayload(buffer_arg) {
  return auth_pb.LoginPayload.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PatientSignupPayload(arg) {
  if (!(arg instanceof auth_pb.PatientSignupPayload)) {
    throw new Error("Expected argument of type PatientSignupPayload");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PatientSignupPayload(buffer_arg) {
  return auth_pb.PatientSignupPayload.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_ResetPayload(arg) {
  if (!(arg instanceof auth_pb.ResetPayload)) {
    throw new Error("Expected argument of type ResetPayload");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ResetPayload(buffer_arg) {
  return auth_pb.ResetPayload.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Response(arg) {
  if (!(arg instanceof auth_pb.Response)) {
    throw new Error("Expected argument of type Response");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Response(buffer_arg) {
  return auth_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_VerifyAccountPayload(arg) {
  if (!(arg instanceof auth_pb.VerifyAccountPayload)) {
    throw new Error("Expected argument of type VerifyAccountPayload");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_VerifyAccountPayload(buffer_arg) {
  return auth_pb.VerifyAccountPayload.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_VerifyOneTimePasswordPayload(arg) {
  if (!(arg instanceof auth_pb.VerifyOneTimePasswordPayload)) {
    throw new Error("Expected argument of type VerifyOneTimePasswordPayload");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_VerifyOneTimePasswordPayload(buffer_arg) {
  return auth_pb.VerifyOneTimePasswordPayload.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

var AuthServicesService = (exports.AuthServicesService = {
  patientSignup: {
    path: "/AuthServices/PatientSignup",
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.PatientSignupPayload,
    responseType: auth_pb.Response,
    requestSerialize: serialize_PatientSignupPayload,
    requestDeserialize: deserialize_PatientSignupPayload,
    responseSerialize: serialize_Response,
    responseDeserialize: deserialize_Response,
  },
  clinicianSignup: {
    path: "/AuthServices/ClinicianSignup",
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.ClinicianSignupPayload,
    responseType: auth_pb.Response,
    requestSerialize: serialize_ClinicianSignupPayload,
    requestDeserialize: deserialize_ClinicianSignupPayload,
    responseSerialize: serialize_Response,
    responseDeserialize: deserialize_Response,
  },
  login: {
    path: "/AuthServices/Login",
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.LoginPayload,
    responseType: auth_pb.Response,
    requestSerialize: serialize_LoginPayload,
    requestDeserialize: deserialize_LoginPayload,
    responseSerialize: serialize_Response,
    responseDeserialize: deserialize_Response,
  },
  verifyAccount: {
    path: "/AuthServices/VerifyAccount",
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.VerifyAccountPayload,
    responseType: auth_pb.Response,
    requestSerialize: serialize_VerifyAccountPayload,
    requestDeserialize: deserialize_VerifyAccountPayload,
    responseSerialize: serialize_Response,
    responseDeserialize: deserialize_Response,
  },
  createPassword: {
    path: "/AuthServices/CreatePassword",
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.CreatePasswordPayload,
    responseType: auth_pb.Response,
    requestSerialize: serialize_CreatePasswordPayload,
    requestDeserialize: deserialize_CreatePasswordPayload,
    responseSerialize: serialize_Response,
    responseDeserialize: deserialize_Response,
  },
  verifyOneTimePassword: {
    path: "/AuthServices/VerifyOneTimePassword",
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.VerifyOneTimePasswordPayload,
    responseType: auth_pb.Response,
    requestSerialize: serialize_VerifyOneTimePasswordPayload,
    requestDeserialize: deserialize_VerifyOneTimePasswordPayload,
    responseSerialize: serialize_Response,
    responseDeserialize: deserialize_Response,
  },
  forgotPassword: {
    path: "/AuthServices/ForgotPassword",
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.ForgotPayload,
    responseType: auth_pb.Response,
    requestSerialize: serialize_ForgotPayload,
    requestDeserialize: deserialize_ForgotPayload,
    responseSerialize: serialize_Response,
    responseDeserialize: deserialize_Response,
  },
  resetPassword: {
    path: "/AuthServices/ResetPassword",
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.ResetPayload,
    responseType: auth_pb.Response,
    requestSerialize: serialize_ResetPayload,
    requestDeserialize: deserialize_ResetPayload,
    responseSerialize: serialize_Response,
    responseDeserialize: deserialize_Response,
  },
  updateInsurance: {
    path: "/AuthServices/UpdateInsurance",
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.InsurancePayload,
    responseType: auth_pb.Response,
    requestSerialize: serialize_InsurancePayload,
    requestDeserialize: deserialize_InsurancePayload,
    responseSerialize: serialize_Response,
    responseDeserialize: deserialize_Response,
  },
});

exports.AuthServicesClient =
  grpc.makeGenericClientConstructor(AuthServicesService);
