import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';


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
    CreateQuestionnaire: MessageTypeDefinition
    DeleteQuestionnaire: MessageTypeDefinition
    GetAllQuestionnaires: MessageTypeDefinition
    GetOneQuestionnaire: MessageTypeDefinition
    Questionnaire: MessageTypeDefinition
    QuestionnaireMessage: MessageTypeDefinition
    QuestionnaireResponse: MessageTypeDefinition
    QuestionnairesResponse: MessageTypeDefinition
    UpdateQuestionnaire: MessageTypeDefinition
  }
}

