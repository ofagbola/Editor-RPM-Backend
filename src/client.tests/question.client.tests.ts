import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../protos/gen/services';
import customConfig from '../config/default';
import { 
  GetQuestionConstants,
  GetQuestionConstant,
  CreateQuestionConstant,
  UpdateQuestionConstant,
  DeleteQuestionConstant 
} from '../constants/question.constant';

const options: protoLoader.Options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};
const PORT = customConfig.port;
const PROTO_FILE = '../protos/services.proto';
const packageDef = protoLoader.loadSync(
  path.resolve(__dirname, PROTO_FILE),
  options
);

const proto = grpc.loadPackageDefinition(
  packageDef
) as unknown as ProtoGrpcType;

const client = new proto.questionnaire.QuestionService(
  `0.0.0.0:${PORT}`,
  grpc.credentials.createInsecure()
);

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);
client.waitForReady(deadline, (err: any) => {
  if (err) {
    console.error(err);
    return;
  }
  
  onClientReady();
});

function onClientReady() {
  // CreateQuestion();
  GetQuestions();
  // UpdateQuestion();
  // GetQuestion();
  // DeleteQuestion();
}

function GetQuestions() {
  const data = GetQuestionConstants();
  
  client.GetQuestions(data, (err: any, res: any) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}

function GetQuestion() {
  const data = GetQuestionConstant();

  client.GetQuestion(data, (err: any, res: any) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}

function CreateQuestion() {
  const data = CreateQuestionConstant();

  client.CreateQuestion(data, (err: any, res: any) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}

function UpdateQuestion() {
  const data = UpdateQuestionConstant();

  client.UpdateQuestion(data, (err: any, res: any) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}

function DeleteQuestion() {
  const data = DeleteQuestionConstant();

  client.DeleteQuestion(data, (err: any, res: any) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}
