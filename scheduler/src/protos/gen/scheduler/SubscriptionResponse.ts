// Original file: src/protos/subscription.proto

import type { SubscriptionRequest as _scheduler_SubscriptionRequest, SubscriptionRequest__Output as _scheduler_SubscriptionRequest__Output } from '../scheduler/SubscriptionRequest';

export interface SubscriptionResponse {
  'code'?: (number);
  'data'?: (_scheduler_SubscriptionRequest | null);
}

export interface SubscriptionResponse__Output {
  'code': (number);
  'data': (_scheduler_SubscriptionRequest__Output | null);
}
