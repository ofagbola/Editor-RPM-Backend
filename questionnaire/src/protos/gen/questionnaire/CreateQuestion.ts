// Original file: src/protos/question.proto


export interface CreateQuestion {
  'access_token'?: (string);
  'question'?: (string);
  'answers'?: (string)[];
  'category'?: (string);
  'type'?: (string);
  'status'?: (string);
}

export interface CreateQuestion__Output {
  'access_token': (string);
  'question': (string);
  'answers': (string)[];
  'category': (string);
  'type': (string);
  'status': (string);
}
