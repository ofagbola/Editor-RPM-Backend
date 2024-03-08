// Original file: src/protos/subscription.proto

import type { ExtraPackages as _scheduler_ExtraPackages, ExtraPackages__Output as _scheduler_ExtraPackages__Output } from '../scheduler/ExtraPackages';

export interface Extras {
  'duration'?: (string);
  'sessions'?: (number);
  'packages'?: (_scheduler_ExtraPackages)[];
}

export interface Extras__Output {
  'duration': (string);
  'sessions': (number);
  'packages': (_scheduler_ExtraPackages__Output)[];
}
