// Original file: src/protos/questionnaire.proto

import type { Questionnaire as _questionnaire_Questionnaire, Questionnaire__Output as _questionnaire_Questionnaire__Output } from '../questionnaire/Questionnaire';

export interface QuestionnaireResponse {
  'code'?: (number);
  'data'?: (_questionnaire_Questionnaire | null);
}

export interface QuestionnaireResponse__Output {
  'code': (number);
  'data': (_questionnaire_Questionnaire__Output | null);
}
