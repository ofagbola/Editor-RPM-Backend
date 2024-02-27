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
  // CreateQuestionnaire();
  // GetQestionnaires();
  // UpdateQuestionnaire();
  // GetQestionnaire();
  // DeleteQestionnaire();
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
      id: '79c3047e-fe91-4d55-bbe7-d224d15f2baa',
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
      question: 'Select couching scale between 1 and 10?',
      status: 'active',
      type: 'range',
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

function UpdateQuestionnaire() {
  client.UpdateQuestionnaire(
    {
      id: "2b260db0-033a-4169-bf6a-920e35163ad4",
      question: 'Select couching scale between 5 and 20?',
      status: 'active',
      type: 'range',
      answers: [
        "5", "10", "15", "20"
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
      id: '79c3047e-fe91-4d55-bbe7-d224d15f2baa',
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
