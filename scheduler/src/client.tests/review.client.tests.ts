import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../protos/gen/services';
import customConfig from '../config/default';
import { 
  GetDoctorReviewConstants,
  GetSessionReviewConstants,
  CreateReviewConstant,
  UpdateReviewConstant,
  DeleteReviewConstant 
} from '../constants/review.constant';

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

const client = new proto.scheduler.ReviewService(
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
  // GetDoctorReviews();
  GetSessionReviews();
  // CreateReview();
  // UpdateReview();
  // DeleteReview();
}

function GetDoctorReviews() {
  const data = GetDoctorReviewConstants();

  client.GetDoctorReviews(
    { ...data }, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}

function GetSessionReviews() {
  const data = GetSessionReviewConstants();

  client.GetSessionReviews(
    { ...data }, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}

function CreateReview() {
  const data = CreateReviewConstant();

  client.createReview(
    { ...data }, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}

function UpdateReview() {
  const data = UpdateReviewConstant();

  client.UpdateReview(
    { ...data }, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(res);
    }
  );
}
function DeleteReview() {
  const data = DeleteReviewConstant();

  client.DeleteReview(
    { ...data }, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}
