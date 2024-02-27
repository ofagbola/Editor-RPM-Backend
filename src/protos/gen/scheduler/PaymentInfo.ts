// Original file: src/protos/user.subscription.proto

import type { UserPaymentMethodType as _scheduler_UserPaymentMethodType, UserPaymentMethodType__Output as _scheduler_UserPaymentMethodType__Output } from '../scheduler/UserPaymentMethodType';
import type { Long } from '@grpc/proto-loader';

export interface PaymentInfo {
  'name'?: (string);
  'cardNumber'?: (number | string | Long);
  'paymentId'?: (string);
  'additionalKey'?: (string);
  'cvv'?: (number);
  'pin'?: (number);
  'type'?: (_scheduler_UserPaymentMethodType);
  'description'?: (string);
}

export interface PaymentInfo__Output {
  'name': (string);
  'cardNumber': (string);
  'paymentId': (string);
  'additionalKey': (string);
  'cvv': (number);
  'pin': (number);
  'type': (_scheduler_UserPaymentMethodType__Output);
  'description': (string);
}
