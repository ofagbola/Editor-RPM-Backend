// Original file: src/protos/schedule.proto

export const UserType = {
  PATIENT: 'PATIENT',
  DOCTOR: 'DOCTOR',
} as const;

export type UserType =
  | 'PATIENT'
  | 0
  | 'DOCTOR'
  | 1

export type UserType__Output = typeof UserType[keyof typeof UserType]
