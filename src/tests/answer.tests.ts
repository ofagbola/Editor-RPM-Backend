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

const client = new proto.questionnaire.AnswerService(
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
  // CreateAnswer();
  GetQestionnaires();
}

function GetQestionnaires() {
  client.GetAnswers(
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
  client.GetAnswer(
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

function CreateAnswer() {
  client.CreateAnswer(
    {
      question: '2b260db0-033a-4169-bf6a-920e35163ad4',
      status: 'active',
      answer: 3,
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

function UpdateAnswer() {
  client.UpdateAnswer(
    {
      status: 'active',
      answer: 3,
      id: "2",
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
  client.DeleteAnswer(
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
