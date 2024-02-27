// Original file: src/protos/review.proto

import type { ReviewRequest as _scheduler_ReviewRequest, ReviewRequest__Output as _scheduler_ReviewRequest__Output } from '../scheduler/ReviewRequest';

export interface ReviewsResponse {
  'code'?: (number);
  'data'?: (_scheduler_ReviewRequest)[];
}

export interface ReviewsResponse__Output {
  'code': (number);
  'data': (_scheduler_ReviewRequest__Output)[];
}
