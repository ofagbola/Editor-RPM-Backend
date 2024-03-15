// Original file: src/protos/question.proto

import type { Question as _questionnaire_Question, Question__Output as _questionnaire_Question__Output } from '../questionnaire/Question';

export interface QuestionsResponse {
  'code'?: (number);
  'data'?: (_questionnaire_Question)[];
}

export interface QuestionsResponse__Output {
  'code': (number);
  'data': (_questionnaire_Question__Output)[];
}
