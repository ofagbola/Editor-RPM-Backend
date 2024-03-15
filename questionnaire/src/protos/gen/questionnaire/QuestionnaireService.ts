// Original file: src/protos/services.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateQuestionnaire as _questionnaire_CreateQuestionnaire, CreateQuestionnaire__Output as _questionnaire_CreateQuestionnaire__Output } from '../questionnaire/CreateQuestionnaire';
import type { DeleteQuestionnaire as _questionnaire_DeleteQuestionnaire, DeleteQuestionnaire__Output as _questionnaire_DeleteQuestionnaire__Output } from '../questionnaire/DeleteQuestionnaire';
import type { GetAllQuestionnaires as _questionnaire_GetAllQuestionnaires, GetAllQuestionnaires__Output as _questionnaire_GetAllQuestionnaires__Output } from '../questionnaire/GetAllQuestionnaires';
import type { GetOneQuestionnaire as _questionnaire_GetOneQuestionnaire, GetOneQuestionnaire__Output as _questionnaire_GetOneQuestionnaire__Output } from '../questionnaire/GetOneQuestionnaire';
import type { QuestionnaireMessage as _questionnaire_QuestionnaireMessage, QuestionnaireMessage__Output as _questionnaire_QuestionnaireMessage__Output } from '../questionnaire/QuestionnaireMessage';
import type { QuestionnaireResponse as _questionnaire_QuestionnaireResponse, QuestionnaireResponse__Output as _questionnaire_QuestionnaireResponse__Output } from '../questionnaire/QuestionnaireResponse';
import type { QuestionnairesResponse as _questionnaire_QuestionnairesResponse, QuestionnairesResponse__Output as _questionnaire_QuestionnairesResponse__Output } from '../questionnaire/QuestionnairesResponse';
import type { UpdateQuestionnaire as _questionnaire_UpdateQuestionnaire, UpdateQuestionnaire__Output as _questionnaire_UpdateQuestionnaire__Output } from '../questionnaire/UpdateQuestionnaire';

export interface QuestionnaireServiceClient extends grpc.Client {
  CreateQuestionnaire(argument: _questionnaire_CreateQuestionnaire, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionnaireMessage__Output>): grpc.ClientUnaryCall;
  CreateQuestionnaire(argument: _questionnaire_CreateQuestionnaire, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_QuestionnaireMessage__Output>): grpc.ClientUnaryCall;
  CreateQuestionnaire(argument: _questionnaire_CreateQuestionnaire, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionnaireMessage__Output>): grpc.ClientUnaryCall;
  CreateQuestionnaire(argument: _questionnaire_CreateQuestionnaire, callback: grpc.requestCallback<_questionnaire_QuestionnaireMessage__Output>): grpc.ClientUnaryCall;
  createQuestionnaire(argument: _questionnaire_CreateQuestionnaire, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionnaireMessage__Output>): grpc.ClientUnaryCall;
  createQuestionnaire(argument: _questionnaire_CreateQuestionnaire, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_QuestionnaireMessage__Output>): grpc.ClientUnaryCall;
  createQuestionnaire(argument: _questionnaire_CreateQuestionnaire, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionnaireMessage__Output>): grpc.ClientUnaryCall;
  createQuestionnaire(argument: _questionnaire_CreateQuestionnaire, callback: grpc.requestCallback<_questionnaire_QuestionnaireMessage__Output>): grpc.ClientUnaryCall;
  
  DeleteQuestionnaire(argument: _questionnaire_DeleteQuestionnaire, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionnaireMessage__Output>): grpc.ClientUnaryCall;
  DeleteQuestionnaire(argument: _questionnaire_DeleteQuestionnaire, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_QuestionnaireMessage__Output>): grpc.ClientUnaryCall;
  DeleteQuestionnaire(argument: _questionnaire_DeleteQuestionnaire, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionnaireMessage__Output>): grpc.ClientUnaryCall;
  DeleteQuestionnaire(argument: _questionnaire_DeleteQuestionnaire, callback: grpc.requestCallback<_questionnaire_QuestionnaireMessage__Output>): grpc.ClientUnaryCall;
  deleteQuestionnaire(argument: _questionnaire_DeleteQuestionnaire, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionnaireMessage__Output>): grpc.ClientUnaryCall;
  deleteQuestionnaire(argument: _questionnaire_DeleteQuestionnaire, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_QuestionnaireMessage__Output>): grpc.ClientUnaryCall;
  deleteQuestionnaire(argument: _questionnaire_DeleteQuestionnaire, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionnaireMessage__Output>): grpc.ClientUnaryCall;
  deleteQuestionnaire(argument: _questionnaire_DeleteQuestionnaire, callback: grpc.requestCallback<_questionnaire_QuestionnaireMessage__Output>): grpc.ClientUnaryCall;
  
  GetQuestionnaire(argument: _questionnaire_GetOneQuestionnaire, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionnaireResponse__Output>): grpc.ClientUnaryCall;
  GetQuestionnaire(argument: _questionnaire_GetOneQuestionnaire, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_QuestionnaireResponse__Output>): grpc.ClientUnaryCall;
  GetQuestionnaire(argument: _questionnaire_GetOneQuestionnaire, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionnaireResponse__Output>): grpc.ClientUnaryCall;
  GetQuestionnaire(argument: _questionnaire_GetOneQuestionnaire, callback: grpc.requestCallback<_questionnaire_QuestionnaireResponse__Output>): grpc.ClientUnaryCall;
  getQuestionnaire(argument: _questionnaire_GetOneQuestionnaire, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionnaireResponse__Output>): grpc.ClientUnaryCall;
  getQuestionnaire(argument: _questionnaire_GetOneQuestionnaire, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_QuestionnaireResponse__Output>): grpc.ClientUnaryCall;
  getQuestionnaire(argument: _questionnaire_GetOneQuestionnaire, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionnaireResponse__Output>): grpc.ClientUnaryCall;
  getQuestionnaire(argument: _questionnaire_GetOneQuestionnaire, callback: grpc.requestCallback<_questionnaire_QuestionnaireResponse__Output>): grpc.ClientUnaryCall;
  
