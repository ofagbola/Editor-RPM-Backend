// Original file: src/protos/services.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CategoriesResponse as _questionnaire_CategoriesResponse, CategoriesResponse__Output as _questionnaire_CategoriesResponse__Output } from '../questionnaire/CategoriesResponse';
import type { CategoryMessage as _questionnaire_CategoryMessage, CategoryMessage__Output as _questionnaire_CategoryMessage__Output } from '../questionnaire/CategoryMessage';
import type { CategoryResponse as _questionnaire_CategoryResponse, CategoryResponse__Output as _questionnaire_CategoryResponse__Output } from '../questionnaire/CategoryResponse';
import type { CreateCategory as _questionnaire_CreateCategory, CreateCategory__Output as _questionnaire_CreateCategory__Output } from '../questionnaire/CreateCategory';
import type { DeleteCategory as _questionnaire_DeleteCategory, DeleteCategory__Output as _questionnaire_DeleteCategory__Output } from '../questionnaire/DeleteCategory';
import type { GetAllCategories as _questionnaire_GetAllCategories, GetAllCategories__Output as _questionnaire_GetAllCategories__Output } from '../questionnaire/GetAllCategories';
import type { GetOneCategory as _questionnaire_GetOneCategory, GetOneCategory__Output as _questionnaire_GetOneCategory__Output } from '../questionnaire/GetOneCategory';
import type { UpdateCategory as _questionnaire_UpdateCategory, UpdateCategory__Output as _questionnaire_UpdateCategory__Output } from '../questionnaire/UpdateCategory';

export interface CategoryServiceClient extends grpc.Client {
  CreateCategory(argument: _questionnaire_CreateCategory, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_CategoryMessage__Output>): grpc.ClientUnaryCall;
  CreateCategory(argument: _questionnaire_CreateCategory, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_CategoryMessage__Output>): grpc.ClientUnaryCall;
  CreateCategory(argument: _questionnaire_CreateCategory, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_CategoryMessage__Output>): grpc.ClientUnaryCall;
  CreateCategory(argument: _questionnaire_CreateCategory, callback: grpc.requestCallback<_questionnaire_CategoryMessage__Output>): grpc.ClientUnaryCall;
  createCategory(argument: _questionnaire_CreateCategory, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_CategoryMessage__Output>): grpc.ClientUnaryCall;
  createCategory(argument: _questionnaire_CreateCategory, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_CategoryMessage__Output>): grpc.ClientUnaryCall;
  createCategory(argument: _questionnaire_CreateCategory, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_CategoryMessage__Output>): grpc.ClientUnaryCall;
  createCategory(argument: _questionnaire_CreateCategory, callback: grpc.requestCallback<_questionnaire_CategoryMessage__Output>): grpc.ClientUnaryCall;
  
  DeleteCategory(argument: _questionnaire_DeleteCategory, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_CategoryMessage__Output>): grpc.ClientUnaryCall;
  DeleteCategory(argument: _questionnaire_DeleteCategory, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_CategoryMessage__Output>): grpc.ClientUnaryCall;
  DeleteCategory(argument: _questionnaire_DeleteCategory, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_CategoryMessage__Output>): grpc.ClientUnaryCall;
  DeleteCategory(argument: _questionnaire_DeleteCategory, callback: grpc.requestCallback<_questionnaire_CategoryMessage__Output>): grpc.ClientUnaryCall;
  deleteCategory(argument: _questionnaire_DeleteCategory, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_CategoryMessage__Output>): grpc.ClientUnaryCall;
  deleteCategory(argument: _questionnaire_DeleteCategory, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_CategoryMessage__Output>): grpc.ClientUnaryCall;
  deleteCategory(argument: _questionnaire_DeleteCategory, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_CategoryMessage__Output>): grpc.ClientUnaryCall;
  deleteCategory(argument: _questionnaire_DeleteCategory, callback: grpc.requestCallback<_questionnaire_CategoryMessage__Output>): grpc.ClientUnaryCall;
  
  GetCategories(argument: _questionnaire_GetAllCategories, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_CategoriesResponse__Output>): grpc.ClientUnaryCall;
  GetCategories(argument: _questionnaire_GetAllCategories, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_CategoriesResponse__Output>): grpc.ClientUnaryCall;
  GetCategories(argument: _questionnaire_GetAllCategories, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_CategoriesResponse__Output>): grpc.ClientUnaryCall;
  GetCategories(argument: _questionnaire_GetAllCategories, callback: grpc.requestCallback<_questionnaire_CategoriesResponse__Output>): grpc.ClientUnaryCall;
  getCategories(argument: _questionnaire_GetAllCategories, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_CategoriesResponse__Output>): grpc.ClientUnaryCall;
  getCategories(argument: _questionnaire_GetAllCategories, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_CategoriesResponse__Output>): grpc.ClientUnaryCall;
  getCategories(argument: _questionnaire_GetAllCategories, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_CategoriesResponse__Output>): grpc.ClientUnaryCall;
  getCategories(argument: _questionnaire_GetAllCategories, callback: grpc.requestCallback<_questionnaire_CategoriesResponse__Output>): grpc.ClientUnaryCall;
  
