// Original file: src/protos/question.proto


export interface UpdateQuestion {
  'access_token'?: (string);
  'question'?: (string);
  'answers'?: (string)[];
  'type'?: (string);
  'status'?: (string);
  'category'?: (string);
  'id'?: (string);
}

export interface UpdateQuestion__Output {
  'access_token': (string);
  'question': (string);
  'answers': (string)[];
  'type': (string);
  'status': (string);
  'category': (string);
  'id': (string);
}
