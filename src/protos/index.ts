import * as protoLoader from '@grpc/proto-loader';
import { GrpcObject } from '@grpc/grpc-js';
import path from 'path';
import * as grpc from '@grpc/grpc-js';

const auth_definition = path.resolve(__dirname, '../protos/auth.proto');

const proto = protoLoader.loadSync(auth_definition, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

export const authProtoDefinition: GrpcObject | any =
  grpc.loadPackageDefinition(proto);
