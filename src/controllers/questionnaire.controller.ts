//  import bcrypt from 'bcryptjs';
import * as grpc from '@grpc/grpc-js';
import {
  createQuestion,
  findUniqueQuestion,
  findQuestion,
  updateQuestion,
  deleteQuestion
} from '../services/questionnaire.services';
import { CreateQuestion__Output } from '../protos/gen/questionnaire/CreateQuestion';
import { QuestionResponse__Output } from '../protos/gen/questionnaire/QuestionResponse';
import { QuestionsResponse__Output } from '../protos/gen/questionnaire/QuestionsResponse';
import { GetAllQuestions__Output } from '../protos/gen/questionnaire/GetAllQuestions';
import { GetOneQuestion__Output } from '../protos/gen/questionnaire/GetOneQuestion';
import { GenericResponse__Output } from '../protos/gen/questionnaire/GenericResponse';
import { UpdateQuestion__Output } from '../protos/gen/questionnaire/UpdateQuestion';
import { DeleteQuestion__Output } from '../protos/gen/questionnaire/DeleteQuestion';
import { signJwt, verifyJwt } from '../utils/jwt';
import customConfig from '../config/default'; 
import redisClient from '../utils/connectRedis';
import { deserializeUser } from '../middlewares/deserializeUser'

export const CreateQuestionnaire = async (
  req: grpc.ServerUnaryCall<CreateQuestion__Output, GenericResponse__Output>,
  res: grpc.sendUnaryData<GenericResponse__Output>
) => {
  try {
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

    res({ code: grpc.status.INTERNAL, message: err.message });
  }
};

export const GetQuestionnaires = async (
  req: grpc.ServerUnaryCall<GetAllQuestions__Output, QuestionsResponse__Output>,
  res: grpc.sendUnaryData<QuestionsResponse__Output>
) => {
  try {
    const user = await deserializeUser(req.request.access_token);
    
    if (!user) {
      res({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Invalid access token or session expired',
      });
      return;
    }

    const questions = await findQuestion({ ...req.request.request_query });
    const formattedQuestions = questions.map(question => ({
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

export const GetQuestionnaire = async (
  req: grpc.ServerUnaryCall<GetOneQuestion__Output, QuestionResponse__Output>,
  res: grpc.sendUnaryData<QuestionResponse__Output>
) => {
  try {
    const user = await deserializeUser(req.request.access_token);
    
    if (!user) {
      res({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Invalid access token or session expired',
      });
      return;
    }

    const question = await findUniqueQuestion({ id: req.request.id });

    res(null, {
      code: grpc.status.OK,
      data: {
        id: question.id,
        question: question.question,
        answers: question.answers,
        type: question.type!,
        status: question.status!,
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
      message: err.message,
    });
  }
};

export const UpdateQuestionnaire = async (
  req: grpc.ServerUnaryCall<UpdateQuestion__Output, GenericResponse__Output>,
  res: grpc.sendUnaryData<GenericResponse__Output>
) => {
  try {
    const user = await deserializeUser(req.request.access_token);

    if (!user) {
      res({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Invalid access token or session expired',
      });
      return;
    }

    await updateQuestion({id : req.request.id}, {
      question: req.request.question,
      answers: req.request.answers,
      type: req.request.type,
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

    res({ code: grpc.status.INTERNAL, message: err.message });
  }
};

export const DeleteQuestionnaire = async (
  req: grpc.ServerUnaryCall<DeleteQuestion__Output, GenericResponse__Output>,
  res: grpc.sendUnaryData<GenericResponse__Output>
) => {
  try {
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
      message: err.message,
    });
  }
};