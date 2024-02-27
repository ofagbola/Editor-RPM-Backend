// Original file: src/protos/schedule.proto

import type { Schedule as _scheduler_Schedule, Schedule__Output as _scheduler_Schedule__Output } from '../scheduler/Schedule';

export interface CreateSchedule {
  'title'?: (string);
  'description'?: (string);
  'schedule'?: (_scheduler_Schedule | null);
  'userSubscriptionId'?: (string);
  'access_token'?: (string);
}

export interface CreateSchedule__Output {
  'title': (string);
  'description': (string);
  'schedule': (_scheduler_Schedule__Output | null);
  'userSubscriptionId': (string);
  'access_token': (string);
}
