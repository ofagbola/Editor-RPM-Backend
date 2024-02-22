// Original file: src/protos/questionnaire.proto

import type { Question as _questionnaire_Question, Question__Output as _questionnaire_Question__Output } from '../questionnaire/Question';

export interface QuestionResponse {
  'code'?: (number);
  'data'?: (_questionnaire_Question | null);
}

export interface QuestionResponse__Output {
  'code': (number);
  'data': (_questionnaire_Question__Output | null);
}
