// Original file: src/protos/schedule.proto

export const ScheduleStatus = {
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  PENDING: 'PENDING',
} as const;

export type ScheduleStatus =
  | 'ACCEPTED'
  | 0
  | 'REJECTED'
  | 1
  | 'PENDING'
  | 2

export type ScheduleStatus__Output = typeof ScheduleStatus[keyof typeof ScheduleStatus]
