import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../protos/gen/services';
import customConfig from '../config/default';
import { 
  GetQuestionnaireConstants,
  GetQuestionnaireConstant,
  CreateQuestionnaireConstant,
  UpdateQuestionnaireConstant,
  DeleteQuestionnaireConstant 
} from '../constants/questionnaire.constant';

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

const client = new proto.questionnaire.QuestionnaireService(
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
  // CreateQuestionnaire();
  GetQuestionnaires();
  // UpdateQuestionnaire();
  // GetQuestionnaire();
  // DeleteQuestionnaire();
}

function GetQuestionnaires() {
  const data = GetQuestionnaireConstants();

  client.getQuestionnaires(data, (err: any, res: any) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}

function GetQuestionnaire() {
  const data = GetQuestionnaireConstant();

  client.getQuestionnaire(data, (err: any, res: any) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(res);
    }
  );
}

function CreateQuestionnaire() {
  const data = CreateQuestionnaireConstant();

  client.createQuestionnaire(data, (err: any, res: any) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}

function UpdateQuestionnaire() {
  const data = UpdateQuestionnaireConstant();

  client.updateQuestionnaire(data, (err: any, res: any) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}

function DeleteQuestionnaire() {
  const data = DeleteQuestionnaireConstant();

  client.deleteQuestionnaire(data, (err: any, res: any) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}
