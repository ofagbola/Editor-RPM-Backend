// Original file: src/protos/review.proto


export interface GetSessionReviews {
  'access_token'?: (string);
  'request_query'?: ({[key: string]: string});
  'sessionId'?: (string);
}

export interface GetSessionReviews__Output {
  'access_token': (string);
  'request_query': ({[key: string]: string});
  'sessionId': (string);
}
