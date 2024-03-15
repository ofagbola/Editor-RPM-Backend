// Original file: src/protos/services.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateReview as _scheduler_CreateReview, CreateReview__Output as _scheduler_CreateReview__Output } from '../scheduler/CreateReview';
import type { DeleteReview as _scheduler_DeleteReview, DeleteReview__Output as _scheduler_DeleteReview__Output } from '../scheduler/DeleteReview';
import type { GetDoctorReviews as _scheduler_GetDoctorReviews, GetDoctorReviews__Output as _scheduler_GetDoctorReviews__Output } from '../scheduler/GetDoctorReviews';
import type { GetSessionReviews as _scheduler_GetSessionReviews, GetSessionReviews__Output as _scheduler_GetSessionReviews__Output } from '../scheduler/GetSessionReviews';
import type { ReviewMessage as _scheduler_ReviewMessage, ReviewMessage__Output as _scheduler_ReviewMessage__Output } from '../scheduler/ReviewMessage';
import type { ReviewsResponse as _scheduler_ReviewsResponse, ReviewsResponse__Output as _scheduler_ReviewsResponse__Output } from '../scheduler/ReviewsResponse';
import type { UpdateReview as _scheduler_UpdateReview, UpdateReview__Output as _scheduler_UpdateReview__Output } from '../scheduler/UpdateReview';

export interface ReviewServiceClient extends grpc.Client {
  CreateReview(argument: _scheduler_CreateReview, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ReviewMessage__Output>): grpc.ClientUnaryCall;
  CreateReview(argument: _scheduler_CreateReview, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_ReviewMessage__Output>): grpc.ClientUnaryCall;
  CreateReview(argument: _scheduler_CreateReview, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ReviewMessage__Output>): grpc.ClientUnaryCall;
  CreateReview(argument: _scheduler_CreateReview, callback: grpc.requestCallback<_scheduler_ReviewMessage__Output>): grpc.ClientUnaryCall;
  createReview(argument: _scheduler_CreateReview, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ReviewMessage__Output>): grpc.ClientUnaryCall;
  createReview(argument: _scheduler_CreateReview, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_ReviewMessage__Output>): grpc.ClientUnaryCall;
  createReview(argument: _scheduler_CreateReview, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ReviewMessage__Output>): grpc.ClientUnaryCall;
  createReview(argument: _scheduler_CreateReview, callback: grpc.requestCallback<_scheduler_ReviewMessage__Output>): grpc.ClientUnaryCall;
  
  DeleteReview(argument: _scheduler_DeleteReview, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ReviewMessage__Output>): grpc.ClientUnaryCall;
  DeleteReview(argument: _scheduler_DeleteReview, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_ReviewMessage__Output>): grpc.ClientUnaryCall;
  DeleteReview(argument: _scheduler_DeleteReview, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ReviewMessage__Output>): grpc.ClientUnaryCall;
  DeleteReview(argument: _scheduler_DeleteReview, callback: grpc.requestCallback<_scheduler_ReviewMessage__Output>): grpc.ClientUnaryCall;
  deleteReview(argument: _scheduler_DeleteReview, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ReviewMessage__Output>): grpc.ClientUnaryCall;
  deleteReview(argument: _scheduler_DeleteReview, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_ReviewMessage__Output>): grpc.ClientUnaryCall;
  deleteReview(argument: _scheduler_DeleteReview, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ReviewMessage__Output>): grpc.ClientUnaryCall;
  deleteReview(argument: _scheduler_DeleteReview, callback: grpc.requestCallback<_scheduler_ReviewMessage__Output>): grpc.ClientUnaryCall;
  
  GetDoctorReviews(argument: _scheduler_GetDoctorReviews, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ReviewsResponse__Output>): grpc.ClientUnaryCall;
  GetDoctorReviews(argument: _scheduler_GetDoctorReviews, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_ReviewsResponse__Output>): grpc.ClientUnaryCall;
  GetDoctorReviews(argument: _scheduler_GetDoctorReviews, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ReviewsResponse__Output>): grpc.ClientUnaryCall;
  GetDoctorReviews(argument: _scheduler_GetDoctorReviews, callback: grpc.requestCallback<_scheduler_ReviewsResponse__Output>): grpc.ClientUnaryCall;
  getDoctorReviews(argument: _scheduler_GetDoctorReviews, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ReviewsResponse__Output>): grpc.ClientUnaryCall;
  getDoctorReviews(argument: _scheduler_GetDoctorReviews, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_ReviewsResponse__Output>): grpc.ClientUnaryCall;
  getDoctorReviews(argument: _scheduler_GetDoctorReviews, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ReviewsResponse__Output>): grpc.ClientUnaryCall;
  getDoctorReviews(argument: _scheduler_GetDoctorReviews, callback: grpc.requestCallback<_scheduler_ReviewsResponse__Output>): grpc.ClientUnaryCall;
  
