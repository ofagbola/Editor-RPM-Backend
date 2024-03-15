// Original file: src/protos/services.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateReSchedule as _scheduler_CreateReSchedule, CreateReSchedule__Output as _scheduler_CreateReSchedule__Output } from '../scheduler/CreateReSchedule';
import type { CreateSchedule as _scheduler_CreateSchedule, CreateSchedule__Output as _scheduler_CreateSchedule__Output } from '../scheduler/CreateSchedule';
import type { DeleteReSchedule as _scheduler_DeleteReSchedule, DeleteReSchedule__Output as _scheduler_DeleteReSchedule__Output } from '../scheduler/DeleteReSchedule';
import type { DeleteSchedule as _scheduler_DeleteSchedule, DeleteSchedule__Output as _scheduler_DeleteSchedule__Output } from '../scheduler/DeleteSchedule';
import type { GetAllSchedules as _scheduler_GetAllSchedules, GetAllSchedules__Output as _scheduler_GetAllSchedules__Output } from '../scheduler/GetAllSchedules';
import type { GetOneSchedule as _scheduler_GetOneSchedule, GetOneSchedule__Output as _scheduler_GetOneSchedule__Output } from '../scheduler/GetOneSchedule';
import type { ScheduleMessage as _scheduler_ScheduleMessage, ScheduleMessage__Output as _scheduler_ScheduleMessage__Output } from '../scheduler/ScheduleMessage';
import type { ScheduleResponse as _scheduler_ScheduleResponse, ScheduleResponse__Output as _scheduler_ScheduleResponse__Output } from '../scheduler/ScheduleResponse';
import type { SchedulesResponse as _scheduler_SchedulesResponse, SchedulesResponse__Output as _scheduler_SchedulesResponse__Output } from '../scheduler/SchedulesResponse';
import type { UpdateReSchedule as _scheduler_UpdateReSchedule, UpdateReSchedule__Output as _scheduler_UpdateReSchedule__Output } from '../scheduler/UpdateReSchedule';
import type { UpdateSchedule as _scheduler_UpdateSchedule, UpdateSchedule__Output as _scheduler_UpdateSchedule__Output } from '../scheduler/UpdateSchedule';

