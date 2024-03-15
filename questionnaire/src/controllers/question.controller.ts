//  import bcrypt from 'bcryptjs';
import * as grpc from '@grpc/grpc-js';
import {
  createQuestion,
  findUniqueQuestion,
  findQuestion,
  updateQuestion,
  deleteQuestion
} from '../services/question.services';
import { CreateQuestion__Output } from '../protos/gen/questionnaire/CreateQuestion';
import { QuestionResponse__Output } from '../protos/gen/questionnaire/QuestionResponse';
import { QuestionsResponse__Output } from '../protos/gen/questionnaire/QuestionsResponse';
import { GetAllQuestions__Output } from '../protos/gen/questionnaire/GetAllQuestions';
import { GetOneQuestion__Output } from '../protos/gen/questionnaire/GetOneQuestion';
import { QuestionMessage__Output } from '../protos/gen/questionnaire/QuestionMessage';
import { UpdateQuestion__Output } from '../protos/gen/questionnaire/UpdateQuestion';    
import { DeleteQuestion__Output } from '../protos/gen/questionnaire/DeleteQuestion';
import { deserializeUser } from '../middlewares/deserializeUser'
import { RequestValidator } from '../middlewares/requestValidator'
import { 
  CreateQuestionRequest,
  GetAllQuestionRequest,
  GetQuestionRequest,
  UpdateQuestionRequest,
  DeleteQuestionRequest 
}from '../validators/question.validator'

export const CreateQuestion = async (
  req: grpc.ServerUnaryCall<CreateQuestion__Output, QuestionMessage__Output>,
  res: grpc.sendUnaryData<QuestionMessage__Output>
) => {
  try {
    const validate = await RequestValidator(CreateQuestionRequest, req, res);

    if(!validate || !validate.status) {
      res({
        code: grpc.status.INVALID_ARGUMENT,
        message: validate? JSON.stringify(validate.message) : "Null or invalid parameter provided.",
      });
      return;
    }

    const user = await deserializeUser(req.request.access_token);

    if (!user) {
      res({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Invalid access token or session expired',
      });
      return;
    }

    await createQuestion({
      question: req.request.question,
      answers: req.request.answers,
      category: req.request.category,
      users: [{
        id: user.id,
        action: "created",
        date: new Date()
      }],
      type: req.request.type,
      status: req.request.status,
    });

    res(null, {code: grpc.status.OK, message: "Question added successfully"});
  } catch (err: any) {
    if (err.code === 'P2002') {
      res({
        code: grpc.status.ALREADY_EXISTS,
        message: 'Question already exists',
      });
    }

    res({ code: grpc.status.INTERNAL, message: err.message.details });
  }
};

export const GetQuestions = async (
  req: grpc.ServerUnaryCall<GetAllQuestions__Output, QuestionsResponse__Output>,
  res: grpc.sendUnaryData<QuestionsResponse__Output>
) => {
  try {
    const validate = await RequestValidator(GetAllQuestionRequest, req, res);

    if(!validate || !validate.status) {
      res({
        code: grpc.status.INVALID_ARGUMENT,
        message: validate? JSON.stringify(validate.message) : "Null or invalid parameter provided.",
      });
      return;
    }

    const user = await deserializeUser(req.request.access_token);
    
    if (!user) {
      res({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Invalid access token or session expired',
      });
      return;
    }

    const questions = await findQuestion({ ...req.request.request_query });

    const formattedQuestions: any = questions.map(question => ({
      ...question,
      created_at: { 
        seconds: (question.created_at.getTime() / 1000).toString(), 
        nanos: question.created_at.getMilliseconds() * 1000000
      },
      updated_at: { 
        seconds: (question.updated_at.getTime() / 1000).toString(), 
        nanos: question.updated_at.getMilliseconds() * 1000000
      }
    }));
    
    res(null, {
      code: grpc.status.OK,
      data: formattedQuestions
    });
  } catch (err: any) {
    res({
      code: grpc.status.INTERNAL,
      message: err.message,
    });
  }
};

