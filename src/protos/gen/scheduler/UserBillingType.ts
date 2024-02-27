// Original file: src/protos/user.subscription.proto

export const UserBillingType = {
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY',
  YEARLY: 'YEARLY',
} as const;

export type UserBillingType =
  | 'WEEKLY'
  | 0
  | 'MONTHLY'
  | 1
  | 'YEARLY'
  | 2

export type UserBillingType__Output = typeof UserBillingType[keyof typeof UserBillingType]
