// Original file: src/protos/services.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateQuestion as _questionnaire_CreateQuestion, CreateQuestion__Output as _questionnaire_CreateQuestion__Output } from '../questionnaire/CreateQuestion';
import type { DeleteQuestion as _questionnaire_DeleteQuestion, DeleteQuestion__Output as _questionnaire_DeleteQuestion__Output } from '../questionnaire/DeleteQuestion';
import type { GetAllQuestions as _questionnaire_GetAllQuestions, GetAllQuestions__Output as _questionnaire_GetAllQuestions__Output } from '../questionnaire/GetAllQuestions';
import type { GetOneQuestion as _questionnaire_GetOneQuestion, GetOneQuestion__Output as _questionnaire_GetOneQuestion__Output } from '../questionnaire/GetOneQuestion';
import type { QuestionMessage as _questionnaire_QuestionMessage, QuestionMessage__Output as _questionnaire_QuestionMessage__Output } from '../questionnaire/QuestionMessage';
import type { QuestionResponse as _questionnaire_QuestionResponse, QuestionResponse__Output as _questionnaire_QuestionResponse__Output } from '../questionnaire/QuestionResponse';
import type { QuestionsResponse as _questionnaire_QuestionsResponse, QuestionsResponse__Output as _questionnaire_QuestionsResponse__Output } from '../questionnaire/QuestionsResponse';
import type { UpdateQuestion as _questionnaire_UpdateQuestion, UpdateQuestion__Output as _questionnaire_UpdateQuestion__Output } from '../questionnaire/UpdateQuestion';

export interface QuestionServiceClient extends grpc.Client {
  CreateQuestion(argument: _questionnaire_CreateQuestion, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionMessage__Output>): grpc.ClientUnaryCall;
  CreateQuestion(argument: _questionnaire_CreateQuestion, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_QuestionMessage__Output>): grpc.ClientUnaryCall;
  CreateQuestion(argument: _questionnaire_CreateQuestion, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionMessage__Output>): grpc.ClientUnaryCall;
  CreateQuestion(argument: _questionnaire_CreateQuestion, callback: grpc.requestCallback<_questionnaire_QuestionMessage__Output>): grpc.ClientUnaryCall;
  createQuestion(argument: _questionnaire_CreateQuestion, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionMessage__Output>): grpc.ClientUnaryCall;
  createQuestion(argument: _questionnaire_CreateQuestion, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_QuestionMessage__Output>): grpc.ClientUnaryCall;
  createQuestion(argument: _questionnaire_CreateQuestion, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionMessage__Output>): grpc.ClientUnaryCall;
  createQuestion(argument: _questionnaire_CreateQuestion, callback: grpc.requestCallback<_questionnaire_QuestionMessage__Output>): grpc.ClientUnaryCall;
  
  DeleteQuestion(argument: _questionnaire_DeleteQuestion, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionMessage__Output>): grpc.ClientUnaryCall;
  DeleteQuestion(argument: _questionnaire_DeleteQuestion, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_QuestionMessage__Output>): grpc.ClientUnaryCall;
  DeleteQuestion(argument: _questionnaire_DeleteQuestion, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionMessage__Output>): grpc.ClientUnaryCall;
  DeleteQuestion(argument: _questionnaire_DeleteQuestion, callback: grpc.requestCallback<_questionnaire_QuestionMessage__Output>): grpc.ClientUnaryCall;
  deleteQuestion(argument: _questionnaire_DeleteQuestion, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionMessage__Output>): grpc.ClientUnaryCall;
  deleteQuestion(argument: _questionnaire_DeleteQuestion, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_QuestionMessage__Output>): grpc.ClientUnaryCall;
  deleteQuestion(argument: _questionnaire_DeleteQuestion, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionMessage__Output>): grpc.ClientUnaryCall;
  deleteQuestion(argument: _questionnaire_DeleteQuestion, callback: grpc.requestCallback<_questionnaire_QuestionMessage__Output>): grpc.ClientUnaryCall;
  
  GetQuestion(argument: _questionnaire_GetOneQuestion, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionResponse__Output>): grpc.ClientUnaryCall;
  GetQuestion(argument: _questionnaire_GetOneQuestion, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_QuestionResponse__Output>): grpc.ClientUnaryCall;
  GetQuestion(argument: _questionnaire_GetOneQuestion, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionResponse__Output>): grpc.ClientUnaryCall;
  GetQuestion(argument: _questionnaire_GetOneQuestion, callback: grpc.requestCallback<_questionnaire_QuestionResponse__Output>): grpc.ClientUnaryCall;
  getQuestion(argument: _questionnaire_GetOneQuestion, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionResponse__Output>): grpc.ClientUnaryCall;
  getQuestion(argument: _questionnaire_GetOneQuestion, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_QuestionResponse__Output>): grpc.ClientUnaryCall;
  getQuestion(argument: _questionnaire_GetOneQuestion, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionResponse__Output>): grpc.ClientUnaryCall;
  getQuestion(argument: _questionnaire_GetOneQuestion, callback: grpc.requestCallback<_questionnaire_QuestionResponse__Output>): grpc.ClientUnaryCall;
  
