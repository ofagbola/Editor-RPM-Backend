import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AnswerServiceClient as _questionnaire_AnswerServiceClient, AnswerServiceDefinition as _questionnaire_AnswerServiceDefinition } from './questionnaire/AnswerService';
import type { QuestionnaireServiceClient as _questionnaire_QuestionnaireServiceClient, QuestionnaireServiceDefinition as _questionnaire_QuestionnaireServiceDefinition } from './questionnaire/QuestionnaireService';

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
    AnswerResponse: MessageTypeDefinition
    AnswerService: SubtypeConstructor<typeof grpc.Client, _questionnaire_AnswerServiceClient> & { service: _questionnaire_AnswerServiceDefinition }
    AnswersResponse: MessageTypeDefinition
    CreateAnswer: MessageTypeDefinition
    CreateQuestion: MessageTypeDefinition
    DeleteAnswer: MessageTypeDefinition
    DeleteQuestion: MessageTypeDefinition
    GenericResponse: MessageTypeDefinition
    GetAllAnswers: MessageTypeDefinition
    GetAllQuestions: MessageTypeDefinition
    GetOneAnswer: MessageTypeDefinition
    GetOneQuestion: MessageTypeDefinition
    MessageResponse: MessageTypeDefinition
    Question: MessageTypeDefinition
    QuestionResponse: MessageTypeDefinition
    QuestionnaireService: SubtypeConstructor<typeof grpc.Client, _questionnaire_QuestionnaireServiceClient> & { service: _questionnaire_QuestionnaireServiceDefinition }
    QuestionsResponse: MessageTypeDefinition
    UpdateAnswer: MessageTypeDefinition
    UpdateQuestion: MessageTypeDefinition
  }
}

