// Original file: src/protos/services.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateUserSubscription as _scheduler_CreateUserSubscription, CreateUserSubscription__Output as _scheduler_CreateUserSubscription__Output } from '../scheduler/CreateUserSubscription';
import type { DeleteUserSubscription as _scheduler_DeleteUserSubscription, DeleteUserSubscription__Output as _scheduler_DeleteUserSubscription__Output } from '../scheduler/DeleteUserSubscription';
import type { GetAllUserSubscriptions as _scheduler_GetAllUserSubscriptions, GetAllUserSubscriptions__Output as _scheduler_GetAllUserSubscriptions__Output } from '../scheduler/GetAllUserSubscriptions';
import type { GetOneUserSubscription as _scheduler_GetOneUserSubscription, GetOneUserSubscription__Output as _scheduler_GetOneUserSubscription__Output } from '../scheduler/GetOneUserSubscription';
import type { SubscriptionMessage as _scheduler_SubscriptionMessage, SubscriptionMessage__Output as _scheduler_SubscriptionMessage__Output } from '../scheduler/SubscriptionMessage';
import type { SubscriptionResponse as _scheduler_SubscriptionResponse, SubscriptionResponse__Output as _scheduler_SubscriptionResponse__Output } from '../scheduler/SubscriptionResponse';
import type { SubscriptionsResponse as _scheduler_SubscriptionsResponse, SubscriptionsResponse__Output as _scheduler_SubscriptionsResponse__Output } from '../scheduler/SubscriptionsResponse';

export interface UserSubscriptionServiceClient extends grpc.Client {
  CreateUserSubscription(argument: _scheduler_CreateUserSubscription, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  CreateUserSubscription(argument: _scheduler_CreateUserSubscription, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  CreateUserSubscription(argument: _scheduler_CreateUserSubscription, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  CreateUserSubscription(argument: _scheduler_CreateUserSubscription, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  createUserSubscription(argument: _scheduler_CreateUserSubscription, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  createUserSubscription(argument: _scheduler_CreateUserSubscription, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  createUserSubscription(argument: _scheduler_CreateUserSubscription, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  createUserSubscription(argument: _scheduler_CreateUserSubscription, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  
  DeleteUserSubscription(argument: _scheduler_DeleteUserSubscription, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  DeleteUserSubscription(argument: _scheduler_DeleteUserSubscription, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  DeleteUserSubscription(argument: _scheduler_DeleteUserSubscription, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  DeleteUserSubscription(argument: _scheduler_DeleteUserSubscription, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  deleteUserSubscription(argument: _scheduler_DeleteUserSubscription, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  deleteUserSubscription(argument: _scheduler_DeleteUserSubscription, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  deleteUserSubscription(argument: _scheduler_DeleteUserSubscription, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  deleteUserSubscription(argument: _scheduler_DeleteUserSubscription, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  
  GetUserSubscription(argument: _scheduler_GetOneUserSubscription, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionResponse__Output>): grpc.ClientUnaryCall;
  GetUserSubscription(argument: _scheduler_GetOneUserSubscription, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_SubscriptionResponse__Output>): grpc.ClientUnaryCall;
  GetUserSubscription(argument: _scheduler_GetOneUserSubscription, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionResponse__Output>): grpc.ClientUnaryCall;
  GetUserSubscription(argument: _scheduler_GetOneUserSubscription, callback: grpc.requestCallback<_scheduler_SubscriptionResponse__Output>): grpc.ClientUnaryCall;
  getUserSubscription(argument: _scheduler_GetOneUserSubscription, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionResponse__Output>): grpc.ClientUnaryCall;
  getUserSubscription(argument: _scheduler_GetOneUserSubscription, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_SubscriptionResponse__Output>): grpc.ClientUnaryCall;
  getUserSubscription(argument: _scheduler_GetOneUserSubscription, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionResponse__Output>): grpc.ClientUnaryCall;
  getUserSubscription(argument: _scheduler_GetOneUserSubscription, callback: grpc.requestCallback<_scheduler_SubscriptionResponse__Output>): grpc.ClientUnaryCall;
  
  GetUserSubscriptions(argument: _scheduler_GetAllUserSubscriptions, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  GetUserSubscriptions(argument: _scheduler_GetAllUserSubscriptions, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_SubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  GetUserSubscriptions(argument: _scheduler_GetAllUserSubscriptions, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  GetUserSubscriptions(argument: _scheduler_GetAllUserSubscriptions, callback: grpc.requestCallback<_scheduler_SubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  getUserSubscriptions(argument: _scheduler_GetAllUserSubscriptions, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  getUserSubscriptions(argument: _scheduler_GetAllUserSubscriptions, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_SubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  getUserSubscriptions(argument: _scheduler_GetAllUserSubscriptions, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  getUserSubscriptions(argument: _scheduler_GetAllUserSubscriptions, callback: grpc.requestCallback<_scheduler_SubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateUserSubscription(argument: _scheduler_CreateUserSubscription, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  UpdateUserSubscription(argument: _scheduler_CreateUserSubscription, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  UpdateUserSubscription(argument: _scheduler_CreateUserSubscription, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  UpdateUserSubscription(argument: _scheduler_CreateUserSubscription, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  updateUserSubscription(argument: _scheduler_CreateUserSubscription, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  updateUserSubscription(argument: _scheduler_CreateUserSubscription, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  updateUserSubscription(argument: _scheduler_CreateUserSubscription, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  updateUserSubscription(argument: _scheduler_CreateUserSubscription, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  
}

export interface UserSubscriptionServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateUserSubscription: grpc.handleUnaryCall<_scheduler_CreateUserSubscription__Output, _scheduler_SubscriptionMessage>;
  
  DeleteUserSubscription: grpc.handleUnaryCall<_scheduler_DeleteUserSubscription__Output, _scheduler_SubscriptionMessage>;
  
  GetUserSubscription: grpc.handleUnaryCall<_scheduler_GetOneUserSubscription__Output, _scheduler_SubscriptionResponse>;
  
  GetUserSubscriptions: grpc.handleUnaryCall<_scheduler_GetAllUserSubscriptions__Output, _scheduler_SubscriptionsResponse>;
  
  UpdateUserSubscription: grpc.handleUnaryCall<_scheduler_CreateUserSubscription__Output, _scheduler_SubscriptionMessage>;
  
}

export interface UserSubscriptionServiceDefinition extends grpc.ServiceDefinition {
  CreateUserSubscription: MethodDefinition<_scheduler_CreateUserSubscription, _scheduler_SubscriptionMessage, _scheduler_CreateUserSubscription__Output, _scheduler_SubscriptionMessage__Output>
  DeleteUserSubscription: MethodDefinition<_scheduler_DeleteUserSubscription, _scheduler_SubscriptionMessage, _scheduler_DeleteUserSubscription__Output, _scheduler_SubscriptionMessage__Output>
  GetUserSubscription: MethodDefinition<_scheduler_GetOneUserSubscription, _scheduler_SubscriptionResponse, _scheduler_GetOneUserSubscription__Output, _scheduler_SubscriptionResponse__Output>
  GetUserSubscriptions: MethodDefinition<_scheduler_GetAllUserSubscriptions, _scheduler_SubscriptionsResponse, _scheduler_GetAllUserSubscriptions__Output, _scheduler_SubscriptionsResponse__Output>
  UpdateUserSubscription: MethodDefinition<_scheduler_CreateUserSubscription, _scheduler_SubscriptionMessage, _scheduler_CreateUserSubscription__Output, _scheduler_SubscriptionMessage__Output>
}
