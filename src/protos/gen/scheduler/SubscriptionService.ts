// Original file: src/protos/services.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateSubscription as _scheduler_CreateSubscription, CreateSubscription__Output as _scheduler_CreateSubscription__Output } from '../scheduler/CreateSubscription';
import type { DeleteSubscription as _scheduler_DeleteSubscription, DeleteSubscription__Output as _scheduler_DeleteSubscription__Output } from '../scheduler/DeleteSubscription';
import type { GetAllSubscriptions as _scheduler_GetAllSubscriptions, GetAllSubscriptions__Output as _scheduler_GetAllSubscriptions__Output } from '../scheduler/GetAllSubscriptions';
import type { GetOneSubscription as _scheduler_GetOneSubscription, GetOneSubscription__Output as _scheduler_GetOneSubscription__Output } from '../scheduler/GetOneSubscription';
import type { SubscriptionMessage as _scheduler_SubscriptionMessage, SubscriptionMessage__Output as _scheduler_SubscriptionMessage__Output } from '../scheduler/SubscriptionMessage';
import type { SubscriptionResponse as _scheduler_SubscriptionResponse, SubscriptionResponse__Output as _scheduler_SubscriptionResponse__Output } from '../scheduler/SubscriptionResponse';
import type { SubscriptionsResponse as _scheduler_SubscriptionsResponse, SubscriptionsResponse__Output as _scheduler_SubscriptionsResponse__Output } from '../scheduler/SubscriptionsResponse';
import type { UpdateSubscription as _scheduler_UpdateSubscription, UpdateSubscription__Output as _scheduler_UpdateSubscription__Output } from '../scheduler/UpdateSubscription';

export interface SubscriptionServiceClient extends grpc.Client {
  CreateSubscription(argument: _scheduler_CreateSubscription, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  CreateSubscription(argument: _scheduler_CreateSubscription, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  CreateSubscription(argument: _scheduler_CreateSubscription, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  CreateSubscription(argument: _scheduler_CreateSubscription, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  createSubscription(argument: _scheduler_CreateSubscription, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  createSubscription(argument: _scheduler_CreateSubscription, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  createSubscription(argument: _scheduler_CreateSubscription, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  createSubscription(argument: _scheduler_CreateSubscription, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  
  DeletSubscription(argument: _scheduler_DeleteSubscription, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  DeletSubscription(argument: _scheduler_DeleteSubscription, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  DeletSubscription(argument: _scheduler_DeleteSubscription, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  DeletSubscription(argument: _scheduler_DeleteSubscription, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  deletSubscription(argument: _scheduler_DeleteSubscription, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  deletSubscription(argument: _scheduler_DeleteSubscription, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  deletSubscription(argument: _scheduler_DeleteSubscription, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  deletSubscription(argument: _scheduler_DeleteSubscription, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  
  GetSubscription(argument: _scheduler_GetOneSubscription, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionResponse__Output>): grpc.ClientUnaryCall;
  GetSubscription(argument: _scheduler_GetOneSubscription, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_SubscriptionResponse__Output>): grpc.ClientUnaryCall;
  GetSubscription(argument: _scheduler_GetOneSubscription, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionResponse__Output>): grpc.ClientUnaryCall;
  GetSubscription(argument: _scheduler_GetOneSubscription, callback: grpc.requestCallback<_scheduler_SubscriptionResponse__Output>): grpc.ClientUnaryCall;
  getSubscription(argument: _scheduler_GetOneSubscription, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionResponse__Output>): grpc.ClientUnaryCall;
  getSubscription(argument: _scheduler_GetOneSubscription, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_SubscriptionResponse__Output>): grpc.ClientUnaryCall;
  getSubscription(argument: _scheduler_GetOneSubscription, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionResponse__Output>): grpc.ClientUnaryCall;
  getSubscription(argument: _scheduler_GetOneSubscription, callback: grpc.requestCallback<_scheduler_SubscriptionResponse__Output>): grpc.ClientUnaryCall;
  
  GetSubscriptions(argument: _scheduler_GetAllSubscriptions, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  GetSubscriptions(argument: _scheduler_GetAllSubscriptions, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_SubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  GetSubscriptions(argument: _scheduler_GetAllSubscriptions, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  GetSubscriptions(argument: _scheduler_GetAllSubscriptions, callback: grpc.requestCallback<_scheduler_SubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  getSubscriptions(argument: _scheduler_GetAllSubscriptions, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  getSubscriptions(argument: _scheduler_GetAllSubscriptions, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_SubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  getSubscriptions(argument: _scheduler_GetAllSubscriptions, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  getSubscriptions(argument: _scheduler_GetAllSubscriptions, callback: grpc.requestCallback<_scheduler_SubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateSubscription(argument: _scheduler_UpdateSubscription, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  UpdateSubscription(argument: _scheduler_UpdateSubscription, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  UpdateSubscription(argument: _scheduler_UpdateSubscription, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  UpdateSubscription(argument: _scheduler_UpdateSubscription, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  updateSubscription(argument: _scheduler_UpdateSubscription, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  updateSubscription(argument: _scheduler_UpdateSubscription, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  updateSubscription(argument: _scheduler_UpdateSubscription, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  updateSubscription(argument: _scheduler_UpdateSubscription, callback: grpc.requestCallback<_scheduler_SubscriptionMessage__Output>): grpc.ClientUnaryCall;
  
}

export interface SubscriptionServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateSubscription: grpc.handleUnaryCall<_scheduler_CreateSubscription__Output, _scheduler_SubscriptionMessage>;
  
  DeletSubscription: grpc.handleUnaryCall<_scheduler_DeleteSubscription__Output, _scheduler_SubscriptionMessage>;
  
  GetSubscription: grpc.handleUnaryCall<_scheduler_GetOneSubscription__Output, _scheduler_SubscriptionResponse>;
  
  GetSubscriptions: grpc.handleUnaryCall<_scheduler_GetAllSubscriptions__Output, _scheduler_SubscriptionsResponse>;
  
  UpdateSubscription: grpc.handleUnaryCall<_scheduler_UpdateSubscription__Output, _scheduler_SubscriptionMessage>;
  
}

export interface SubscriptionServiceDefinition extends grpc.ServiceDefinition {
  CreateSubscription: MethodDefinition<_scheduler_CreateSubscription, _scheduler_SubscriptionMessage, _scheduler_CreateSubscription__Output, _scheduler_SubscriptionMessage__Output>
  DeletSubscription: MethodDefinition<_scheduler_DeleteSubscription, _scheduler_SubscriptionMessage, _scheduler_DeleteSubscription__Output, _scheduler_SubscriptionMessage__Output>
  GetSubscription: MethodDefinition<_scheduler_GetOneSubscription, _scheduler_SubscriptionResponse, _scheduler_GetOneSubscription__Output, _scheduler_SubscriptionResponse__Output>
  GetSubscriptions: MethodDefinition<_scheduler_GetAllSubscriptions, _scheduler_SubscriptionsResponse, _scheduler_GetAllSubscriptions__Output, _scheduler_SubscriptionsResponse__Output>
  UpdateSubscription: MethodDefinition<_scheduler_UpdateSubscription, _scheduler_SubscriptionMessage, _scheduler_UpdateSubscription__Output, _scheduler_SubscriptionMessage__Output>
}
