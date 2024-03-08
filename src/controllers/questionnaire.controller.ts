//  import bcrypt from 'bcryptjs';
import * as grpc from '@grpc/grpc-js';
import {
  createQuestionnaire,
  findUniqueQuestionnaire,
  findQuestionnaire,
  updateQuestionnaire,
  deleteQuestionnaire
} from '../services/questionnaire.services';
import { CreateQuestionnaire__Output } from '../protos/gen/questionnaire/CreateQuestionnaire';
import { QuestionnaireResponse__Output } from '../protos/gen/questionnaire/QuestionnaireResponse';
import { QuestionnairesResponse__Output } from '../protos/gen/questionnaire/QuestionnairesResponse';
import { GetAllQuestionnaires__Output } from '../protos/gen/questionnaire/GetAllQuestionnaires';
import { GetOneQuestionnaire__Output } from '../protos/gen/questionnaire/GetOneQuestionnaire';
import { QuestionnaireMessage__Output } from '../protos/gen/questionnaire/QuestionnaireMessage';
import { UpdateQuestionnaire__Output } from '../protos/gen/questionnaire/UpdateQuestionnaire';
import { DeleteQuestionnaire__Output } from '../protos/gen/questionnaire/DeleteQuestionnaire';
import { deserializeUser } from '../middlewares/deserializeUser'
import { RequestValidator } from '../middlewares/requestValidator'
import { 
  CreateQuestionnaireRequest,
  GetAllQuestionnaireRequest,
  GetQuestionnaireRequest,
  UpdateQuestionnaireRequest,
  DeleteQuestionnaireRequest
}from '../validators/questionnaire.validator'

export const CreateQuestionnaire = async (
  req: grpc.ServerUnaryCall<CreateQuestionnaire__Output, QuestionnaireMessage__Output>,
  res: grpc.sendUnaryData<QuestionnaireMessage__Output>
) => {
  try {
    const validate = await RequestValidator(CreateQuestionnaireRequest, req, res);

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

    await createQuestionnaire({
      questions: req.request.questions,
      category: req.request.category,
      users: [{
        id: user.id,
        action: "created",
        date: new Date()
      }],
      status: req.request.status,
    });

    res(null, {code: grpc.status.OK, message: "Questionnaire added successfully"});
  } catch (err: any) {
    if (err.code === 'P2002') {
      res({
        code: grpc.status.ALREADY_EXISTS,
        message: 'Questionnaire already exists',
      });
    }

    res({ code: grpc.status.INTERNAL, message: err.message.details });
  }
};

export const GetQuestionnaires = async (
  req: grpc.ServerUnaryCall<GetAllQuestionnaires__Output, QuestionnairesResponse__Output>,
  res: grpc.sendUnaryData<QuestionnairesResponse__Output>
) => {
  try {
    const validate = await RequestValidator(GetAllQuestionnaireRequest, req, res);

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

    const questionnaires = await findQuestionnaire({ ...req.request.request_query });

    const formattedQuestionnaires: any = questionnaires.map(questionnaire => ({
      ...questionnaire,
      created_at: { 
        seconds: (questionnaire.created_at.getTime() / 1000).toString(), 
        nanos: questionnaire.created_at.getMilliseconds() * 1000000
      },
      updated_at: { 
        seconds: (questionnaire.updated_at.getTime() / 1000).toString(), 
        nanos: questionnaire.updated_at.getMilliseconds() * 1000000
      }
    }));
    
    res(null, {
      code: grpc.status.OK,
      data: formattedQuestionnaires
    });
  } catch (err: any) {
    res({
      code: grpc.status.INTERNAL,
      message: err.message,
    });
  }
};

export const GetQuestionnaire = async (
  req: grpc.ServerUnaryCall<GetOneQuestionnaire__Output, QuestionnaireResponse__Output>,
  res: grpc.sendUnaryData<QuestionnaireResponse__Output>
) => {
  try {
    const validate = await RequestValidator(GetQuestionnaireRequest, req, res);

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

    const questionnaire = await findUniqueQuestionnaire({ id: req.request.id });

    if(!questionnaire) {
      res({
        code: grpc.status.NOT_FOUND,
        message: 'Questionnaire not found!',
      });
      return;
    }

    const users: any = questionnaire.users;

    res(null, {
      code: grpc.status.OK,
      data: {
        id: questionnaire.id,
        questions: questionnaire.questions,
        category: questionnaire.category,
        status: questionnaire.status,
        users: users,
        created_at: { 
          seconds: (questionnaire.created_at.getTime() / 1000).toString(),
          nanos: questionnaire.created_at.getMilliseconds() * 1000000 
        },
        updated_at: { 
          seconds: (questionnaire.updated_at.getTime() / 1000).toString(),
          nanos: questionnaire.updated_at.getMilliseconds() * 1000000  
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

export const UpdateQuestionnaire = async (
  req: grpc.ServerUnaryCall<UpdateQuestionnaire__Output, QuestionnaireMessage__Output>,
  res: grpc.sendUnaryData<QuestionnaireMessage__Output>
) => {
  try {
    const validate = await RequestValidator(UpdateQuestionnaireRequest, req, res);

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

    const questionnaire = await findUniqueQuestionnaire({ id: req.request.id });

    if(!questionnaire) {
      res({
        code: grpc.status.NOT_FOUND,
        message: 'Questionnaire not found!',
      });
      return;
    }

    const questions = req.request.questions && req.request.questions.length > 0
      ? [...questionnaire.questions, ...req.request.questions] 
      : questionnaire.questions
    ;

    const users: any = [...questionnaire.users, {
      id: user.id,
      action: "modified",
      date: new Date()
    }];

    await updateQuestionnaire({id : req.request.id}, {
      questions: questions,
      users: users,
      category: req.request.category,
      status: req.request.status,
    });

    res(null, {code: grpc.status.OK, message: "Questionnaire updated successfully"});
  } catch (err: any) {
    if (err.code === 'P2002') {
      res({
        code: grpc.status.ALREADY_EXISTS,
        message: 'Questionnaire already exists',
      });
    }

    res({ code: grpc.status.INTERNAL, message: err.message.details });
  }
};

export const DeleteQuestionnaire = async (
  req: grpc.ServerUnaryCall<DeleteQuestionnaire__Output, QuestionnaireMessage__Output>,
  res: grpc.sendUnaryData<QuestionnaireMessage__Output>
) => {
  try {
    const validate = await RequestValidator(DeleteQuestionnaireRequest, req, res);

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

    await deleteQuestionnaire({ id: req.request.id });

    res(null, {
      code: grpc.status.OK,
      message: "Questionnaire deleted successfully"
    });
  } catch (err: any) {
    res({
      code: grpc.status.INTERNAL,
      message: err.message.details,
    });
  }
};