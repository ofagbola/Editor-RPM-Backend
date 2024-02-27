// Original file: src/protos/subscription.proto

export const SubscriptionBillingType = {
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY',
  YEARLY: 'YEARLY',
} as const;

export type SubscriptionBillingType =
  | 'WEEKLY'
  | 0
  | 'MONTHLY'
  | 1
  | 'YEARLY'
  | 2

export type SubscriptionBillingType__Output = typeof SubscriptionBillingType[keyof typeof SubscriptionBillingType]
