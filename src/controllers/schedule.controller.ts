//  import bcrypt from 'bcryptjs';
import * as grpc from '@grpc/grpc-js';
import {
  createScheduleRequest,
  findUniqueScheduleRequest,
  findScheduleRequest,
  updateScheduleRequest,
  deleteScheduleRequest
} from '../services/schedule.services';
import { CreateSchedule__Output } from '../protos/gen/scheduler/CreateSchedule';
import { CreateReSchedule__Output } from '../protos/gen/scheduler/CreateReSchedule';
import { ScheduleResponse__Output } from '../protos/gen/scheduler/ScheduleResponse';
import { SchedulesResponse__Output } from '../protos/gen/scheduler/SchedulesResponse';
import { GetAllSchedules__Output } from '../protos/gen/scheduler/GetAllSchedules';
import { GetOneSchedule__Output } from '../protos/gen/scheduler/GetOneSchedule';
import { ScheduleMessage__Output } from '../protos/gen/scheduler/ScheduleMessage';
import { UpdateSchedule__Output } from '../protos/gen/scheduler/UpdateSchedule';
import { UpdateReSchedule__Output } from '../protos/gen/scheduler/UpdateReSchedule';
import { DeleteSchedule__Output } from '../protos/gen/scheduler/DeleteSchedule';
import { DeleteReSchedule__Output } from '../protos/gen/scheduler/DeleteReSchedule';
import { deserializeUser } from '../middlewares/deserializeUser';

export const CreateSchedule = async (
  req: grpc.ServerUnaryCall<CreateSchedule__Output, ScheduleMessage__Output>,
  res: grpc.sendUnaryData<ScheduleMessage__Output>
) => {
  try {
    const user = await deserializeUser(req.request.access_token);

    if (!user) {
      res({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Invalid access token or session expired',
      });
      return;
    }

    const schedule: any = req.request.schedule 

    await createScheduleRequest({
      title: req.request.title,
      description: req.request.description,
      schedule: schedule,
      userSubscriptionId: req.request.userSubscriptionId,
    });

    res(null, {code: grpc.status.OK, message: "Schedule added successfully"});
  } catch (err: any) {
    if (err.code === 'P2002') {
      res({
        code: grpc.status.ALREADY_EXISTS,
        message: 'Schedule already exists',
      });
    }

    res({ code: grpc.status.INTERNAL, message: err.message });
  }
};

export const CreateReSchedule = async (
  req: grpc.ServerUnaryCall<CreateReSchedule__Output, ScheduleMessage__Output>,
  res: grpc.sendUnaryData<ScheduleMessage__Output>
) => {
  try {
    const user = await deserializeUser(req.request.access_token);

    if (!user) {
      res({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Invalid access token or session expired',
      });
      return;
    }

    const reschedules = await findUniqueScheduleRequest({ id : req.request.id })

    if(!req.request.reason || !req.request.schedule) {
      res({
        code: grpc.status.INVALID_ARGUMENT,
        message: 'Missing or Invalid Argument Provided',
      });
      return;
    };

    const reschedule: any = [...reschedules.reschedule, { reason: req.request.reason, schedule: req.request.schedule }]

    await updateScheduleRequest({id : req.request.id}, {
      reschedule: reschedule,
    });

    res(null, {code: grpc.status.OK, message: "Re-Schedule added successfully"});
  } catch (err: any) {
    if (err.code === 'P2002') {
      res({
        code: grpc.status.ALREADY_EXISTS,
        message: 'Re-Schedule already exists',
      });
    }

    res({ code: grpc.status.INTERNAL, message: err.message });
  }
};

export const GetSchedules = async (
  req: grpc.ServerUnaryCall<GetAllSchedules__Output, SchedulesResponse__Output>,
  res: grpc.sendUnaryData<SchedulesResponse__Output>
) => {
  try {
    const user = await deserializeUser(req.request.access_token);
    
    if (!user) {
      res({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Invalid access token or session expired',
      });
      return;
    }

    const schedules = await findScheduleRequest({ ...req.request.request_query });
    const formattedSchedules: any = schedules.map(schedule => ({
      ...schedule,
      created_at: { 
        seconds: (schedule.created_at.getTime() / 1000).toString(), 
        nanos: schedule.created_at.getMilliseconds() * 1000000
      },
      updated_at: { 
        seconds: (schedule.updated_at.getTime() / 1000).toString(), 
        nanos: schedule.updated_at.getMilliseconds() * 1000000
      }
    }));
    
    res(null, {
      code: grpc.status.OK,
      data: formattedSchedules
    });
  } catch (err: any) {
    res({
      code: grpc.status.INTERNAL,
      message: err.message,
    });
  }
};

