// Original file: src/protos/review.proto

import type { ReviewRequest as _scheduler_ReviewRequest, ReviewRequest__Output as _scheduler_ReviewRequest__Output } from '../scheduler/ReviewRequest';

export interface ReviewResponse {
  'code'?: (number);
  'data'?: (_scheduler_ReviewRequest | null);
}

export interface ReviewResponse__Output {
  'code': (number);
  'data': (_scheduler_ReviewRequest__Output | null);
}
