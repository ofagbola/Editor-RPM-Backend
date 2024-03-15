// Original file: src/protos/services.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AnswerMessage as _questionnaire_AnswerMessage, AnswerMessage__Output as _questionnaire_AnswerMessage__Output } from '../questionnaire/AnswerMessage';
import type { AnswerResponse as _questionnaire_AnswerResponse, AnswerResponse__Output as _questionnaire_AnswerResponse__Output } from '../questionnaire/AnswerResponse';
import type { AnswersResponse as _questionnaire_AnswersResponse, AnswersResponse__Output as _questionnaire_AnswersResponse__Output } from '../questionnaire/AnswersResponse';
import type { CreateAnswer as _questionnaire_CreateAnswer, CreateAnswer__Output as _questionnaire_CreateAnswer__Output } from '../questionnaire/CreateAnswer';
import type { DeleteAnswer as _questionnaire_DeleteAnswer, DeleteAnswer__Output as _questionnaire_DeleteAnswer__Output } from '../questionnaire/DeleteAnswer';
import type { GetAllAnswers as _questionnaire_GetAllAnswers, GetAllAnswers__Output as _questionnaire_GetAllAnswers__Output } from '../questionnaire/GetAllAnswers';
import type { GetOneAnswer as _questionnaire_GetOneAnswer, GetOneAnswer__Output as _questionnaire_GetOneAnswer__Output } from '../questionnaire/GetOneAnswer';
import type { UpdateAnswer as _questionnaire_UpdateAnswer, UpdateAnswer__Output as _questionnaire_UpdateAnswer__Output } from '../questionnaire/UpdateAnswer';

export interface AnswerServiceClient extends grpc.Client {
  CreateAnswer(argument: _questionnaire_CreateAnswer, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_AnswerMessage__Output>): grpc.ClientUnaryCall;
  CreateAnswer(argument: _questionnaire_CreateAnswer, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_AnswerMessage__Output>): grpc.ClientUnaryCall;
  CreateAnswer(argument: _questionnaire_CreateAnswer, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_AnswerMessage__Output>): grpc.ClientUnaryCall;
  CreateAnswer(argument: _questionnaire_CreateAnswer, callback: grpc.requestCallback<_questionnaire_AnswerMessage__Output>): grpc.ClientUnaryCall;
  createAnswer(argument: _questionnaire_CreateAnswer, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_AnswerMessage__Output>): grpc.ClientUnaryCall;
  createAnswer(argument: _questionnaire_CreateAnswer, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_AnswerMessage__Output>): grpc.ClientUnaryCall;
  createAnswer(argument: _questionnaire_CreateAnswer, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_AnswerMessage__Output>): grpc.ClientUnaryCall;
  createAnswer(argument: _questionnaire_CreateAnswer, callback: grpc.requestCallback<_questionnaire_AnswerMessage__Output>): grpc.ClientUnaryCall;
  
  DeleteAnswer(argument: _questionnaire_DeleteAnswer, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_AnswerMessage__Output>): grpc.ClientUnaryCall;
  DeleteAnswer(argument: _questionnaire_DeleteAnswer, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_AnswerMessage__Output>): grpc.ClientUnaryCall;
  DeleteAnswer(argument: _questionnaire_DeleteAnswer, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_AnswerMessage__Output>): grpc.ClientUnaryCall;
  DeleteAnswer(argument: _questionnaire_DeleteAnswer, callback: grpc.requestCallback<_questionnaire_AnswerMessage__Output>): grpc.ClientUnaryCall;
  deleteAnswer(argument: _questionnaire_DeleteAnswer, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_AnswerMessage__Output>): grpc.ClientUnaryCall;
  deleteAnswer(argument: _questionnaire_DeleteAnswer, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_AnswerMessage__Output>): grpc.ClientUnaryCall;
  deleteAnswer(argument: _questionnaire_DeleteAnswer, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_AnswerMessage__Output>): grpc.ClientUnaryCall;
  deleteAnswer(argument: _questionnaire_DeleteAnswer, callback: grpc.requestCallback<_questionnaire_AnswerMessage__Output>): grpc.ClientUnaryCall;
  
  GetAnswer(argument: _questionnaire_GetOneAnswer, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_AnswerResponse__Output>): grpc.ClientUnaryCall;
  GetAnswer(argument: _questionnaire_GetOneAnswer, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_AnswerResponse__Output>): grpc.ClientUnaryCall;
  GetAnswer(argument: _questionnaire_GetOneAnswer, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_AnswerResponse__Output>): grpc.ClientUnaryCall;
  GetAnswer(argument: _questionnaire_GetOneAnswer, callback: grpc.requestCallback<_questionnaire_AnswerResponse__Output>): grpc.ClientUnaryCall;
  getAnswer(argument: _questionnaire_GetOneAnswer, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_AnswerResponse__Output>): grpc.ClientUnaryCall;
  getAnswer(argument: _questionnaire_GetOneAnswer, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_AnswerResponse__Output>): grpc.ClientUnaryCall;
  getAnswer(argument: _questionnaire_GetOneAnswer, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_AnswerResponse__Output>): grpc.ClientUnaryCall;
  getAnswer(argument: _questionnaire_GetOneAnswer, callback: grpc.requestCallback<_questionnaire_AnswerResponse__Output>): grpc.ClientUnaryCall;
  
