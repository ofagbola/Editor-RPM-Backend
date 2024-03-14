import * as protoLoader from '@grpc/proto-loader';
import { GrpcObject } from '@grpc/grpc-js';
import path from 'path';
import * as grpc from '@grpc/grpc-js';

const auth_definition = path.resolve(__dirname, '../protos/auth.proto');
const notification_definition = path.resolve(
  __dirname,
  '../protos/notification.proto'
);

const loadProtoFile = (file: string) => {
  return protoLoader.loadSync(file, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  });
};

export const authProtoDefinition: GrpcObject | any = grpc.loadPackageDefinition(
  loadProtoFile(auth_definition)
);

export const notificationProtoDefinition: GrpcObject | any =
  grpc.loadPackageDefinition(loadProtoFile(notification_definition));