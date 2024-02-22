// Original file: src/protos/services.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateQuestion as _questionnaire_CreateQuestion, CreateQuestion__Output as _questionnaire_CreateQuestion__Output } from '../questionnaire/CreateQuestion';
import type { DeleteQuestion as _questionnaire_DeleteQuestion, DeleteQuestion__Output as _questionnaire_DeleteQuestion__Output } from '../questionnaire/DeleteQuestion';
import type { GenericResponse as _questionnaire_GenericResponse, GenericResponse__Output as _questionnaire_GenericResponse__Output } from '../questionnaire/GenericResponse';
import type { GetAllQuestions as _questionnaire_GetAllQuestions, GetAllQuestions__Output as _questionnaire_GetAllQuestions__Output } from '../questionnaire/GetAllQuestions';
import type { GetOneQuestion as _questionnaire_GetOneQuestion, GetOneQuestion__Output as _questionnaire_GetOneQuestion__Output } from '../questionnaire/GetOneQuestion';
import type { QuestionResponse as _questionnaire_QuestionResponse, QuestionResponse__Output as _questionnaire_QuestionResponse__Output } from '../questionnaire/QuestionResponse';
import type { QuestionsResponse as _questionnaire_QuestionsResponse, QuestionsResponse__Output as _questionnaire_QuestionsResponse__Output } from '../questionnaire/QuestionsResponse';
import type { UpdateQuestion as _questionnaire_UpdateQuestion, UpdateQuestion__Output as _questionnaire_UpdateQuestion__Output } from '../questionnaire/UpdateQuestion';

