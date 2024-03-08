// Original file: src/protos/user.subscription.proto


export interface UpdateUserSubscription {
  'access_token'?: (string);
  'paid'?: (number | string);
  'status'?: (string);
  'id'?: (string);
}

export interface UpdateUserSubscription__Output {
  'access_token': (string);
  'paid': (number);
  'status': (string);
  'id': (string);
}
