import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../protos/gen/services';
import customConfig from '../config/default';

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
  GetQestionnaires()
}

function GetQestionnaires() {
  client.GetQuestionnaires(
    { request_query: { status: "active" }, access_token: "efhiwfwuihiuwfhwwfbwifwwh" },
    (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}

function GetQestionnaire() {
  client.GetQuestionnaire(
    {
      id: '2',
      access_token: 'hgfsfedjgddgkhdjwdw',
    },
    (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}

function CreateQuestionnaire() {
  client.CreateQuestionnaire(
    {
      question: 'What are your symtomps?',
      status: 'active',
      type: 'options',
      answers: [
        "coughing",
        "vomitting",
        "headache",
        "stulling"
      ],
      access_token: 'hssjhfsiuhfwibiuiwffwfwf',
    },
    (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}

function UpdateQuestionnaire() {
  client.UpdateQuestionnaire(
    {
      question: 'Select couching scale between 1 and 10?',
      status: 'active',
      type: 'options',
      answers: [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"
      ],
      access_token: 'hssjhfsiuhfwibiuiwffwfwf',
    },
    (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}
function DeleteQestionnaire() {
  client.DeleteQuestionnaire(
    {
      id: '2',
      access_token: 'hgfsfedjgddgkhdjwdw',
    },
    (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}
