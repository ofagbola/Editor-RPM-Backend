import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../protos/gen/services';
import customConfig from '../config/default';
import { 
  GetSubscriptionConstants,
  GetSubscriptionConstant,
  CreateSubscriptionConstant,
  UpdateSubscriptionConstant,
  DeleteSubscriptionConstant
} from '../constants/subscription.constant';

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

const client = new proto.scheduler.SubscriptionService(
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
  // CreateSubscription();
  GetSubscriptions();
  // UpdateSubscription();
  // GetSubscription();
  // DeleteSubscription();
}

function GetSubscriptions() {
  const data = GetSubscriptionConstants();

  client.getSubscriptions(
    { ...data }, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      
      console.log(res);
    }
  );
}

function GetSubscription() {
  const data = GetSubscriptionConstant();

  client.getSubscription(
    { ...data }, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(res);
    }
  );
}

function CreateSubscription() {
  const data: any = CreateSubscriptionConstant();

  client.createSubscription(
    { ...data }, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(res);
    }
  );
}

function UpdateSubscription() {
  const data: any = UpdateSubscriptionConstant();

  client.updateSubscription(
    { ...data }, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(res);
    }
  );
}
function DeleteSubscription() {
  const data = DeleteSubscriptionConstant();

  client.deleteSubscription(
    { ...data }, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(res);
    }
  );
}
