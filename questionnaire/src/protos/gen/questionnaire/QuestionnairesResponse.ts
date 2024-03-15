// Original file: src/protos/questionnaire.proto

import type { Questionnaire as _questionnaire_Questionnaire, Questionnaire__Output as _questionnaire_Questionnaire__Output } from '../questionnaire/Questionnaire';

export interface QuestionnairesResponse {
  'code'?: (number);
  'data'?: (_questionnaire_Questionnaire)[];
}

export interface QuestionnairesResponse__Output {
  'code': (number);
  'data': (_questionnaire_Questionnaire__Output)[];
}
