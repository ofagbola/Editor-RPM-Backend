import { QuestionServiceHandlers } from '../protos/gen/questionnaire/QuestionService';
import {
    GetQuestions,
    GetQuestion,
    CreateQuestion,
    UpdateQuestion,
    DeleteQuestion
} from '../controllers/question.controller';

export const QuestionRoutes: QuestionServiceHandlers = {
    GetQuestions,
    GetQuestion,
    CreateQuestion,
    UpdateQuestion,
    DeleteQuestion
} 