// Original file: src/protos/schedule.proto

import type { Schedule as _scheduler_Schedule, Schedule__Output as _scheduler_Schedule__Output } from '../scheduler/Schedule';

export interface UpdateSchedule {
  'id'?: (string);
  'title'?: (string);
  'description'?: (string);
  'schedule'?: (_scheduler_Schedule | null);
  'access_token'?: (string);
}

export interface UpdateSchedule__Output {
  'id': (string);
  'title': (string);
  'description': (string);
  'schedule': (_scheduler_Schedule__Output | null);
  'access_token': (string);
}
