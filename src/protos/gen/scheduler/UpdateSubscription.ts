// Original file: src/protos/subscription.proto

import type { Status as _scheduler_Status, Status__Output as _scheduler_Status__Output } from '../scheduler/Status';
import type { SubscriptionBillingType as _scheduler_SubscriptionBillingType, SubscriptionBillingType__Output as _scheduler_SubscriptionBillingType__Output } from '../scheduler/SubscriptionBillingType';
import type { SubscriptionPaymentMethodType as _scheduler_SubscriptionPaymentMethodType, SubscriptionPaymentMethodType__Output as _scheduler_SubscriptionPaymentMethodType__Output } from '../scheduler/SubscriptionPaymentMethodType';
import type { Benefits as _scheduler_Benefits, Benefits__Output as _scheduler_Benefits__Output } from '../scheduler/Benefits';

export interface UpdateSubscription {
  'access_token'?: (string);
  'name'?: (string);
  'status'?: (_scheduler_Status);
  'amount'?: (number | string);
  'currency'?: (string);
  'discount'?: (number | string);
  'billing'?: (_scheduler_SubscriptionBillingType)[];
  'paymentMethod'?: (_scheduler_SubscriptionPaymentMethodType)[];
  'benefits'?: (_scheduler_Benefits)[];
  'id'?: (string);
}

export interface UpdateSubscription__Output {
  'access_token': (string);
  'name': (string);
  'status': (_scheduler_Status__Output);
  'amount': (number);
  'currency': (string);
  'discount': (number);
  'billing': (_scheduler_SubscriptionBillingType__Output)[];
  'paymentMethod': (_scheduler_SubscriptionPaymentMethodType__Output)[];
  'benefits': (_scheduler_Benefits__Output)[];
  'id': (string);
}
