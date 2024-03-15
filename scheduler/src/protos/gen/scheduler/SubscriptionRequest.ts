// Original file: src/protos/subscription.proto

import type { Status as _scheduler_Status, Status__Output as _scheduler_Status__Output } from '../scheduler/Status';
import type { SubscriptionBillingType as _scheduler_SubscriptionBillingType, SubscriptionBillingType__Output as _scheduler_SubscriptionBillingType__Output } from '../scheduler/SubscriptionBillingType';
import type { SubscriptionPaymentMethodType as _scheduler_SubscriptionPaymentMethodType, SubscriptionPaymentMethodType__Output as _scheduler_SubscriptionPaymentMethodType__Output } from '../scheduler/SubscriptionPaymentMethodType';
import type { Benefits as _scheduler_Benefits, Benefits__Output as _scheduler_Benefits__Output } from '../scheduler/Benefits';
import type { Extras as _scheduler_Extras, Extras__Output as _scheduler_Extras__Output } from '../scheduler/Extras';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface SubscriptionRequest {
  'id'?: (string);
  'name'?: (string);
  'status'?: (_scheduler_Status);
  'amount'?: (number | string);
  'currency'?: (string);
  'discount'?: (number | string);
  'billing'?: (_scheduler_SubscriptionBillingType)[];
  'paymentMethod'?: (_scheduler_SubscriptionPaymentMethodType)[];
  'benefits'?: (_scheduler_Benefits)[];
  'extras'?: (_scheduler_Extras | null);
  'created_at'?: (_google_protobuf_Timestamp | null);
  'updated_at'?: (_google_protobuf_Timestamp | null);
}

export interface SubscriptionRequest__Output {
  'id': (string);
  'name': (string);
  'status': (_scheduler_Status__Output);
  'amount': (number);
  'currency': (string);
  'discount': (number);
  'billing': (_scheduler_SubscriptionBillingType__Output)[];
  'paymentMethod': (_scheduler_SubscriptionPaymentMethodType__Output)[];
  'benefits': (_scheduler_Benefits__Output)[];
  'extras': (_scheduler_Extras__Output | null);
  'created_at': (_google_protobuf_Timestamp__Output | null);
  'updated_at': (_google_protobuf_Timestamp__Output | null);
}
