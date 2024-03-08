import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './protos/gen/services';
import { QuestionnaireRoutes } from './routes/questionnaire.routes';
import { AnswerRoutes } from './routes/answer.routes';
import { QuestionRoutes } from './routes/question.routes';
import { CategoryRoutes } from './routes/category.routes';
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

server.addService(questionnairePackage.QuestionService.service, QuestionRoutes);
server.addService(questionnairePackage.AnswerService.service, AnswerRoutes);
server.addService(questionnairePackage.QuestionnaireService.service, QuestionnaireRoutes);
server.addService(questionnairePackage.CategoryService.service, CategoryRoutes);

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
