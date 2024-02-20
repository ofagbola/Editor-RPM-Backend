// Original file: src/protos/services.proto


export interface CreateInput {
  'access_token'?: (string);
  'question'?: (string);
  'answers'?: (string)[];
  'type'?: (string);
  'status'?: (string);
}

export interface CreateInput__Output {
  'access_token': (string);
  'question': (string);
  'answers': (string)[];
  'type': (string);
  'status': (string);
}
