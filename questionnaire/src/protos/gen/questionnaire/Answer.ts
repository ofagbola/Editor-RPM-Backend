// Original file: src/protos/answer.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface Answer {
  'id'?: (string);
  'questionnaire'?: (string);
  'answer'?: (string)[];
  'question'?: (string);
  'user'?: (string);
  'status'?: (string);
  'created_at'?: (_google_protobuf_Timestamp | null);
  'updated_at'?: (_google_protobuf_Timestamp | null);
}

export interface Answer__Output {
  'id': (string);
  'questionnaire': (string);
  'answer': (string)[];
  'question': (string);
  'user': (string);
  'status': (string);
  'created_at': (_google_protobuf_Timestamp__Output | null);
  'updated_at': (_google_protobuf_Timestamp__Output | null);
}
