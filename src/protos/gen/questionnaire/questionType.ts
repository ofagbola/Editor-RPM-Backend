// Original file: src/protos/question.proto

export const questionType = {
  singleChoice: 'singleChoice',
  multipleChoice: 'multipleChoice',
  numberScale: 'numberScale',
  longAnswer: 'longAnswer',
  shortAnswer: 'shortAnswer',
  existngQuestion: 'existngQuestion',
} as const;

export type questionType =
  | 'singleChoice'
  | 0
  | 'multipleChoice'
  | 1
  | 'numberScale'
  | 2
  | 'longAnswer'
  | 3
  | 'shortAnswer'
  | 4
  | 'existngQuestion'
  | 5

export type questionType__Output = typeof questionType[keyof typeof questionType]
