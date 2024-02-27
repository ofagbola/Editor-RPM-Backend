// Original file: src/protos/schedule.proto

import type { UserType as _scheduler_UserType, UserType__Output as _scheduler_UserType__Output } from '../scheduler/UserType';

export interface User {
  'id'?: (string);
  'type'?: (_scheduler_UserType);
}

export interface User__Output {
  'id': (string);
  'type': (_scheduler_UserType__Output);
}