  GetAnswers(argument: _questionnaire_GetAllAnswers, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_AnswersResponse__Output>): grpc.ClientUnaryCall;
  GetAnswers(argument: _questionnaire_GetAllAnswers, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_AnswersResponse__Output>): grpc.ClientUnaryCall;
  GetAnswers(argument: _questionnaire_GetAllAnswers, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_AnswersResponse__Output>): grpc.ClientUnaryCall;
  GetAnswers(argument: _questionnaire_GetAllAnswers, callback: grpc.requestCallback<_questionnaire_AnswersResponse__Output>): grpc.ClientUnaryCall;
  getAnswers(argument: _questionnaire_GetAllAnswers, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_AnswersResponse__Output>): grpc.ClientUnaryCall;
  getAnswers(argument: _questionnaire_GetAllAnswers, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_AnswersResponse__Output>): grpc.ClientUnaryCall;
  getAnswers(argument: _questionnaire_GetAllAnswers, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_AnswersResponse__Output>): grpc.ClientUnaryCall;
  getAnswers(argument: _questionnaire_GetAllAnswers, callback: grpc.requestCallback<_questionnaire_AnswersResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateAnswer(argument: _questionnaire_UpdateAnswer, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_AnswerMessage__Output>): grpc.ClientUnaryCall;
  UpdateAnswer(argument: _questionnaire_UpdateAnswer, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_AnswerMessage__Output>): grpc.ClientUnaryCall;
  UpdateAnswer(argument: _questionnaire_UpdateAnswer, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_AnswerMessage__Output>): grpc.ClientUnaryCall;
  UpdateAnswer(argument: _questionnaire_UpdateAnswer, callback: grpc.requestCallback<_questionnaire_AnswerMessage__Output>): grpc.ClientUnaryCall;
  updateAnswer(argument: _questionnaire_UpdateAnswer, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_AnswerMessage__Output>): grpc.ClientUnaryCall;
  updateAnswer(argument: _questionnaire_UpdateAnswer, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_AnswerMessage__Output>): grpc.ClientUnaryCall;
  updateAnswer(argument: _questionnaire_UpdateAnswer, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_AnswerMessage__Output>): grpc.ClientUnaryCall;
  updateAnswer(argument: _questionnaire_UpdateAnswer, callback: grpc.requestCallback<_questionnaire_AnswerMessage__Output>): grpc.ClientUnaryCall;
  
}

export interface AnswerServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateAnswer: grpc.handleUnaryCall<_questionnaire_CreateAnswer__Output, _questionnaire_AnswerMessage>;
  
  DeleteAnswer: grpc.handleUnaryCall<_questionnaire_DeleteAnswer__Output, _questionnaire_AnswerMessage>;
  
  GetAnswer: grpc.handleUnaryCall<_questionnaire_GetOneAnswer__Output, _questionnaire_AnswerResponse>;
  
  GetAnswers: grpc.handleUnaryCall<_questionnaire_GetAllAnswers__Output, _questionnaire_AnswersResponse>;
  
  UpdateAnswer: grpc.handleUnaryCall<_questionnaire_UpdateAnswer__Output, _questionnaire_AnswerMessage>;
  
}

export interface AnswerServiceDefinition extends grpc.ServiceDefinition {
  CreateAnswer: MethodDefinition<_questionnaire_CreateAnswer, _questionnaire_AnswerMessage, _questionnaire_CreateAnswer__Output, _questionnaire_AnswerMessage__Output>
  DeleteAnswer: MethodDefinition<_questionnaire_DeleteAnswer, _questionnaire_AnswerMessage, _questionnaire_DeleteAnswer__Output, _questionnaire_AnswerMessage__Output>
  GetAnswer: MethodDefinition<_questionnaire_GetOneAnswer, _questionnaire_AnswerResponse, _questionnaire_GetOneAnswer__Output, _questionnaire_AnswerResponse__Output>
  GetAnswers: MethodDefinition<_questionnaire_GetAllAnswers, _questionnaire_AnswersResponse, _questionnaire_GetAllAnswers__Output, _questionnaire_AnswersResponse__Output>
  UpdateAnswer: MethodDefinition<_questionnaire_UpdateAnswer, _questionnaire_AnswerMessage, _questionnaire_UpdateAnswer__Output, _questionnaire_AnswerMessage__Output>
}
