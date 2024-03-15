// Original file: src/protos/subscription.proto

export const SubscriptionPaymentMethodType = {
  PAYPAL: 'PAYPAL',
  STRIPE: 'STRIPE',
  VENMO: 'VENMO',
  CARD: 'CARD',
} as const;

export type SubscriptionPaymentMethodType =
  | 'PAYPAL'
  | 0
  | 'STRIPE'
  | 1
  | 'VENMO'
  | 2
  | 'CARD'
  | 3

export type SubscriptionPaymentMethodType__Output = typeof SubscriptionPaymentMethodType[keyof typeof SubscriptionPaymentMethodType]
