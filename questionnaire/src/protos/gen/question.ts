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
    CreateQuestion: MessageTypeDefinition
    DeleteQuestion: MessageTypeDefinition
    GetAllQuestions: MessageTypeDefinition
    GetOneQuestion: MessageTypeDefinition
    Question: MessageTypeDefinition
    QuestionMessage: MessageTypeDefinition
    QuestionResponse: MessageTypeDefinition
    QuestionsResponse: MessageTypeDefinition
    UpdateQuestion: MessageTypeDefinition
    User: MessageTypeDefinition
    questionType: EnumTypeDefinition
  }
}

