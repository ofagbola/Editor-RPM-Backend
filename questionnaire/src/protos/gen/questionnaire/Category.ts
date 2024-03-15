// Original file: src/protos/category.proto

import type { catUsers as _questionnaire_catUsers, catUsers__Output as _questionnaire_catUsers__Output } from '../questionnaire/catUsers';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface Category {
  'id'?: (string);
  'name'?: (string);
  'users'?: (_questionnaire_catUsers)[];
  'status'?: (string);
  'created_at'?: (_google_protobuf_Timestamp | null);
  'updated_at'?: (_google_protobuf_Timestamp | null);
}

export interface Category__Output {
  'id': (string);
  'name': (string);
  'users': (_questionnaire_catUsers__Output)[];
  'status': (string);
  'created_at': (_google_protobuf_Timestamp__Output | null);
  'updated_at': (_google_protobuf_Timestamp__Output | null);
}
