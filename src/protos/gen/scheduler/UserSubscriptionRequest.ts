// Original file: src/protos/user.subscription.proto

import type { UserBillingType as _scheduler_UserBillingType, UserBillingType__Output as _scheduler_UserBillingType__Output } from '../scheduler/UserBillingType';
import type { UserPaymentMethodType as _scheduler_UserPaymentMethodType, UserPaymentMethodType__Output as _scheduler_UserPaymentMethodType__Output } from '../scheduler/UserPaymentMethodType';
import type { PaymentInfo as _scheduler_PaymentInfo, PaymentInfo__Output as _scheduler_PaymentInfo__Output } from '../scheduler/PaymentInfo';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface UserSubscriptionRequest {
  'id'?: (string);
  'subscriptionId'?: (string);
  'userId'?: (string);
  'payed'?: (number | string);
  'outstanding'?: (number | string);
  'discount'?: (number | string);
  'billing'?: (_scheduler_UserBillingType);
  'paymentMethod'?: (_scheduler_UserPaymentMethodType);
  'paymentInfo'?: (_scheduler_PaymentInfo | null);
  'status'?: (string);
  'created_at'?: (_google_protobuf_Timestamp | null);
  'updated_at'?: (_google_protobuf_Timestamp | null);
}

export interface UserSubscriptionRequest__Output {
  'id': (string);
  'subscriptionId': (string);
  'userId': (string);
  'payed': (number);
  'outstanding': (number);
  'discount': (number);
  'billing': (_scheduler_UserBillingType__Output);
  'paymentMethod': (_scheduler_UserPaymentMethodType__Output);
  'paymentInfo': (_scheduler_PaymentInfo__Output | null);
  'status': (string);
  'created_at': (_google_protobuf_Timestamp__Output | null);
  'updated_at': (_google_protobuf_Timestamp__Output | null);
}
