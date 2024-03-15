// Original file: src/protos/answer.proto


export interface CreateAnswer {
  'access_token'?: (string);
  'questionnaire'?: (string);
  'answer'?: (string)[];
  'question'?: (string);
  'status'?: (string);
}

export interface CreateAnswer__Output {
  'access_token': (string);
  'questionnaire': (string);
  'answer': (string)[];
  'question': (string);
  'status': (string);
}
