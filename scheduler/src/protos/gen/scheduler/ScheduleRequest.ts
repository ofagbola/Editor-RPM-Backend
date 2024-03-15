// Original file: src/protos/schedule.proto

import type { Schedule as _scheduler_Schedule, Schedule__Output as _scheduler_Schedule__Output } from '../scheduler/Schedule';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface _scheduler_ScheduleRequest_Reschedule {
  'reason'?: (string);
  'schedule'?: (_scheduler_Schedule | null);
}

export interface _scheduler_ScheduleRequest_Reschedule__Output {
  'reason': (string);
  'schedule': (_scheduler_Schedule__Output | null);
}

export interface ScheduleRequest {
  'id'?: (string);
  'title'?: (string);
  'description'?: (string);
  'schedule'?: (_scheduler_Schedule | null);
  'reschedule'?: (_scheduler_ScheduleRequest_Reschedule)[];
  'userSubscriptionId'?: (string);
  'created_at'?: (_google_protobuf_Timestamp | null);
  'updated_at'?: (_google_protobuf_Timestamp | null);
}

export interface ScheduleRequest__Output {
  'id': (string);
  'title': (string);
  'description': (string);
  'schedule': (_scheduler_Schedule__Output | null);
  'reschedule': (_scheduler_ScheduleRequest_Reschedule__Output)[];
  'userSubscriptionId': (string);
  'created_at': (_google_protobuf_Timestamp__Output | null);
  'updated_at': (_google_protobuf_Timestamp__Output | null);
}
