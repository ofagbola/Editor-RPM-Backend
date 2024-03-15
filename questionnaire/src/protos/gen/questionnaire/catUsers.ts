// Original file: src/protos/category.proto

import type { actions as _questionnaire_actions, actions__Output as _questionnaire_actions__Output } from '../questionnaire/actions';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface catUsers {
  'id'?: (string);
  'action'?: (_questionnaire_actions);
  'date'?: (_google_protobuf_Timestamp | null);
}

export interface catUsers__Output {
  'id': (string);
  'action': (_questionnaire_actions__Output);
  'date': (_google_protobuf_Timestamp__Output | null);
}
