//  import bcrypt from 'bcryptjs';
import * as grpc from '@grpc/grpc-js';
import {
  createAnswer,
  findUniqueAnswer,
  findAnswer,
  updateAnswer,
  deleteAnswer
} from '../services/answer.services';
import { CreateAnswer__Output } from '../protos/gen/questionnaire/CreateAnswer';
import { AnswerResponse__Output } from '../protos/gen/questionnaire/AnswerResponse';
import { AnswersResponse__Output } from '../protos/gen/questionnaire/AnswersResponse';
import { GetAllAnswers__Output } from '../protos/gen/questionnaire/GetAllAnswers';
import { GetOneAnswer__Output } from '../protos/gen/questionnaire/GetOneAnswer';
import { AnswerMessage__Output } from '../protos/gen/questionnaire/AnswerMessage';
import { UpdateAnswer__Output } from '../protos/gen/questionnaire/UpdateAnswer';
import { DeleteAnswer__Output } from '../protos/gen/questionnaire/DeleteAnswer';
import { deserializeUser } from '../middlewares/deserializeUser';
import {
  CreateAnswerRequest,
  GetAllAnswerRequest,
  GetAnswerRequest,
  UpdateAnswerRequest,
  DeleteAnswerRequest
} from '../validators/answer.validator';
import { RequestValidator } from '../middlewares/requestValidator';

export const CreateAnswer = async (
  req: grpc.ServerUnaryCall<CreateAnswer__Output, AnswerMessage__Output>,
  res: grpc.sendUnaryData<AnswerMessage__Output>
) => {
  try {
    const validate = await RequestValidator(CreateAnswerRequest, req, res);

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

    await createAnswer({
      questionnaire: req.request.questionnaire,
      question: req.request.question,
      answer: req.request.answer,
      user: user.id,
      status: req.request.status,
    });

    res(null, {code: grpc.status.OK, message: "Answer added successfully"});
  } catch (err: any) {
    if (err.code === 'P2002') {
      res({
        code: grpc.status.ALREADY_EXISTS,
        message: 'Answer already exists',
      });
    }

    res({ code: grpc.status.INTERNAL, message: err.message });
  }
};

export const GetAnswers = async (
  req: grpc.ServerUnaryCall<GetAllAnswers__Output, AnswersResponse__Output>,
  res: grpc.sendUnaryData<AnswersResponse__Output>
) => {
  try {
    const validate = await RequestValidator(GetAllAnswerRequest, req, res);

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

    const answers = await findAnswer({ ...req.request.request_query });
    const formattedAnswers = answers.map(answer => ({
      ...answer,
      created_at: { 
        seconds: (answer.created_at.getTime() / 1000).toString(), 
        nanos: answer.created_at.getMilliseconds() * 1000000
      },
      updated_at: { 
        seconds: (answer.updated_at.getTime() / 1000).toString(), 
        nanos: answer.updated_at.getMilliseconds() * 1000000
      }
    }));
    
    res(null, {
      code: grpc.status.OK,
      data: formattedAnswers
    });
  } catch (err: any) {
    res({
      code: grpc.status.INTERNAL,
      message: err.message,
    });
  }
};

export const GetAnswer = async (
  req: grpc.ServerUnaryCall<GetOneAnswer__Output, AnswerResponse__Output>,
  res: grpc.sendUnaryData<AnswerResponse__Output>
) => {
  try {
    const validate = await RequestValidator(GetAnswerRequest, req, res);

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

    const answer = await findUniqueAnswer({ id: req.request.id });

    res(null, {
      code: grpc.status.OK,
      data: {
        id: answer.id,
        questionnaire: answer.questionnaire,
        question: answer.question,
        answer: answer.answer,
        user: answer.user!,
        status: answer.status!,
        created_at: { 
          seconds: (answer.created_at.getTime() / 1000).toString(),
          nanos: answer.created_at.getMilliseconds() * 1000000 
        },
        updated_at: { 
          seconds: (answer.updated_at.getTime() / 1000).toString(),
          nanos: answer.updated_at.getMilliseconds() * 1000000  
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

export const UpdateAnswer = async (
  req: grpc.ServerUnaryCall<UpdateAnswer__Output, AnswerMessage__Output>,
  res: grpc.sendUnaryData<AnswerMessage__Output>
) => {
  try {
    const validate = await RequestValidator(UpdateAnswerRequest, req, res);

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

    await updateAnswer({id : req.request.id}, {
      answer: req.request.answer,
      status: req.request.status,
    });

    res(null, {code: grpc.status.OK, message: "Answer updated successfully"});
  } catch (err: any) {
    if (err.code === 'P2002') {
      res({
        code: grpc.status.ALREADY_EXISTS,
        message: 'Answer already exists',
      });
    }

    res({ code: grpc.status.INTERNAL, message: err.message });
  }
};

export const DeleteAnswer = async (
  req: grpc.ServerUnaryCall<DeleteAnswer__Output, AnswerMessage__Output>,
  res: grpc.sendUnaryData<AnswerMessage__Output>
) => {
  try {
    const validate = await RequestValidator(DeleteAnswerRequest, req, res);

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

    await deleteAnswer({ id: req.request.id });

    res(null, {
      code: grpc.status.OK,
      message: "Answer deleted successfully"
    });
  } catch (err: any) {
    res({
      code: grpc.status.INTERNAL,
      message: err.message,
    });
  }
};