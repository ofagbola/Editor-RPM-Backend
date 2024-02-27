import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './protos/gen/services';
import { QuestionRoutes } from './routes/scheduler.routes';
import { AnswerRoutes } from './routes/subscription.routes';
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
const PROTO_FILE = './protos/services.proto';
const packageDef = protoLoader.loadSync(
  path.resolve(__dirname, PROTO_FILE),
  options
);

const proto = grpc.loadPackageDefinition(
  packageDef
) as unknown as ProtoGrpcType;

const questionnairePackage = proto.questionnaire;

const server = new grpc.Server();

server.addService(questionnairePackage.QuestionnaireService.service, QuestionRoutes);
server.addService(questionnairePackage.AnswerService.service, AnswerRoutes);

server.bindAsync(
  `0.0.0.0:${PORT}`,
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
