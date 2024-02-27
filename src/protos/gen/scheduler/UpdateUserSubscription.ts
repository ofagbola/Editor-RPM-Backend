// Original file: src/protos/user.subscription.proto


export interface UpdateUserSubscription {
  'access_token'?: (string);
  'payed'?: (number | string);
  'status'?: (string);
  'id'?: (string);
}

export interface UpdateUserSubscription__Output {
  'access_token': (string);
  'payed': (number);
  'status': (string);
  'id': (string);
}
