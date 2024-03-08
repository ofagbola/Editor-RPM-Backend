import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';


type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition
    }
  }
  questionnaire: {
    CategoriesResponse: MessageTypeDefinition
    Category: MessageTypeDefinition
    CategoryMessage: MessageTypeDefinition
    CategoryResponse: MessageTypeDefinition
    CreateCategory: MessageTypeDefinition
    DeleteCategory: MessageTypeDefinition
    GetAllCategories: MessageTypeDefinition
    GetOneCategory: MessageTypeDefinition
    UpdateCategory: MessageTypeDefinition
    actions: EnumTypeDefinition
    catUsers: MessageTypeDefinition
  }
}

