import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';


type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition
    }
  }
  scheduler: {
    CreateReSchedule: MessageTypeDefinition
    CreateSchedule: MessageTypeDefinition
    DeleteReSchedule: MessageTypeDefinition
    DeleteSchedule: MessageTypeDefinition
    GetAllSchedules: MessageTypeDefinition
    GetOneSchedule: MessageTypeDefinition
    Schedule: MessageTypeDefinition
    ScheduleMessage: MessageTypeDefinition
    ScheduleRequest: MessageTypeDefinition
    ScheduleResponse: MessageTypeDefinition
    ScheduleStatus: EnumTypeDefinition
    SchedulesResponse: MessageTypeDefinition
    UpdateReSchedule: MessageTypeDefinition
    UpdateSchedule: MessageTypeDefinition
    User: MessageTypeDefinition
    UserType: EnumTypeDefinition
  }
}

