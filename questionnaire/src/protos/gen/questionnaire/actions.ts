// Original file: src/protos/category.proto

export const actions = {
  created: 'created',
  modified: 'modified',
  deleted: 'deleted',
} as const;

export type actions =
  | 'created'
  | 0
  | 'modified'
  | 1
  | 'deleted'
  | 2

export type actions__Output = typeof actions[keyof typeof actions]
