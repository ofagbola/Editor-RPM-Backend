// Original file: src/protos/question.proto

import type { User as _questionnaire_User, User__Output as _questionnaire_User__Output } from '../questionnaire/User';
import type { questionType as _questionnaire_questionType, questionType__Output as _questionnaire_questionType__Output } from '../questionnaire/questionType';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface Question {
  'id'?: (string);
  'question'?: (string);
  'answers'?: (string)[];
  'users'?: (_questionnaire_User)[];
  'type'?: (_questionnaire_questionType);
  'category'?: (string);
  'status'?: (string);
  'created_at'?: (_google_protobuf_Timestamp | null);
  'updated_at'?: (_google_protobuf_Timestamp | null);
}

export interface Question__Output {
  'id': (string);
  'question': (string);
  'answers': (string)[];
  'users': (_questionnaire_User__Output)[];
  'type': (_questionnaire_questionType__Output);
  'category': (string);
  'status': (string);
  'created_at': (_google_protobuf_Timestamp__Output | null);
  'updated_at': (_google_protobuf_Timestamp__Output | null);
}
