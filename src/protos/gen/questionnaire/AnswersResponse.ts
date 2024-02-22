// Original file: src/protos/answer.proto

import type { Answer as _questionnaire_Answer, Answer__Output as _questionnaire_Answer__Output } from '../questionnaire/Answer';

export interface AnswersResponse {
  'code'?: (number);
  'data'?: (_questionnaire_Answer)[];
}

export interface AnswersResponse__Output {
  'code': (number);
  'data': (_questionnaire_Answer__Output)[];
}