  GetQuestionnaires(argument: _questionnaire_GetAllQuestionnaires, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionnairesResponse__Output>): grpc.ClientUnaryCall;
  GetQuestionnaires(argument: _questionnaire_GetAllQuestionnaires, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_QuestionnairesResponse__Output>): grpc.ClientUnaryCall;
  GetQuestionnaires(argument: _questionnaire_GetAllQuestionnaires, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionnairesResponse__Output>): grpc.ClientUnaryCall;
  GetQuestionnaires(argument: _questionnaire_GetAllQuestionnaires, callback: grpc.requestCallback<_questionnaire_QuestionnairesResponse__Output>): grpc.ClientUnaryCall;
  getQuestionnaires(argument: _questionnaire_GetAllQuestionnaires, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionnairesResponse__Output>): grpc.ClientUnaryCall;
  getQuestionnaires(argument: _questionnaire_GetAllQuestionnaires, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_QuestionnairesResponse__Output>): grpc.ClientUnaryCall;
  getQuestionnaires(argument: _questionnaire_GetAllQuestionnaires, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionnairesResponse__Output>): grpc.ClientUnaryCall;
  getQuestionnaires(argument: _questionnaire_GetAllQuestionnaires, callback: grpc.requestCallback<_questionnaire_QuestionnairesResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateQuestionnaire(argument: _questionnaire_UpdateQuestionnaire, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionnaireMessage__Output>): grpc.ClientUnaryCall;
  UpdateQuestionnaire(argument: _questionnaire_UpdateQuestionnaire, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_QuestionnaireMessage__Output>): grpc.ClientUnaryCall;
  UpdateQuestionnaire(argument: _questionnaire_UpdateQuestionnaire, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionnaireMessage__Output>): grpc.ClientUnaryCall;
  UpdateQuestionnaire(argument: _questionnaire_UpdateQuestionnaire, callback: grpc.requestCallback<_questionnaire_QuestionnaireMessage__Output>): grpc.ClientUnaryCall;
  updateQuestionnaire(argument: _questionnaire_UpdateQuestionnaire, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionnaireMessage__Output>): grpc.ClientUnaryCall;
  updateQuestionnaire(argument: _questionnaire_UpdateQuestionnaire, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_QuestionnaireMessage__Output>): grpc.ClientUnaryCall;
  updateQuestionnaire(argument: _questionnaire_UpdateQuestionnaire, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_QuestionnaireMessage__Output>): grpc.ClientUnaryCall;
  updateQuestionnaire(argument: _questionnaire_UpdateQuestionnaire, callback: grpc.requestCallback<_questionnaire_QuestionnaireMessage__Output>): grpc.ClientUnaryCall;
  
}

export interface QuestionnaireServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateQuestionnaire: grpc.handleUnaryCall<_questionnaire_CreateQuestionnaire__Output, _questionnaire_QuestionnaireMessage>;
  
  DeleteQuestionnaire: grpc.handleUnaryCall<_questionnaire_DeleteQuestionnaire__Output, _questionnaire_QuestionnaireMessage>;
  
  GetQuestionnaire: grpc.handleUnaryCall<_questionnaire_GetOneQuestionnaire__Output, _questionnaire_QuestionnaireResponse>;
  
  GetQuestionnaires: grpc.handleUnaryCall<_questionnaire_GetAllQuestionnaires__Output, _questionnaire_QuestionnairesResponse>;
  
  UpdateQuestionnaire: grpc.handleUnaryCall<_questionnaire_UpdateQuestionnaire__Output, _questionnaire_QuestionnaireMessage>;
  
}

export interface QuestionnaireServiceDefinition extends grpc.ServiceDefinition {
  CreateQuestionnaire: MethodDefinition<_questionnaire_CreateQuestionnaire, _questionnaire_QuestionnaireMessage, _questionnaire_CreateQuestionnaire__Output, _questionnaire_QuestionnaireMessage__Output>
  DeleteQuestionnaire: MethodDefinition<_questionnaire_DeleteQuestionnaire, _questionnaire_QuestionnaireMessage, _questionnaire_DeleteQuestionnaire__Output, _questionnaire_QuestionnaireMessage__Output>
  GetQuestionnaire: MethodDefinition<_questionnaire_GetOneQuestionnaire, _questionnaire_QuestionnaireResponse, _questionnaire_GetOneQuestionnaire__Output, _questionnaire_QuestionnaireResponse__Output>
  GetQuestionnaires: MethodDefinition<_questionnaire_GetAllQuestionnaires, _questionnaire_QuestionnairesResponse, _questionnaire_GetAllQuestionnaires__Output, _questionnaire_QuestionnairesResponse__Output>
  UpdateQuestionnaire: MethodDefinition<_questionnaire_UpdateQuestionnaire, _questionnaire_QuestionnaireMessage, _questionnaire_UpdateQuestionnaire__Output, _questionnaire_QuestionnaireMessage__Output>
}
