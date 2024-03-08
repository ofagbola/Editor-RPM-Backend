import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../protos/gen/services';
import customConfig from '../config/default';
import { 
  GetScheduleConstant,
  GetScheduleConstants,
  CreateScheduleConstant,
  CreateReScheduleConstant,
  UpdateScheduleConstant,
  UpdateReScheduleConstant,
  DeleteScheduleConstant,
  DeleteReScheduleConstant 
} from '../constants/schedule.constant';

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

const client = new proto.scheduler.ScheduleService(
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
  GetSchedules();
  // GetSchedule();
  // CreateSchedule();
  // CreateReSchedule();
  // UpdateSchedule();
  // UpdateReSchedule();
  // DeleteSchedule();
  // DeleteReSchedule();
}

function GetSchedules() {
  const data = GetScheduleConstants();

  client.getSchedules(
    { ...data }, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(res);
    }
  );
}

function GetSchedule() {
  const data = GetScheduleConstant();

  client.getSchedule(
    { ...data }, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(res);

      const reschedules: any = res?.data?.reschedule;

      for(let i = 0; i < reschedules.length; i++) {
        console.log({ reschedules: { reason: reschedules[i].reason, schedule: reschedules[i].schedule } });
      }
    }
  );
}

function CreateSchedule() {
  const data: any = CreateScheduleConstant();

  client.createSchedule(
    { ...data }, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}

function CreateReSchedule() {
  const data: any = CreateReScheduleConstant();

  client.createReSchedule(
    { ...data }, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}

function UpdateSchedule() {
  const data: any = UpdateScheduleConstant();

  client.updateSchedule(
    { ...data }, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(res);
    }
  );
}

function UpdateReSchedule() {
  const data: any = UpdateReScheduleConstant();

  client.updateReSchedule(
    { ...data }, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(res);
    }
  );
}

function DeleteSchedule() {
  const data = DeleteScheduleConstant();

  client.deleteSchedule(
    { ...data }, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}

function DeleteReSchedule() {
  const data = DeleteReScheduleConstant();

  client.deleteReSchedule(
    { ...data }, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}
