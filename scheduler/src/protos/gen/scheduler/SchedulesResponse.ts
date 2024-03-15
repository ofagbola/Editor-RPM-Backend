// Original file: src/protos/schedule.proto

import type { ScheduleRequest as _scheduler_ScheduleRequest, ScheduleRequest__Output as _scheduler_ScheduleRequest__Output } from '../scheduler/ScheduleRequest';

export interface SchedulesResponse {
  'code'?: (number);
  'data'?: (_scheduler_ScheduleRequest)[];
}

export interface SchedulesResponse__Output {
  'code': (number);
  'data': (_scheduler_ScheduleRequest__Output)[];
}
