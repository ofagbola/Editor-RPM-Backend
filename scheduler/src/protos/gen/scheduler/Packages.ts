// Original file: src/protos/schedule.proto

export const Packages = {
  MESSAGING: 'MESSAGING',
  VIDEO_CALL: 'VIDEO_CALL',
  VOICE_CALL: 'VOICE_CALL',
  QUESTIONNAIRE: 'QUESTIONNAIRE',
} as const;

export type Packages =
  | 'MESSAGING'
  | 0
  | 'VIDEO_CALL'
  | 1
  | 'VOICE_CALL'
  | 2
  | 'QUESTIONNAIRE'
  | 3

export type Packages__Output = typeof Packages[keyof typeof Packages]