  GetCategory(argument: _questionnaire_GetOneCategory, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_CategoryResponse__Output>): grpc.ClientUnaryCall;
  GetCategory(argument: _questionnaire_GetOneCategory, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_CategoryResponse__Output>): grpc.ClientUnaryCall;
  GetCategory(argument: _questionnaire_GetOneCategory, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_CategoryResponse__Output>): grpc.ClientUnaryCall;
  GetCategory(argument: _questionnaire_GetOneCategory, callback: grpc.requestCallback<_questionnaire_CategoryResponse__Output>): grpc.ClientUnaryCall;
  getCategory(argument: _questionnaire_GetOneCategory, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_CategoryResponse__Output>): grpc.ClientUnaryCall;
  getCategory(argument: _questionnaire_GetOneCategory, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_CategoryResponse__Output>): grpc.ClientUnaryCall;
  getCategory(argument: _questionnaire_GetOneCategory, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_CategoryResponse__Output>): grpc.ClientUnaryCall;
  getCategory(argument: _questionnaire_GetOneCategory, callback: grpc.requestCallback<_questionnaire_CategoryResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateCategory(argument: _questionnaire_UpdateCategory, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_CategoryMessage__Output>): grpc.ClientUnaryCall;
  UpdateCategory(argument: _questionnaire_UpdateCategory, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_CategoryMessage__Output>): grpc.ClientUnaryCall;
  UpdateCategory(argument: _questionnaire_UpdateCategory, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_CategoryMessage__Output>): grpc.ClientUnaryCall;
  UpdateCategory(argument: _questionnaire_UpdateCategory, callback: grpc.requestCallback<_questionnaire_CategoryMessage__Output>): grpc.ClientUnaryCall;
  updateCategory(argument: _questionnaire_UpdateCategory, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_CategoryMessage__Output>): grpc.ClientUnaryCall;
  updateCategory(argument: _questionnaire_UpdateCategory, metadata: grpc.Metadata, callback: grpc.requestCallback<_questionnaire_CategoryMessage__Output>): grpc.ClientUnaryCall;
  updateCategory(argument: _questionnaire_UpdateCategory, options: grpc.CallOptions, callback: grpc.requestCallback<_questionnaire_CategoryMessage__Output>): grpc.ClientUnaryCall;
  updateCategory(argument: _questionnaire_UpdateCategory, callback: grpc.requestCallback<_questionnaire_CategoryMessage__Output>): grpc.ClientUnaryCall;
  
}

export interface CategoryServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateCategory: grpc.handleUnaryCall<_questionnaire_CreateCategory__Output, _questionnaire_CategoryMessage>;
  
  DeleteCategory: grpc.handleUnaryCall<_questionnaire_DeleteCategory__Output, _questionnaire_CategoryMessage>;
  
  GetCategories: grpc.handleUnaryCall<_questionnaire_GetAllCategories__Output, _questionnaire_CategoriesResponse>;
  
  GetCategory: grpc.handleUnaryCall<_questionnaire_GetOneCategory__Output, _questionnaire_CategoryResponse>;
  
  UpdateCategory: grpc.handleUnaryCall<_questionnaire_UpdateCategory__Output, _questionnaire_CategoryMessage>;
  
}

export interface CategoryServiceDefinition extends grpc.ServiceDefinition {
  CreateCategory: MethodDefinition<_questionnaire_CreateCategory, _questionnaire_CategoryMessage, _questionnaire_CreateCategory__Output, _questionnaire_CategoryMessage__Output>
  DeleteCategory: MethodDefinition<_questionnaire_DeleteCategory, _questionnaire_CategoryMessage, _questionnaire_DeleteCategory__Output, _questionnaire_CategoryMessage__Output>
  GetCategories: MethodDefinition<_questionnaire_GetAllCategories, _questionnaire_CategoriesResponse, _questionnaire_GetAllCategories__Output, _questionnaire_CategoriesResponse__Output>
  GetCategory: MethodDefinition<_questionnaire_GetOneCategory, _questionnaire_CategoryResponse, _questionnaire_GetOneCategory__Output, _questionnaire_CategoryResponse__Output>
  UpdateCategory: MethodDefinition<_questionnaire_UpdateCategory, _questionnaire_CategoryMessage, _questionnaire_UpdateCategory__Output, _questionnaire_CategoryMessage__Output>
}
