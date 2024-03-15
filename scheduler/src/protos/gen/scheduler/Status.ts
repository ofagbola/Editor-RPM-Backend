// Original file: src/protos/subscription.proto

export const Status = {
  active: 'active',
  inactive: 'inactive',
} as const;

export type Status =
  | 'active'
  | 0
  | 'inactive'
  | 1

export type Status__Output = typeof Status[keyof typeof Status]
