// Original file: src/protos/user.subscription.proto

import type { UserSubscriptionRequest as _scheduler_UserSubscriptionRequest, UserSubscriptionRequest__Output as _scheduler_UserSubscriptionRequest__Output } from '../scheduler/UserSubscriptionRequest';

export interface UserSubscriptionResponse {
  'code'?: (number);
  'data'?: (_scheduler_UserSubscriptionRequest | null);
}

export interface UserSubscriptionResponse__Output {
  'code': (number);
  'data': (_scheduler_UserSubscriptionRequest__Output | null);
}
