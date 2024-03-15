import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../protos/gen/services';
import customConfig from '../config/default';
import { 
  GetAnswerConstants,
  GetAnswerConstant,
  CreateAnswerConstant,
  UpdateAnswerConstant,
  DeleteAnswerConstant 
} from '../constants/answer.constant';

const options: protoLoader.Options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};
const PORT = customConfig.port;
const URL = customConfig.url;
const PROTO_FILE = '../protos/services.proto';
const packageDef = protoLoader.loadSync(
  path.resolve(__dirname, PROTO_FILE),
  options
);

const proto = grpc.loadPackageDefinition(
  packageDef
) as unknown as ProtoGrpcType;

const client = new proto.questionnaire.AnswerService(
  `${URL}:${PORT}`,
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
  // CreateAnswer();
  GetAnswers();
  // GetAnswer();
  // UpdateAnswer();
  // DeleteAnswer();
}

function GetAnswers() {
  const data = GetAnswerConstants();

  client.getAnswers(data, (err: any, res: any) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}

function GetAnswer() {
  const data = GetAnswerConstant();

  client.getAnswer(data, (err: any, res: any) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}

function CreateAnswer() {
  const data = CreateAnswerConstant();

  client.createAnswer(data, (err: any, res: any) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}

function UpdateAnswer() {
  const data = UpdateAnswerConstant();

  client.updateAnswer(data, (err: any, res: any) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}

function DeleteAnswer() {
  const data = DeleteAnswerConstant();

  client.deleteAnswer(data, (err: any, res: any) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}
