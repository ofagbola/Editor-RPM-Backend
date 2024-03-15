import { AnswerServiceHandlers } from '../protos/gen/questionnaire/AnswerService';
import {
    GetAnswers,
    GetAnswer,
    CreateAnswer,
    UpdateAnswer,
    DeleteAnswer
} from '../controllers/answer.controller';

export const AnswerRoutes: AnswerServiceHandlers = {
    GetAnswers,
    GetAnswer,
    CreateAnswer,
    UpdateAnswer,
    DeleteAnswer
} 