  GetSessionReviews(argument: _scheduler_GetSessionReviews, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ReviewsResponse__Output>): grpc.ClientUnaryCall;
  GetSessionReviews(argument: _scheduler_GetSessionReviews, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_ReviewsResponse__Output>): grpc.ClientUnaryCall;
  GetSessionReviews(argument: _scheduler_GetSessionReviews, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ReviewsResponse__Output>): grpc.ClientUnaryCall;
  GetSessionReviews(argument: _scheduler_GetSessionReviews, callback: grpc.requestCallback<_scheduler_ReviewsResponse__Output>): grpc.ClientUnaryCall;
  getSessionReviews(argument: _scheduler_GetSessionReviews, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ReviewsResponse__Output>): grpc.ClientUnaryCall;
  getSessionReviews(argument: _scheduler_GetSessionReviews, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_ReviewsResponse__Output>): grpc.ClientUnaryCall;
  getSessionReviews(argument: _scheduler_GetSessionReviews, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ReviewsResponse__Output>): grpc.ClientUnaryCall;
  getSessionReviews(argument: _scheduler_GetSessionReviews, callback: grpc.requestCallback<_scheduler_ReviewsResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateReview(argument: _scheduler_UpdateReview, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ReviewMessage__Output>): grpc.ClientUnaryCall;
  UpdateReview(argument: _scheduler_UpdateReview, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_ReviewMessage__Output>): grpc.ClientUnaryCall;
  UpdateReview(argument: _scheduler_UpdateReview, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ReviewMessage__Output>): grpc.ClientUnaryCall;
  UpdateReview(argument: _scheduler_UpdateReview, callback: grpc.requestCallback<_scheduler_ReviewMessage__Output>): grpc.ClientUnaryCall;
  updateReview(argument: _scheduler_UpdateReview, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ReviewMessage__Output>): grpc.ClientUnaryCall;
  updateReview(argument: _scheduler_UpdateReview, metadata: grpc.Metadata, callback: grpc.requestCallback<_scheduler_ReviewMessage__Output>): grpc.ClientUnaryCall;
  updateReview(argument: _scheduler_UpdateReview, options: grpc.CallOptions, callback: grpc.requestCallback<_scheduler_ReviewMessage__Output>): grpc.ClientUnaryCall;
  updateReview(argument: _scheduler_UpdateReview, callback: grpc.requestCallback<_scheduler_ReviewMessage__Output>): grpc.ClientUnaryCall;
  
}

export interface ReviewServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateReview: grpc.handleUnaryCall<_scheduler_CreateReview__Output, _scheduler_ReviewMessage>;
  
  DeleteReview: grpc.handleUnaryCall<_scheduler_DeleteReview__Output, _scheduler_ReviewMessage>;
  
  GetDoctorReviews: grpc.handleUnaryCall<_scheduler_GetDoctorReviews__Output, _scheduler_ReviewsResponse>;
  
  GetSessionReviews: grpc.handleUnaryCall<_scheduler_GetSessionReviews__Output, _scheduler_ReviewsResponse>;
  
  UpdateReview: grpc.handleUnaryCall<_scheduler_UpdateReview__Output, _scheduler_ReviewMessage>;
  
}

export interface ReviewServiceDefinition extends grpc.ServiceDefinition {
  CreateReview: MethodDefinition<_scheduler_CreateReview, _scheduler_ReviewMessage, _scheduler_CreateReview__Output, _scheduler_ReviewMessage__Output>
  DeleteReview: MethodDefinition<_scheduler_DeleteReview, _scheduler_ReviewMessage, _scheduler_DeleteReview__Output, _scheduler_ReviewMessage__Output>
  GetDoctorReviews: MethodDefinition<_scheduler_GetDoctorReviews, _scheduler_ReviewsResponse, _scheduler_GetDoctorReviews__Output, _scheduler_ReviewsResponse__Output>
  GetSessionReviews: MethodDefinition<_scheduler_GetSessionReviews, _scheduler_ReviewsResponse, _scheduler_GetSessionReviews__Output, _scheduler_ReviewsResponse__Output>
  UpdateReview: MethodDefinition<_scheduler_UpdateReview, _scheduler_ReviewMessage, _scheduler_UpdateReview__Output, _scheduler_ReviewMessage__Output>
}
