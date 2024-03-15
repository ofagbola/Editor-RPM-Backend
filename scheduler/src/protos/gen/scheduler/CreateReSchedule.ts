// Original file: src/protos/schedule.proto

import type { Schedule as _scheduler_Schedule, Schedule__Output as _scheduler_Schedule__Output } from '../scheduler/Schedule';

export interface CreateReSchedule {
  'id'?: (string);
  'reason'?: (string);
  'schedule'?: (_scheduler_Schedule | null);
  'access_token'?: (string);
}

export interface CreateReSchedule__Output {
  'id': (string);
  'reason': (string);
  'schedule': (_scheduler_Schedule__Output | null);
  'access_token': (string);
}
