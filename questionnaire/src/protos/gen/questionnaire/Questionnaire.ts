// Original file: src/protos/questionnaire.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface Questionnaire {
  'id'?: (string);
  'questions'?: (string)[];
  'users'?: (string)[];
  'category'?: (string);
  'status'?: (string);
  'created_at'?: (_google_protobuf_Timestamp | null);
  'updated_at'?: (_google_protobuf_Timestamp | null);
}

export interface Questionnaire__Output {
  'id': (string);
  'questions': (string)[];
  'users': (string)[];
  'category': (string);
  'status': (string);
  'created_at': (_google_protobuf_Timestamp__Output | null);
  'updated_at': (_google_protobuf_Timestamp__Output | null);
}
