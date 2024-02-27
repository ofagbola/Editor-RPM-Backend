// Original file: src/protos/services.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateUserSubscription as _scheduler_CreateUserSubscription, CreateUserSubscription__Output as _scheduler_CreateUserSubscription__Output } from '../scheduler/CreateUserSubscription';
import type { DeleteUserSubscription as _scheduler_DeleteUserSubscription, DeleteUserSubscription__Output as _scheduler_DeleteUserSubscription__Output } from '../scheduler/DeleteUserSubscription';
import type { GetAllUserSubscriptions as _scheduler_GetAllUserSubscriptions, GetAllUserSubscriptions__Output as _scheduler_GetAllUserSubscriptions__Output } from '../scheduler/GetAllUserSubscriptions';
import type { GetOneUserSubscription as _scheduler_GetOneUserSubscription, GetOneUserSubscription__Output as _scheduler_GetOneUserSubscription__Output } from '../scheduler/GetOneUserSubscription';
import type { UpdateUserSubscription as _scheduler_UpdateUserSubscription, UpdateUserSubscription__Output as _scheduler_UpdateUserSubscription__Output } from '../scheduler/UpdateUserSubscription';
import type { UserSubscriptionMessage as _scheduler_UserSubscriptionMessage, UserSubscriptionMessage__Output as _scheduler_UserSubscriptionMessage__Output } from '../scheduler/UserSubscriptionMessage';
import type { UserSubscriptionResponse as _scheduler_UserSubscriptionResponse, UserSubscriptionResponse__Output as _scheduler_UserSubscriptionResponse__Output } from '../scheduler/UserSubscriptionResponse';
import type { UserSubscriptionsResponse as _scheduler_UserSubscriptionsResponse, UserSubscriptionsResponse__Output as _scheduler_UserSubscriptionsResponse__Output } from '../scheduler/UserSubscriptionsResponse';

export interface UserSubscriptionServiceClient extends grpc.Client {
  CreateUserSubscription(argument: _scheduler_CreateUserSubscription, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_UserSubscriptionMessage__Output>): grpc.ClientUnaryCall;
  CreateUserSubscription(argument: _scheduler_CreateUserSubscription, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_UserSubscriptionMessage__Output>): grpc.ClientUnaryCall;
  CreateUserSubscription(argument: _scheduler_CreateUserSubscription, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_UserSubscriptionMessage__Output>): grpc.ClientUnaryCall;
  CreateUserSubscription(argument: _scheduler_CreateUserSubscription, callback: grpc.requestCallback<_scheduler_UserSubscriptionMessage__Output>): grpc.ClientUnaryCall;
  createUserSubscription(argument: _scheduler_CreateUserSubscription, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_UserSubscriptionMessage__Output>): grpc.ClientUnaryCall;
  createUserSubscription(argument: _scheduler_CreateUserSubscription, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_UserSubscriptionMessage__Output>): grpc.ClientUnaryCall;
  createUserSubscription(argument: _scheduler_CreateUserSubscription, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_UserSubscriptionMessage__Output>): grpc.ClientUnaryCall;
  createUserSubscription(argument: _scheduler_CreateUserSubscription, callback: grpc.requestCallback<_scheduler_UserSubscriptionMessage__Output>): grpc.ClientUnaryCall;
  
  DeleteUserSubscription(argument: _scheduler_DeleteUserSubscription, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_UserSubscriptionMessage__Output>): grpc.ClientUnaryCall;
  DeleteUserSubscription(argument: _scheduler_DeleteUserSubscription, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_UserSubscriptionMessage__Output>): grpc.ClientUnaryCall;
  DeleteUserSubscription(argument: _scheduler_DeleteUserSubscription, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_UserSubscriptionMessage__Output>): grpc.ClientUnaryCall;
  DeleteUserSubscription(argument: _scheduler_DeleteUserSubscription, callback: grpc.requestCallback<_scheduler_UserSubscriptionMessage__Output>): grpc.ClientUnaryCall;
  deleteUserSubscription(argument: _scheduler_DeleteUserSubscription, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_UserSubscriptionMessage__Output>): grpc.ClientUnaryCall;
  deleteUserSubscription(argument: _scheduler_DeleteUserSubscription, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_UserSubscriptionMessage__Output>): grpc.ClientUnaryCall;
  deleteUserSubscription(argument: _scheduler_DeleteUserSubscription, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_UserSubscriptionMessage__Output>): grpc.ClientUnaryCall;
  deleteUserSubscription(argument: _scheduler_DeleteUserSubscription, callback: grpc.requestCallback<_scheduler_UserSubscriptionMessage__Output>): grpc.ClientUnaryCall;
  
