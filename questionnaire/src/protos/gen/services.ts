import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { AnswerServiceClient as _questionnaire_AnswerServiceClient, AnswerServiceDefinition as _questionnaire_AnswerServiceDefinition } from './questionnaire/AnswerService';
import type { CategoryServiceClient as _questionnaire_CategoryServiceClient, CategoryServiceDefinition as _questionnaire_CategoryServiceDefinition } from './questionnaire/CategoryService';
import type { QuestionServiceClient as _questionnaire_QuestionServiceClient, QuestionServiceDefinition as _questionnaire_QuestionServiceDefinition } from './questionnaire/QuestionService';
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
    AnswerMessage: MessageTypeDefinition
    AnswerResponse: MessageTypeDefinition
    AnswerService: SubtypeConstructor<typeof grpc.Client, _questionnaire_AnswerServiceClient> & { service: _questionnaire_AnswerServiceDefinition }
    AnswersResponse: MessageTypeDefinition
    CategoriesResponse: MessageTypeDefinition
    Category: MessageTypeDefinition
    CategoryMessage: MessageTypeDefinition
    CategoryResponse: MessageTypeDefinition
    CategoryService: SubtypeConstructor<typeof grpc.Client, _questionnaire_CategoryServiceClient> & { service: _questionnaire_CategoryServiceDefinition }
    CreateAnswer: MessageTypeDefinition
    CreateCategory: MessageTypeDefinition
    CreateQuestion: MessageTypeDefinition
    CreateQuestionnaire: MessageTypeDefinition
    DeleteAnswer: MessageTypeDefinition
    DeleteCategory: MessageTypeDefinition
    DeleteQuestion: MessageTypeDefinition
    DeleteQuestionnaire: MessageTypeDefinition
    GetAllAnswers: MessageTypeDefinition
    GetAllCategories: MessageTypeDefinition
    GetAllQuestionnaires: MessageTypeDefinition
    GetAllQuestions: MessageTypeDefinition
    GetOneAnswer: MessageTypeDefinition
    GetOneCategory: MessageTypeDefinition
    GetOneQuestion: MessageTypeDefinition
    GetOneQuestionnaire: MessageTypeDefinition
    Question: MessageTypeDefinition
    QuestionMessage: MessageTypeDefinition
    QuestionResponse: MessageTypeDefinition
    QuestionService: SubtypeConstructor<typeof grpc.Client, _questionnaire_QuestionServiceClient> & { service: _questionnaire_QuestionServiceDefinition }
    Questionnaire: MessageTypeDefinition
    QuestionnaireMessage: MessageTypeDefinition
    QuestionnaireResponse: MessageTypeDefinition
    QuestionnaireService: SubtypeConstructor<typeof grpc.Client, _questionnaire_QuestionnaireServiceClient> & { service: _questionnaire_QuestionnaireServiceDefinition }
    QuestionnairesResponse: MessageTypeDefinition
    QuestionsResponse: MessageTypeDefinition
    UpdateAnswer: MessageTypeDefinition
    UpdateCategory: MessageTypeDefinition
    UpdateQuestion: MessageTypeDefinition
    UpdateQuestionnaire: MessageTypeDefinition
    User: MessageTypeDefinition
    actions: EnumTypeDefinition
    catUsers: MessageTypeDefinition
    questionType: EnumTypeDefinition
  }
}

