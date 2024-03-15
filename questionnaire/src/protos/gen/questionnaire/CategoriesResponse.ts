// Original file: src/protos/category.proto

import type { Category as _questionnaire_Category, Category__Output as _questionnaire_Category__Output } from '../questionnaire/Category';

export interface CategoriesResponse {
  'code'?: (number);
  'data'?: (_questionnaire_Category)[];
}

export interface CategoriesResponse__Output {
  'code': (number);
  'data': (_questionnaire_Category__Output)[];
}