  GetQuestions(argument: _questionnaire_GetAllQuestions, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionsResponse__Output>): grpc.ClientUnaryCall;
  GetQuestions(argument: _questionnaire_GetAllQuestions, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_QuestionsResponse__Output>): grpc.ClientUnaryCall;
  GetQuestions(argument: _questionnaire_GetAllQuestions, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionsResponse__Output>): grpc.ClientUnaryCall;
  GetQuestions(argument: _questionnaire_GetAllQuestions, callback: grpc.requestCallback<_questionnaire_QuestionsResponse__Output>): grpc.ClientUnaryCall;
  getQuestions(argument: _questionnaire_GetAllQuestions, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionsResponse__Output>): grpc.ClientUnaryCall;
  getQuestions(argument: _questionnaire_GetAllQuestions, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_QuestionsResponse__Output>): grpc.ClientUnaryCall;
  getQuestions(argument: _questionnaire_GetAllQuestions, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionsResponse__Output>): grpc.ClientUnaryCall;
  getQuestions(argument: _questionnaire_GetAllQuestions, callback: grpc.requestCallback<_questionnaire_QuestionsResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateQuestion(argument: _questionnaire_UpdateQuestion, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionMessage__Output>): grpc.ClientUnaryCall;
  UpdateQuestion(argument: _questionnaire_UpdateQuestion, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_QuestionMessage__Output>): grpc.ClientUnaryCall;
  UpdateQuestion(argument: _questionnaire_UpdateQuestion, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionMessage__Output>): grpc.ClientUnaryCall;
  UpdateQuestion(argument: _questionnaire_UpdateQuestion, callback: grpc.requestCallback<_questionnaire_QuestionMessage__Output>): grpc.ClientUnaryCall;
  updateQuestion(argument: _questionnaire_UpdateQuestion, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionMessage__Output>): grpc.ClientUnaryCall;
  updateQuestion(argument: _questionnaire_UpdateQuestion, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_QuestionMessage__Output>): grpc.ClientUnaryCall;
  updateQuestion(argument: _questionnaire_UpdateQuestion, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionMessage__Output>): grpc.ClientUnaryCall;
  updateQuestion(argument: _questionnaire_UpdateQuestion, callback: grpc.requestCallback<_questionnaire_QuestionMessage__Output>): grpc.ClientUnaryCall;
  
}

export interface QuestionServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateQuestion: grpc.handleUnaryCall<_questionnaire_CreateQuestion__Output, _questionnaire_QuestionMessage>;
  
  DeleteQuestion: grpc.handleUnaryCall<_questionnaire_DeleteQuestion__Output, _questionnaire_QuestionMessage>;
  
  GetQuestion: grpc.handleUnaryCall<_questionnaire_GetOneQuestion__Output, _questionnaire_QuestionResponse>;
  
  GetQuestions: grpc.handleUnaryCall<_questionnaire_GetAllQuestions__Output, _questionnaire_QuestionsResponse>;
  
  UpdateQuestion: grpc.handleUnaryCall<_questionnaire_UpdateQuestion__Output, _questionnaire_QuestionMessage>;
  
}

export interface QuestionServiceDefinition extends grpc.ServiceDefinition {
  CreateQuestion: MethodDefinition<_questionnaire_CreateQuestion, _questionnaire_QuestionMessage, _questionnaire_CreateQuestion__Output, _questionnaire_QuestionMessage__Output>
  DeleteQuestion: MethodDefinition<_questionnaire_DeleteQuestion, _questionnaire_QuestionMessage, _questionnaire_DeleteQuestion__Output, _questionnaire_QuestionMessage__Output>
  GetQuestion: MethodDefinition<_questionnaire_GetOneQuestion, _questionnaire_QuestionResponse, _questionnaire_GetOneQuestion__Output, _questionnaire_QuestionResponse__Output>
  GetQuestions: MethodDefinition<_questionnaire_GetAllQuestions, _questionnaire_QuestionsResponse, _questionnaire_GetAllQuestions__Output, _questionnaire_QuestionsResponse__Output>
  UpdateQuestion: MethodDefinition<_questionnaire_UpdateQuestion, _questionnaire_QuestionMessage, _questionnaire_UpdateQuestion__Output, _questionnaire_QuestionMessage__Output>
}
