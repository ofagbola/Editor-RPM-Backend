// Original file: src/protos/schedule.proto

import type { Schedule as _scheduler_Schedule, Schedule__Output as _scheduler_Schedule__Output } from '../scheduler/Schedule';

export interface UpdateReSchedule {
  'index'?: (number);
  'reason'?: (string);
  'schedule'?: (_scheduler_Schedule | null);
  'id'?: (string);
  'access_token'?: (string);
}

export interface UpdateReSchedule__Output {
  'index': (number);
  'reason': (string);
  'schedule': (_scheduler_Schedule__Output | null);
  'id': (string);
  'access_token': (string);
}
