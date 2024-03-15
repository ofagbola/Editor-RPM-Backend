// Original file: src/protos/review.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface ReviewRequest {
  'id'?: (string);
  'sessionId'?: (string);
  'doctorId'?: (string);
  'userId'?: (string);
  'rating'?: (number | string);
  'review'?: (string);
  'created_at'?: (_google_protobuf_Timestamp | null);
  'updated_at'?: (_google_protobuf_Timestamp | null);
}

export interface ReviewRequest__Output {
  'id': (string);
  'sessionId': (string);
  'doctorId': (string);
  'userId': (string);
  'rating': (number);
  'review': (string);
  'created_at': (_google_protobuf_Timestamp__Output | null);
  'updated_at': (_google_protobuf_Timestamp__Output | null);
}
