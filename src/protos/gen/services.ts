import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { QestionnaireServiceClient as _questionnaire_QestionnaireServiceClient, QestionnaireServiceDefinition as _questionnaire_QestionnaireServiceDefinition } from './questionnaire/QestionnaireService';

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
    CreateInput: MessageTypeDefinition
    DataResponse: MessageTypeDefinition
    DeleteInput: MessageTypeDefinition
    GenericResponse: MessageTypeDefinition
    GetAllInput: MessageTypeDefinition
    GetOneInput: MessageTypeDefinition
    QestionnaireService: SubtypeConstructor<typeof grpc.Client, _questionnaire_QestionnaireServiceClient> & { service: _questionnaire_QestionnaireServiceDefinition }
    Question: MessageTypeDefinition
    QuestionResponse: MessageTypeDefinition
    UpdateInput: MessageTypeDefinition
  }
}

