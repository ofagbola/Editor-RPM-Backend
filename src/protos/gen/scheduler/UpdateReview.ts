// Original file: src/protos/review.proto


export interface UpdateReview {
  'access_token'?: (string);
  'rating'?: (number | string);
  'review'?: (string);
  'id'?: (string);
}

export interface UpdateReview__Output {
  'access_token': (string);
  'rating': (number);
  'review': (string);
  'id': (string);
}