export interface QuestionnaireServiceClient extends grpc.Client {
  CreateQuestionnaire(argument: _questionnaire_CreateQuestion, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  CreateQuestionnaire(argument: _questionnaire_CreateQuestion, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  CreateQuestionnaire(argument: _questionnaire_CreateQuestion, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  CreateQuestionnaire(argument: _questionnaire_CreateQuestion, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  createQuestionnaire(argument: _questionnaire_CreateQuestion, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  createQuestionnaire(argument: _questionnaire_CreateQuestion, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  createQuestionnaire(argument: _questionnaire_CreateQuestion, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  createQuestionnaire(argument: _questionnaire_CreateQuestion, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteQuestionnaire(argument: _questionnaire_DeleteQuestion, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  DeleteQuestionnaire(argument: _questionnaire_DeleteQuestion, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  DeleteQuestionnaire(argument: _questionnaire_DeleteQuestion, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  DeleteQuestionnaire(argument: _questionnaire_DeleteQuestion, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  deleteQuestionnaire(argument: _questionnaire_DeleteQuestion, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  deleteQuestionnaire(argument: _questionnaire_DeleteQuestion, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  deleteQuestionnaire(argument: _questionnaire_DeleteQuestion, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  deleteQuestionnaire(argument: _questionnaire_DeleteQuestion, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  
  GetQuestionnaire(argument: _questionnaire_GetOneQuestion, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionResponse__Output>): grpc.ClientUnaryCall;
  GetQuestionnaire(argument: _questionnaire_GetOneQuestion, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_QuestionResponse__Output>): grpc.ClientUnaryCall;
  GetQuestionnaire(argument: _questionnaire_GetOneQuestion, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionResponse__Output>): grpc.ClientUnaryCall;
  GetQuestionnaire(argument: _questionnaire_GetOneQuestion, callback: grpc.requestCallback<_questionnaire_QuestionResponse__Output>): grpc.ClientUnaryCall;
  getQuestionnaire(argument: _questionnaire_GetOneQuestion, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionResponse__Output>): grpc.ClientUnaryCall;
  getQuestionnaire(argument: _questionnaire_GetOneQuestion, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_QuestionResponse__Output>): grpc.ClientUnaryCall;
  getQuestionnaire(argument: _questionnaire_GetOneQuestion, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionResponse__Output>): grpc.ClientUnaryCall;
  getQuestionnaire(argument: _questionnaire_GetOneQuestion, callback: grpc.requestCallback<_questionnaire_QuestionResponse__Output>): grpc.ClientUnaryCall;
  
  GetQuestionnaires(argument: _questionnaire_GetAllQuestions, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionsResponse__Output>): grpc.ClientUnaryCall;
  GetQuestionnaires(argument: _questionnaire_GetAllQuestions, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_QuestionsResponse__Output>): grpc.ClientUnaryCall;
  GetQuestionnaires(argument: _questionnaire_GetAllQuestions, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionsResponse__Output>): grpc.ClientUnaryCall;
  GetQuestionnaires(argument: _questionnaire_GetAllQuestions, callback: grpc.requestCallback<_questionnaire_QuestionsResponse__Output>): grpc.ClientUnaryCall;
  getQuestionnaires(argument: _questionnaire_GetAllQuestions, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionsResponse__Output>): grpc.ClientUnaryCall;
  getQuestionnaires(argument: _questionnaire_GetAllQuestions, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_QuestionsResponse__Output>): grpc.ClientUnaryCall;
  getQuestionnaires(argument: _questionnaire_GetAllQuestions, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionsResponse__Output>): grpc.ClientUnaryCall;
  getQuestionnaires(argument: _questionnaire_GetAllQuestions, callback: grpc.requestCallback<_questionnaire_QuestionsResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateQuestionnaire(argument: _questionnaire_UpdateQuestion, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  UpdateQuestionnaire(argument: _questionnaire_UpdateQuestion, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  UpdateQuestionnaire(argument: _questionnaire_UpdateQuestion, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  UpdateQuestionnaire(argument: _questionnaire_UpdateQuestion, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  updateQuestionnaire(argument: _questionnaire_UpdateQuestion, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  updateQuestionnaire(argument: _questionnaire_UpdateQuestion, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  updateQuestionnaire(argument: _questionnaire_UpdateQuestion, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  updateQuestionnaire(argument: _questionnaire_UpdateQuestion, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface QuestionnaireServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateQuestionnaire: grpc.handleUnaryCall<_questionnaire_CreateQuestion__Output, _questionnaire_GenericResponse>;
  
  DeleteQuestionnaire: grpc.handleUnaryCall<_questionnaire_DeleteQuestion__Output, _questionnaire_GenericResponse>;
  
  GetQuestionnaire: grpc.handleUnaryCall<_questionnaire_GetOneQuestion__Output, _questionnaire_QuestionResponse>;
  
  GetQuestionnaires: grpc.handleUnaryCall<_questionnaire_GetAllQuestions__Output, _questionnaire_QuestionsResponse>;
  
  UpdateQuestionnaire: grpc.handleUnaryCall<_questionnaire_UpdateQuestion__Output, _questionnaire_GenericResponse>;
  
}

export interface QuestionnaireServiceDefinition extends grpc.ServiceDefinition {
  CreateQuestionnaire: MethodDefinition<_questionnaire_CreateQuestion, _questionnaire_GenericResponse, _questionnaire_CreateQuestion__Output, _questionnaire_GenericResponse__Output>
  DeleteQuestionnaire: MethodDefinition<_questionnaire_DeleteQuestion, _questionnaire_GenericResponse, _questionnaire_DeleteQuestion__Output, _questionnaire_GenericResponse__Output>
  GetQuestionnaire: MethodDefinition<_questionnaire_GetOneQuestion, _questionnaire_QuestionResponse, _questionnaire_GetOneQuestion__Output, _questionnaire_QuestionResponse__Output>
  GetQuestionnaires: MethodDefinition<_questionnaire_GetAllQuestions, _questionnaire_QuestionsResponse, _questionnaire_GetAllQuestions__Output, _questionnaire_QuestionsResponse__Output>
  UpdateQuestionnaire: MethodDefinition<_questionnaire_UpdateQuestion, _questionnaire_GenericResponse, _questionnaire_UpdateQuestion__Output, _questionnaire_GenericResponse__Output>
}
