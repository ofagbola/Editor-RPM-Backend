// Original file: src/protos/questionnaire.proto

import type { QuestionResponse as _questionnaire_QuestionResponse, QuestionResponse__Output as _questionnaire_QuestionResponse__Output } from '../questionnaire/QuestionResponse';

export interface DataResponse {
  'code'?: (number);
  'data'?: (_questionnaire_QuestionResponse)[];
}

export interface DataResponse__Output {
  'code': (number);
  'data': (_questionnaire_QuestionResponse__Output)[];
}
