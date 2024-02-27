// Original file: src/protos/review.proto


export interface CreateReview {
  'sessionId'?: (string);
  'doctorId'?: (string);
  'rating'?: (number | string);
  'review'?: (string);
  'access_token'?: (string);
}

export interface CreateReview__Output {
  'sessionId': (string);
  'doctorId': (string);
  'rating': (number);
  'review': (string);
  'access_token': (string);
}
