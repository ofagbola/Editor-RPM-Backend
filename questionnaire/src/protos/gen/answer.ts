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
    Answer: MessageTypeDefinition
    AnswerMessage: MessageTypeDefinition
    AnswerResponse: MessageTypeDefinition
    AnswersResponse: MessageTypeDefinition
    CreateAnswer: MessageTypeDefinition
    DeleteAnswer: MessageTypeDefinition
    GetAllAnswers: MessageTypeDefinition
    GetOneAnswer: MessageTypeDefinition
    UpdateAnswer: MessageTypeDefinition
  }
}

