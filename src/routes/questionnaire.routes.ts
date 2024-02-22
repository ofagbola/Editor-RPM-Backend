import { QuestionnaireServiceHandlers } from '../protos/gen/questionnaire/QuestionnaireService';
import {
    GetQuestionnaires,
    GetQuestionnaire,
    CreateQuestionnaire,
    UpdateQuestionnaire,
    DeleteQuestionnaire
} from '../controllers/questionnaire.controller';

export const QuestionRoutes: QuestionnaireServiceHandlers = {
    GetQuestionnaires,
    GetQuestionnaire,
    CreateQuestionnaire,
    UpdateQuestionnaire,
    DeleteQuestionnaire
} 