// Original file: src/protos/user.subscription.proto

import type { UserBillingType as _scheduler_UserBillingType, UserBillingType__Output as _scheduler_UserBillingType__Output } from '../scheduler/UserBillingType';
import type { UserPaymentMethodType as _scheduler_UserPaymentMethodType, UserPaymentMethodType__Output as _scheduler_UserPaymentMethodType__Output } from '../scheduler/UserPaymentMethodType';
import type { PaymentInfo as _scheduler_PaymentInfo, PaymentInfo__Output as _scheduler_PaymentInfo__Output } from '../scheduler/PaymentInfo';

export interface CreateUserSubscription {
  'access_token'?: (string);
  'subscriptionId'?: (string);
  'payed'?: (number | string);
  'billing'?: (_scheduler_UserBillingType);
  'paymentMethod'?: (_scheduler_UserPaymentMethodType);
  'paymentInfo'?: (_scheduler_PaymentInfo | null);
}

export interface CreateUserSubscription__Output {
  'access_token': (string);
  'subscriptionId': (string);
  'payed': (number);
  'billing': (_scheduler_UserBillingType__Output);
  'paymentMethod': (_scheduler_UserPaymentMethodType__Output);
  'paymentInfo': (_scheduler_PaymentInfo__Output | null);
}
