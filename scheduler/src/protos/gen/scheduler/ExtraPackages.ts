// Original file: src/protos/subscription.proto

export const ExtraPackages = {
  MESSAGING: 'MESSAGING',
  VIDEO_CALL: 'VIDEO_CALL',
  VOICE_CALL: 'VOICE_CALL',
  QUESTIONNAIRE: 'QUESTIONNAIRE',
} as const;

export type ExtraPackages =
  | 'MESSAGING'
  | 0
  | 'VIDEO_CALL'
  | 1
  | 'VOICE_CALL'
  | 2
  | 'QUESTIONNAIRE'
  | 3

export type ExtraPackages__Output = typeof ExtraPackages[keyof typeof ExtraPackages]