export const GetSchedule = async (
  req: grpc.ServerUnaryCall<GetOneSchedule__Output, ScheduleResponse__Output>,
  res: grpc.sendUnaryData<ScheduleResponse__Output>
) => {
  try {
    const user = await deserializeUser(req.request.access_token);
    
    if (!user) {
      res({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Invalid access token or session expired',
      });
      return;
    }

    const schedule: any = await findUniqueScheduleRequest({ id: req.request.id });

    res(null, {
      code: grpc.status.OK,
      data: {
        id: schedule.id,
        title: schedule.title,
        description: schedule.description,
        schedule: schedule.schedule,
        reschedule: schedule.reschedule,
        userSubscriptionId: schedule.userSubscriptionId,
        created_at: { 
          seconds: (schedule.created_at.getTime() / 1000).toString(),
          nanos: schedule.created_at.getMilliseconds() * 1000000 
        },
        updated_at: { 
          seconds: (schedule.updated_at.getTime() / 1000).toString(),
          nanos: schedule.updated_at.getMilliseconds() * 1000000  
        },
      },
    });
  } catch (err: any) {
    res({
      code: grpc.status.INTERNAL,
      message: err.message,
    });
  }
};

export const UpdateSchedule = async (
  req: grpc.ServerUnaryCall<UpdateSchedule__Output, ScheduleMessage__Output>,
  res: grpc.sendUnaryData<ScheduleMessage__Output>
) => {
  try {
    const user = await deserializeUser(req.request.access_token);

    if (!user) {
      res({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Invalid access token or session expired',
      });
      return;
    }

    const schedule: any = req.request.schedule 

    await updateScheduleRequest({id : req.request.id}, {
      title: req.request.title,
      description: req.request.description,
      schedule: schedule
    });

    res(null, {code: grpc.status.OK, message: "Schedule updated successfully"});
  } catch (err: any) {
    res({ code: grpc.status.INTERNAL, message: err.message });
  }
};

export const UpdateReSchedule = async (
  req: grpc.ServerUnaryCall<UpdateReSchedule__Output, ScheduleMessage__Output>,
  res: grpc.sendUnaryData<ScheduleMessage__Output>
) => {
  try {
    const user = await deserializeUser(req.request.access_token);

    if (!user) {
      res({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Invalid access token or session expired',
      });
      return;
    }

    const reschedules = await findUniqueScheduleRequest({ id : req.request.id });

    const arrays: any = reschedules.reschedule

    const reschedule: any = [];

    for(let index = 0; index < arrays.length; index++) {
      if(arrays[index] && arrays[index].schedule) {
        if(index === req.request.index) {
          arrays[index].reason = req.request.reason
          arrays[index].schedule = req.request.schedule
        }

        reschedule.push(arrays[index]);
      }
    }

    await updateScheduleRequest({id : req.request.id}, {
      reschedule: reschedule,
    });

    res(null, {code: grpc.status.OK, message: "Re-Schedule updated successfully"});
  } catch (err: any) {
    res({ code: grpc.status.INTERNAL, message: err.message });
  }
};

export const DeleteSchedule = async (
  req: grpc.ServerUnaryCall<DeleteSchedule__Output, ScheduleMessage__Output>,
  res: grpc.sendUnaryData<ScheduleMessage__Output>
) => {
  try {
    const user = await deserializeUser(req.request.access_token);
    
    if (!user) {
      res({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Invalid access token or session expired',
      });
      return;
    }

    await deleteScheduleRequest({ id: req.request.id });

    res(null, {
      code: grpc.status.OK,
      message: "Schedule deleted successfully"
    });
  } catch (err: any) {
    res({
      code: grpc.status.INTERNAL,
      message: err.message,
    });
  }
};

export const DeleteReSchedule = async (
  req: grpc.ServerUnaryCall<DeleteReSchedule__Output, ScheduleMessage__Output>,
  res: grpc.sendUnaryData<ScheduleMessage__Output>
) => {
  try {
    const user = await deserializeUser(req.request.access_token);
    
    if (!user) {
      res({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Invalid access token or session expired',
      });
      return;
    }

    const reschedules = await findUniqueScheduleRequest({ id : req.request.id });

    const arrays: any = reschedules.reschedule

    const reschedule: any = [];

    for(let index = 0; index < arrays.length; index++) {
      if(arrays[index] && arrays[index].schedule) {
        if(String(index) !== req.request.index) {
          reschedule.push(arrays[index]);
        }
      }
    }

    await updateScheduleRequest({id : req.request.id}, {
      reschedule: reschedule,
    });

    res(null, {
      code: grpc.status.OK,
      message: "Re-Schedule deleted successfully"
    });
  } catch (err: any) {
    res({
      code: grpc.status.INTERNAL,
      message: err.message,
    });
  }
};