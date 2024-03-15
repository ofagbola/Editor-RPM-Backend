import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../protos/gen/services';
import customConfig from '../config/default';
import { 
  GetUserSubscriptionConstants,
  GetUserSubscriptionConstant,
  CreateUserSubscriptionConstant,
  UpdateUserSubscriptionConstant,
  DeleteUserSubscriptionConstant
} from '../constants/user.subscription.constant';

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

const client = new proto.scheduler.UserSubscriptionService(
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
  // CreateUserSubscription();
  GetUserSubscriptions();
  // UpdateUserSubscription();
  // GetUserSubscription();
  // DeleteUserSubscription();
}

function GetUserSubscriptions() {
  const data = GetUserSubscriptionConstants();

  client.getUserSubscriptions(
    { ...data }, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(res);
    }
  );
}

function GetUserSubscription() {
  const data = GetUserSubscriptionConstant();

  client.getUserSubscription(
    { ...data }, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(res);
    }
  );
}

function CreateUserSubscription() {
  const data: any = CreateUserSubscriptionConstant();

  client.createUserSubscription(
    { ...data }, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(res);
    }
  );
}

function UpdateUserSubscription() {
  const data: any = UpdateUserSubscriptionConstant();

  client.updateUserSubscription(
    { ...data }, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(res);
    }
  );
}

function DeleteUserSubscription() {
  const data = DeleteUserSubscriptionConstant();

  client.deleteUserSubscription(
    { ...data }, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(res);
    }
  );
}
