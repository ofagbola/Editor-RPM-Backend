import { credentials } from "@grpc/grpc-js";
import { AuthServicesClient } from "../../src/protos/auth_grpc_pb";

export const AuthServiceClient = new AuthServicesClient(
  `0.0.0.0:4000`,
  credentials.createInsecure()
);
