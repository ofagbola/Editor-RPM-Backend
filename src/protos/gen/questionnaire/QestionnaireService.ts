// Original file: src/protos/services.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateInput as _questionnaire_CreateInput, CreateInput__Output as _questionnaire_CreateInput__Output } from '../questionnaire/CreateInput';
import type { DataResponse as _questionnaire_DataResponse, DataResponse__Output as _questionnaire_DataResponse__Output } from '../questionnaire/DataResponse';
import type { DeleteInput as _questionnaire_DeleteInput, DeleteInput__Output as _questionnaire_DeleteInput__Output } from '../questionnaire/DeleteInput';
import type { GenericResponse as _questionnaire_GenericResponse, GenericResponse__Output as _questionnaire_GenericResponse__Output } from '../questionnaire/GenericResponse';
import type { GetAllInput as _questionnaire_GetAllInput, GetAllInput__Output as _questionnaire_GetAllInput__Output } from '../questionnaire/GetAllInput';
import type { GetOneInput as _questionnaire_GetOneInput, GetOneInput__Output as _questionnaire_GetOneInput__Output } from '../questionnaire/GetOneInput';
import type { UpdateInput as _questionnaire_UpdateInput, UpdateInput__Output as _questionnaire_UpdateInput__Output } from '../questionnaire/UpdateInput';

export interface QestionnaireServiceClient extends grpc.Client {
  CreateQestionnaire(argument: _questionnaire_CreateInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  CreateQestionnaire(argument: _questionnaire_CreateInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  CreateQestionnaire(argument: _questionnaire_CreateInput, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  CreateQestionnaire(argument: _questionnaire_CreateInput, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  createQestionnaire(argument: _questionnaire_CreateInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  createQestionnaire(argument: _questionnaire_CreateInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  createQestionnaire(argument: _questionnaire_CreateInput, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  createQestionnaire(argument: _questionnaire_CreateInput, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteQestionnaire(argument: _questionnaire_DeleteInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  DeleteQestionnaire(argument: _questionnaire_DeleteInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  DeleteQestionnaire(argument: _questionnaire_DeleteInput, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  DeleteQestionnaire(argument: _questionnaire_DeleteInput, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  deleteQestionnaire(argument: _questionnaire_DeleteInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  deleteQestionnaire(argument: _questionnaire_DeleteInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  deleteQestionnaire(argument: _questionnaire_DeleteInput, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  deleteQestionnaire(argument: _questionnaire_DeleteInput, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  
  GetQestionnaire(argument: _questionnaire_GetOneInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_DataResponse__Output>): grpc.ClientUnaryCall;
  GetQestionnaire(argument: _questionnaire_GetOneInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_DataResponse__Output>): grpc.ClientUnaryCall;
  GetQestionnaire(argument: _questionnaire_GetOneInput, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_DataResponse__Output>): grpc.ClientUnaryCall;
  GetQestionnaire(argument: _questionnaire_GetOneInput, callback: grpc.requestCallback<_questionnaire_DataResponse__Output>): grpc.ClientUnaryCall;
  getQestionnaire(argument: _questionnaire_GetOneInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_DataResponse__Output>): grpc.ClientUnaryCall;
  getQestionnaire(argument: _questionnaire_GetOneInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_DataResponse__Output>): grpc.ClientUnaryCall;
  getQestionnaire(argument: _questionnaire_GetOneInput, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_DataResponse__Output>): grpc.ClientUnaryCall;
  getQestionnaire(argument: _questionnaire_GetOneInput, callback: grpc.requestCallback<_questionnaire_DataResponse__Output>): grpc.ClientUnaryCall;
  
  GetQestionnaires(argument: _questionnaire_GetAllInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_DataResponse__Output>): grpc.ClientUnaryCall;
  GetQestionnaires(argument: _questionnaire_GetAllInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_DataResponse__Output>): grpc.ClientUnaryCall;
  GetQestionnaires(argument: _questionnaire_GetAllInput, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_DataResponse__Output>): grpc.ClientUnaryCall;
  GetQestionnaires(argument: _questionnaire_GetAllInput, callback: grpc.requestCallback<_questionnaire_DataResponse__Output>): grpc.ClientUnaryCall;
  getQestionnaires(argument: _questionnaire_GetAllInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_DataResponse__Output>): grpc.ClientUnaryCall;
  getQestionnaires(argument: _questionnaire_GetAllInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_DataResponse__Output>): grpc.ClientUnaryCall;
  getQestionnaires(argument: _questionnaire_GetAllInput, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_DataResponse__Output>): grpc.ClientUnaryCall;
  getQestionnaires(argument: _questionnaire_GetAllInput, callback: grpc.requestCallback<_questionnaire_DataResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateQestionnaire(argument: _questionnaire_UpdateInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  UpdateQestionnaire(argument: _questionnaire_UpdateInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  UpdateQestionnaire(argument: _questionnaire_UpdateInput, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  UpdateQestionnaire(argument: _questionnaire_UpdateInput, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  updateQestionnaire(argument: _questionnaire_UpdateInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  updateQestionnaire(argument: _questionnaire_UpdateInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  updateQestionnaire(argument: _questionnaire_UpdateInput, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  updateQestionnaire(argument: _questionnaire_UpdateInput, callback: grpc.requestCallback<_questionnaire_GenericResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface QestionnaireServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateQestionnaire: grpc.handleUnaryCall<_questionnaire_CreateInput__Output, _questionnaire_GenericResponse>;
  
  DeleteQestionnaire: grpc.handleUnaryCall<_questionnaire_DeleteInput__Output, _questionnaire_GenericResponse>;
  
  GetQestionnaire: grpc.handleUnaryCall<_questionnaire_GetOneInput__Output, _questionnaire_DataResponse>;
  
  GetQestionnaires: grpc.handleUnaryCall<_questionnaire_GetAllInput__Output, _questionnaire_DataResponse>;
  
  UpdateQestionnaire: grpc.handleUnaryCall<_questionnaire_UpdateInput__Output, _questionnaire_GenericResponse>;
  
}

export interface QestionnaireServiceDefinition extends grpc.ServiceDefinition {
  CreateQestionnaire: MethodDefinition<_questionnaire_CreateInput, _questionnaire_GenericResponse, _questionnaire_CreateInput__Output, _questionnaire_GenericResponse__Output>
  DeleteQestionnaire: MethodDefinition<_questionnaire_DeleteInput, _questionnaire_GenericResponse, _questionnaire_DeleteInput__Output, _questionnaire_GenericResponse__Output>
  GetQestionnaire: MethodDefinition<_questionnaire_GetOneInput, _questionnaire_DataResponse, _questionnaire_GetOneInput__Output, _questionnaire_DataResponse__Output>
  GetQestionnaires: MethodDefinition<_questionnaire_GetAllInput, _questionnaire_DataResponse, _questionnaire_GetAllInput__Output, _questionnaire_DataResponse__Output>
  UpdateQestionnaire: MethodDefinition<_questionnaire_UpdateInput, _questionnaire_GenericResponse, _questionnaire_UpdateInput__Output, _questionnaire_GenericResponse__Output>
}
