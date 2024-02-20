import bcrypt from 'bcryptjs';
import * as grpc from '@grpc/grpc-js';
import {
  createQuestion,
  findUniqueQuestion,
  findQuestion,
  updateQuestion
} from '../services/questionnaire.services';
// import { SignUpUserInput__Output } from '../../pb/auth/SignUpUserInput';
// import { SignInUserInput__Output } from '../../pb/auth/SignInUserInput';
// import { SignInUserResponse__Output } from '../../pb/auth/SignInUserResponse';
// import { SignUpUserResponse } from '../../pb/auth/SignUpUserResponse';
// import { RefreshTokenInput__Output } from '../../pb/auth/RefreshTokenInput';
// import { RefreshTokenResponse } from '../../pb/auth/RefreshTokenResponse';
import { CreateInput__Output } from '../protos/gen/questionnaire/CreateInput';
import { DataResponse_Output } from '../protos/gen/questionnaire/DataResponse';
import { GetAllInput__Output } from '../protos/gen/questionnaire/GetAllInput';
import { GetOneInput__Output } from '../protos/gen/questionnaire/GetOneInput';
import { GenericResponse__Output } from '../protos/gen/questionnaire/GenericResponse';
import { signJwt, verifyJwt } from '../utils/jwt';
import customConfig from '../config/default'; 
import redisClient from '../utils/connectRedis';
import { deserializeUser } from '../middlewares/deserializeUser'

export const createQuestionnaire = async (
  req: grpc.ServerUnaryCall<CreateInput__Output, GenericResponse__Output>,
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

    const question = await createQuestion({
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

export const getQuestionnares = async (
  req: grpc.ServerUnaryCall<GetAllInput__Output, DataResponse_Output>,
  res: grpc.sendUnaryData<DataResponse_Output>
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

    const questions = findQuestion({ status: "active" });

    res(null, {
      code: grpc.status.OK,
      data: questions
    });
  } catch (err: any) {
    res({
      code: grpc.status.INTERNAL,
      message: err.message,
    });
  }
};

export const getQuestionnare = async (
  req: grpc.ServerUnaryCall<GetOneInput__Output, DataResponse_Output>,
  res: grpc.sendUnaryData<DataResponse_Output>
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

    const question = findUniqueQuestion({ id: req.request.id });

    res(null, {
      code: grpc.status.OK,
      data: {
        id: question.id,
        question: question.question,
        answers: question.answers,
        type: question.type!,
        status: question.status!,
        created_at: {
          seconds: question.created_at.getTime() / 1000,
        },
        updated_at: {
          seconds: question.updated_at.getTime() / 1000,
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