  GetUserSubscription(argument: _scheduler_GetOneUserSubscription, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_UserSubscriptionResponse__Output>): grpc.ClientUnaryCall;
  GetUserSubscription(argument: _scheduler_GetOneUserSubscription, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_UserSubscriptionResponse__Output>): grpc.ClientUnaryCall;
  GetUserSubscription(argument: _scheduler_GetOneUserSubscription, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_UserSubscriptionResponse__Output>): grpc.ClientUnaryCall;
  GetUserSubscription(argument: _scheduler_GetOneUserSubscription, callback: grpc.requestCallback<_scheduler_UserSubscriptionResponse__Output>): grpc.ClientUnaryCall;
  getUserSubscription(argument: _scheduler_GetOneUserSubscription, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_UserSubscriptionResponse__Output>): grpc.ClientUnaryCall;
  getUserSubscription(argument: _scheduler_GetOneUserSubscription, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_UserSubscriptionResponse__Output>): grpc.ClientUnaryCall;
  getUserSubscription(argument: _scheduler_GetOneUserSubscription, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_UserSubscriptionResponse__Output>): grpc.ClientUnaryCall;
  getUserSubscription(argument: _scheduler_GetOneUserSubscription, callback: grpc.requestCallback<_scheduler_UserSubscriptionResponse__Output>): grpc.ClientUnaryCall;
  
  GetUserSubscriptions(argument: _scheduler_GetAllUserSubscriptions, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_UserSubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  GetUserSubscriptions(argument: _scheduler_GetAllUserSubscriptions, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_UserSubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  GetUserSubscriptions(argument: _scheduler_GetAllUserSubscriptions, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_UserSubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  GetUserSubscriptions(argument: _scheduler_GetAllUserSubscriptions, callback: grpc.requestCallback<_scheduler_UserSubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  getUserSubscriptions(argument: _scheduler_GetAllUserSubscriptions, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_UserSubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  getUserSubscriptions(argument: _scheduler_GetAllUserSubscriptions, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_UserSubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  getUserSubscriptions(argument: _scheduler_GetAllUserSubscriptions, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_UserSubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  getUserSubscriptions(argument: _scheduler_GetAllUserSubscriptions, callback: grpc.requestCallback<_scheduler_UserSubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateUserSubscription(argument: _scheduler_UpdateUserSubscription, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_UserSubscriptionMessage__Output>): grpc.ClientUnaryCall;
  UpdateUserSubscription(argument: _scheduler_UpdateUserSubscription, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_UserSubscriptionMessage__Output>): grpc.ClientUnaryCall;
  UpdateUserSubscription(argument: _scheduler_UpdateUserSubscription, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_UserSubscriptionMessage__Output>): grpc.ClientUnaryCall;
  UpdateUserSubscription(argument: _scheduler_UpdateUserSubscription, callback: grpc.requestCallback<_scheduler_UserSubscriptionMessage__Output>): grpc.ClientUnaryCall;
  updateUserSubscription(argument: _scheduler_UpdateUserSubscription, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_UserSubscriptionMessage__Output>): grpc.ClientUnaryCall;
  updateUserSubscription(argument: _scheduler_UpdateUserSubscription, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_UserSubscriptionMessage__Output>): grpc.ClientUnaryCall;
  updateUserSubscription(argument: _scheduler_UpdateUserSubscription, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_UserSubscriptionMessage__Output>): grpc.ClientUnaryCall;
  updateUserSubscription(argument: _scheduler_UpdateUserSubscription, callback: grpc.requestCallback<_scheduler_UserSubscriptionMessage__Output>): grpc.ClientUnaryCall;
  
}

export interface UserSubscriptionServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateUserSubscription: grpc.handleUnaryCall<_scheduler_CreateUserSubscription__Output, _scheduler_UserSubscriptionMessage>;
  
  DeleteUserSubscription: grpc.handleUnaryCall<_scheduler_DeleteUserSubscription__Output, _scheduler_UserSubscriptionMessage>;
  
  GetUserSubscription: grpc.handleUnaryCall<_scheduler_GetOneUserSubscription__Output, _scheduler_UserSubscriptionResponse>;
  
  GetUserSubscriptions: grpc.handleUnaryCall<_scheduler_GetAllUserSubscriptions__Output, _scheduler_UserSubscriptionsResponse>;
  
  UpdateUserSubscription: grpc.handleUnaryCall<_scheduler_UpdateUserSubscription__Output, _scheduler_UserSubscriptionMessage>;
  
}

export interface UserSubscriptionServiceDefinition extends grpc.ServiceDefinition {
  CreateUserSubscription: MethodDefinition<_scheduler_CreateUserSubscription, _scheduler_UserSubscriptionMessage, _scheduler_CreateUserSubscription__Output, _scheduler_UserSubscriptionMessage__Output>
  DeleteUserSubscription: MethodDefinition<_scheduler_DeleteUserSubscription, _scheduler_UserSubscriptionMessage, _scheduler_DeleteUserSubscription__Output, _scheduler_UserSubscriptionMessage__Output>
  GetUserSubscription: MethodDefinition<_scheduler_GetOneUserSubscription, _scheduler_UserSubscriptionResponse, _scheduler_GetOneUserSubscription__Output, _scheduler_UserSubscriptionResponse__Output>
  GetUserSubscriptions: MethodDefinition<_scheduler_GetAllUserSubscriptions, _scheduler_UserSubscriptionsResponse, _scheduler_GetAllUserSubscriptions__Output, _scheduler_UserSubscriptionsResponse__Output>
  UpdateUserSubscription: MethodDefinition<_scheduler_UpdateUserSubscription, _scheduler_UserSubscriptionMessage, _scheduler_UpdateUserSubscription__Output, _scheduler_UserSubscriptionMessage__Output>
}