export interface ScheduleServiceClient extends grpc.Client {
  CreateReSchedule(argument: _scheduler_CreateReSchedule, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  CreateReSchedule(argument: _scheduler_CreateReSchedule, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  CreateReSchedule(argument: _scheduler_CreateReSchedule, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  CreateReSchedule(argument: _scheduler_CreateReSchedule, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  createReSchedule(argument: _scheduler_CreateReSchedule, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  createReSchedule(argument: _scheduler_CreateReSchedule, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  createReSchedule(argument: _scheduler_CreateReSchedule, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  createReSchedule(argument: _scheduler_CreateReSchedule, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  
  CreateSchedule(argument: _scheduler_CreateSchedule, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  CreateSchedule(argument: _scheduler_CreateSchedule, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  CreateSchedule(argument: _scheduler_CreateSchedule, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  CreateSchedule(argument: _scheduler_CreateSchedule, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  createSchedule(argument: _scheduler_CreateSchedule, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  createSchedule(argument: _scheduler_CreateSchedule, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  createSchedule(argument: _scheduler_CreateSchedule, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  createSchedule(argument: _scheduler_CreateSchedule, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  
  DeleteReSchedule(argument: _scheduler_DeleteReSchedule, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  DeleteReSchedule(argument: _scheduler_DeleteReSchedule, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  DeleteReSchedule(argument: _scheduler_DeleteReSchedule, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  DeleteReSchedule(argument: _scheduler_DeleteReSchedule, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  deleteReSchedule(argument: _scheduler_DeleteReSchedule, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  deleteReSchedule(argument: _scheduler_DeleteReSchedule, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  deleteReSchedule(argument: _scheduler_DeleteReSchedule, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  deleteReSchedule(argument: _scheduler_DeleteReSchedule, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  
  DeleteSchedule(argument: _scheduler_DeleteSchedule, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  DeleteSchedule(argument: _scheduler_DeleteSchedule, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  DeleteSchedule(argument: _scheduler_DeleteSchedule, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  DeleteSchedule(argument: _scheduler_DeleteSchedule, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  deleteSchedule(argument: _scheduler_DeleteSchedule, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  deleteSchedule(argument: _scheduler_DeleteSchedule, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  deleteSchedule(argument: _scheduler_DeleteSchedule, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  deleteSchedule(argument: _scheduler_DeleteSchedule, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  
  GetSchedule(argument: _scheduler_GetOneSchedule, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ScheduleResponse__Output>): grpc.ClientUnaryCall;
  GetSchedule(argument: _scheduler_GetOneSchedule, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_ScheduleResponse__Output>): grpc.ClientUnaryCall;
  GetSchedule(argument: _scheduler_GetOneSchedule, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ScheduleResponse__Output>): grpc.ClientUnaryCall;
  GetSchedule(argument: _scheduler_GetOneSchedule, callback: grpc.requestCallback<_scheduler_ScheduleResponse__Output>): grpc.ClientUnaryCall;
  getSchedule(argument: _scheduler_GetOneSchedule, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ScheduleResponse__Output>): grpc.ClientUnaryCall;
  getSchedule(argument: _scheduler_GetOneSchedule, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_ScheduleResponse__Output>): grpc.ClientUnaryCall;
  getSchedule(argument: _scheduler_GetOneSchedule, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ScheduleResponse__Output>): grpc.ClientUnaryCall;
  getSchedule(argument: _scheduler_GetOneSchedule, callback: grpc.requestCallback<_scheduler_ScheduleResponse__Output>): grpc.ClientUnaryCall;
  
  GetSchedules(argument: _scheduler_GetAllSchedules, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SchedulesResponse__Output>): grpc.ClientUnaryCall;
  GetSchedules(argument: _scheduler_GetAllSchedules, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_SchedulesResponse__Output>): grpc.ClientUnaryCall;
  GetSchedules(argument: _scheduler_GetAllSchedules, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SchedulesResponse__Output>): grpc.ClientUnaryCall;
  GetSchedules(argument: _scheduler_GetAllSchedules, callback: grpc.requestCallback<_scheduler_SchedulesResponse__Output>): grpc.ClientUnaryCall;
  getSchedules(argument: _scheduler_GetAllSchedules, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SchedulesResponse__Output>): grpc.ClientUnaryCall;
  getSchedules(argument: _scheduler_GetAllSchedules, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_SchedulesResponse__Output>): grpc.ClientUnaryCall;
  getSchedules(argument: _scheduler_GetAllSchedules, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SchedulesResponse__Output>): grpc.ClientUnaryCall;
  getSchedules(argument: _scheduler_GetAllSchedules, callback: grpc.requestCallback<_scheduler_SchedulesResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateReSchedule(argument: _scheduler_UpdateReSchedule, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  UpdateReSchedule(argument: _scheduler_UpdateReSchedule, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  UpdateReSchedule(argument: _scheduler_UpdateReSchedule, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  UpdateReSchedule(argument: _scheduler_UpdateReSchedule, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  updateReSchedule(argument: _scheduler_UpdateReSchedule, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  updateReSchedule(argument: _scheduler_UpdateReSchedule, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  updateReSchedule(argument: _scheduler_UpdateReSchedule, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  updateReSchedule(argument: _scheduler_UpdateReSchedule, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  
  UpdateSchedule(argument: _scheduler_UpdateSchedule, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  UpdateSchedule(argument: _scheduler_UpdateSchedule, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  UpdateSchedule(argument: _scheduler_UpdateSchedule, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  UpdateSchedule(argument: _scheduler_UpdateSchedule, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  updateSchedule(argument: _scheduler_UpdateSchedule, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  updateSchedule(argument: _scheduler_UpdateSchedule, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  updateSchedule(argument: _scheduler_UpdateSchedule, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  updateSchedule(argument: _scheduler_UpdateSchedule, callback: grpc.requestCallback<_scheduler_ScheduleMessage__Output>): grpc.ClientUnaryCall;
  
}

export interface ScheduleServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateReSchedule: grpc.handleUnaryCall<_scheduler_CreateReSchedule__Output, _scheduler_ScheduleMessage>;
  
  CreateSchedule: grpc.handleUnaryCall<_scheduler_CreateSchedule__Output, _scheduler_ScheduleMessage>;
  
  DeleteReSchedule: grpc.handleUnaryCall<_scheduler_DeleteReSchedule__Output, _scheduler_ScheduleMessage>;
  
  DeleteSchedule: grpc.handleUnaryCall<_scheduler_DeleteSchedule__Output, _scheduler_ScheduleMessage>;
  
  GetSchedule: grpc.handleUnaryCall<_scheduler_GetOneSchedule__Output, _scheduler_ScheduleResponse>;
  
  GetSchedules: grpc.handleUnaryCall<_scheduler_GetAllSchedules__Output, _scheduler_SchedulesResponse>;
  
  UpdateReSchedule: grpc.handleUnaryCall<_scheduler_UpdateReSchedule__Output, _scheduler_ScheduleMessage>;
  
  UpdateSchedule: grpc.handleUnaryCall<_scheduler_UpdateSchedule__Output, _scheduler_ScheduleMessage>;
  
}

export interface ScheduleServiceDefinition extends grpc.ServiceDefinition {
  CreateReSchedule: MethodDefinition<_scheduler_CreateReSchedule, _scheduler_ScheduleMessage, _scheduler_CreateReSchedule__Output, _scheduler_ScheduleMessage__Output>
  CreateSchedule: MethodDefinition<_scheduler_CreateSchedule, _scheduler_ScheduleMessage, _scheduler_CreateSchedule__Output, _scheduler_ScheduleMessage__Output>
  DeleteReSchedule: MethodDefinition<_scheduler_DeleteReSchedule, _scheduler_ScheduleMessage, _scheduler_DeleteReSchedule__Output, _scheduler_ScheduleMessage__Output>
  DeleteSchedule: MethodDefinition<_scheduler_DeleteSchedule, _scheduler_ScheduleMessage, _scheduler_DeleteSchedule__Output, _scheduler_ScheduleMessage__Output>
  GetSchedule: MethodDefinition<_scheduler_GetOneSchedule, _scheduler_ScheduleResponse, _scheduler_GetOneSchedule__Output, _scheduler_ScheduleResponse__Output>
  GetSchedules: MethodDefinition<_scheduler_GetAllSchedules, _scheduler_SchedulesResponse, _scheduler_GetAllSchedules__Output, _scheduler_SchedulesResponse__Output>
  UpdateReSchedule: MethodDefinition<_scheduler_UpdateReSchedule, _scheduler_ScheduleMessage, _scheduler_UpdateReSchedule__Output, _scheduler_ScheduleMessage__Output>
  UpdateSchedule: MethodDefinition<_scheduler_UpdateSchedule, _scheduler_ScheduleMessage, _scheduler_UpdateSchedule__Output, _scheduler_ScheduleMessage__Output>
}
