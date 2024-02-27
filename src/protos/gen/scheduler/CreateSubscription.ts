// Original file: src/protos/subscription.proto

import type { SubscriptionBillingType as _scheduler_SubscriptionBillingType, SubscriptionBillingType__Output as _scheduler_SubscriptionBillingType__Output } from '../scheduler/SubscriptionBillingType';
import type { SubscriptionPaymentMethodType as _scheduler_SubscriptionPaymentMethodType, SubscriptionPaymentMethodType__Output as _scheduler_SubscriptionPaymentMethodType__Output } from '../scheduler/SubscriptionPaymentMethodType';
import type { Benefits as _scheduler_Benefits, Benefits__Output as _scheduler_Benefits__Output } from '../scheduler/Benefits';

export interface CreateSubscription {
  'name'?: (string);
  'amount'?: (number | string);
  'currency'?: (string);
  'discount'?: (number | string);
  'billing'?: (_scheduler_SubscriptionBillingType)[];
  'paymentMethod'?: (_scheduler_SubscriptionPaymentMethodType)[];
  'benefits'?: (_scheduler_Benefits)[];
  'access_token'?: (string);
}

export interface CreateSubscription__Output {
  'name': (string);
  'amount': (number);
  'currency': (string);
  'discount': (number);
  'billing': (_scheduler_SubscriptionBillingType__Output)[];
  'paymentMethod': (_scheduler_SubscriptionPaymentMethodType__Output)[];
  'benefits': (_scheduler_Benefits__Output)[];
  'access_token': (string);
}