export const GetQuestion = async (
  req: grpc.ServerUnaryCall<GetOneQuestion__Output, QuestionResponse__Output>,
  res: grpc.sendUnaryData<QuestionResponse__Output>
) => {
  try {
    const validate = await RequestValidator(GetQuestionRequest, req, res);

    if(!validate || !validate.status) {
      res({
        code: grpc.status.INVALID_ARGUMENT,
        message: validate? JSON.stringify(validate.message) : "Null or invalid parameter provided.",
      });
      return;
    }

    const user = await deserializeUser(req.request.access_token);
    
    if (!user) {
      res({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Invalid access token or session expired',
      });
      return;
    }

    const question = await findUniqueQuestion({ id: req.request.id });

    if(!question) {
      res({
        code: grpc.status.NOT_FOUND,
        message: 'Question not found!',
      });
      return;
    }

    const users: any = question.users;

    res(null, {
      code: grpc.status.OK,
      data: {
        id: question.id,
        question: question.question,
        answers: question.answers,
        category: question.category,
        users: users,
        type: question.type,
        status: question.status,
        created_at: { 
          seconds: (question.created_at.getTime() / 1000).toString(),
          nanos: question.created_at.getMilliseconds() * 1000000 
        },
        updated_at: { 
          seconds: (question.updated_at.getTime() / 1000).toString(),
          nanos: question.updated_at.getMilliseconds() * 1000000  
        },
      },
    });
  } catch (err: any) {
    res({
      code: grpc.status.INTERNAL,
      message: err.message.details,
    });
  }
};

export const UpdateQuestion = async (
  req: grpc.ServerUnaryCall<UpdateQuestion__Output, QuestionMessage__Output>,
  res: grpc.sendUnaryData<QuestionMessage__Output>
) => {
  try {
    const validate = await RequestValidator(UpdateQuestionRequest, req, res);

    if(!validate || !validate.status) {
      res({
        code: grpc.status.INVALID_ARGUMENT,
        message: validate? JSON.stringify(validate.message) : "Null or invalid parameter provided.",
      });
      return;
    }

    const user = await deserializeUser(req.request.access_token);

    if (!user) {
      res({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Invalid access token or session expired',
      });
      return;
    }

    const question = await findUniqueQuestion({ id: req.request.id });

    if(!question) {
      res({
        code: grpc.status.NOT_FOUND,
        message: 'Question not found!',
      });
      return;
    }

    const users: any = [...question.users, {
      id: user.id,
      action: "modified",
      date: new Date()
    }];

    await updateQuestion({id : req.request.id}, {
      question: req.request.question,
      answers: req.request.answers,
      category: req.request.category,
      type: req.request.type,
      users: users,
      status: req.request.status,
    });

    res(null, {code: grpc.status.OK, message: "Question updated successfully"});
  } catch (err: any) {
    if (err.code === 'P2002') {
      res({
        code: grpc.status.ALREADY_EXISTS,
        message: 'Question already exists',
      });
    }

    res({ code: grpc.status.INTERNAL, message: err.message.details });
  }
};

export const DeleteQuestion = async (
  req: grpc.ServerUnaryCall<DeleteQuestion__Output, QuestionMessage__Output>,
  res: grpc.sendUnaryData<QuestionMessage__Output>
) => {
  try {
    const validate = await RequestValidator(DeleteQuestionRequest, req, res);

    if(!validate || !validate.status) {
      res({
        code: grpc.status.INVALID_ARGUMENT,
        message: validate? JSON.stringify(validate.message) : "Null or invalid parameter provided.",
      });
      return;
    }

    const user = await deserializeUser(req.request.access_token);
    
    if (!user) {
      res({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Invalid access token or session expired',
      });
      return;
    }

    await deleteQuestion({ id: req.request.id });

    res(null, {
      code: grpc.status.OK,
      message: "Question deleted successfully"
    });
  } catch (err: any) {
    res({
      code: grpc.status.INTERNAL,
      message: err.message.details,
    });
  }
};