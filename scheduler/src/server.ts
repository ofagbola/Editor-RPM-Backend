import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './protos/gen/services';
import { ReviewRoutes } from './routes/review.routes';
import { ScheduleRoutes } from './routes/scheduler.routes';
import { SubscriptionRoutes } from './routes/subscription.routes';
import { UserSubscriptionRoutes } from './routes/user.subscription.routes';
import customConfig from './config/default';
import connectDB from './utils/prisma';
const options: protoLoader.Options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const PORT = customConfig.port;
const URL = customConfig.url;
const PROTO_FILE = './protos/services.proto';
const packageDef = protoLoader.loadSync(
  path.resolve(__dirname, PROTO_FILE),
  options
);

const proto = grpc.loadPackageDefinition(
  packageDef
) as unknown as ProtoGrpcType;

const questionnairePackage = proto.scheduler;

const server = new grpc.Server();

server.addService(questionnairePackage.ReviewService.service, ReviewRoutes);
server.addService(questionnairePackage.ScheduleService.service, ScheduleRoutes);
server.addService(questionnairePackage.SubscriptionService.service, SubscriptionRoutes);
server.addService(questionnairePackage.UserSubscriptionService.service, UserSubscriptionRoutes);

server.bindAsync(
  `${URL}:${PORT}`,
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.error(err);
      return;
    }

    connectDB();
    console.log(`? Server listening on ${port}`);
  }
);
