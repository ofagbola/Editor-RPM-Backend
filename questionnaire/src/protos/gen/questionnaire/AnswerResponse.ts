// Original file: src/protos/answer.proto

import type { Answer as _questionnaire_Answer, Answer__Output as _questionnaire_Answer__Output } from '../questionnaire/Answer';

export interface AnswerResponse {
  'code'?: (number);
  'data'?: (_questionnaire_Answer | null);
}

export interface AnswerResponse__Output {
  'code': (number);
  'data': (_questionnaire_Answer__Output | null);
}
