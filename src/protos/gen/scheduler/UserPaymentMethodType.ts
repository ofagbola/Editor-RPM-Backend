// Original file: src/protos/user.subscription.proto

export const UserPaymentMethodType = {
  PAYPAL: 'PAYPAL',
  STRIPE: 'STRIPE',
  VENMO: 'VENMO',
  CARD: 'CARD',
} as const;

export type UserPaymentMethodType =
  | 'PAYPAL'
  | 0
  | 'STRIPE'
  | 1
  | 'VENMO'
  | 2
  | 'CARD'
  | 3

export type UserPaymentMethodType__Output = typeof UserPaymentMethodType[keyof typeof UserPaymentMethodType]
