// Original file: src/protos/schedule.proto

import type { User as _scheduler_User, User__Output as _scheduler_User__Output } from '../scheduler/User';
import type { ScheduleStatus as _scheduler_ScheduleStatus, ScheduleStatus__Output as _scheduler_ScheduleStatus__Output } from '../scheduler/ScheduleStatus';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface Schedule {
  'initiator'?: (_scheduler_User | null);
  'recepient'?: (_scheduler_User | null);
  'duration'?: (string);
  'sessions'?: (number);
  'package'?: (string)[];
  'status'?: (_scheduler_ScheduleStatus);
  'date'?: (_google_protobuf_Timestamp | null);
  'time'?: (_google_protobuf_Timestamp | null);
}

export interface Schedule__Output {
  'initiator': (_scheduler_User__Output | null);
  'recepient': (_scheduler_User__Output | null);
  'duration': (string);
  'sessions': (number);
  'package': (string)[];
  'status': (_scheduler_ScheduleStatus__Output);
  'date': (_google_protobuf_Timestamp__Output | null);
  'time': (_google_protobuf_Timestamp__Output | null);
}
