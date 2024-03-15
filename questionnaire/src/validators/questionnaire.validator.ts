// for maually describing data type to be accepted by request input
import Joi from "joi";

export const CreateQuestionnaireRequest = Joi.object({
    access_token: Joi.string().required(),
    questions: Joi.array().items(Joi.string()).required(),
    category: Joi.string().required(),
    status: Joi.string().required()
})

export const GetAllQuestionnaireRequest = Joi.object({
    access_token: Joi.string().required(),
    request_query: Joi.object().required(),
})

export const GetQuestionnaireRequest = Joi.object({
    access_token: Joi.string().required(),
    id: Joi.string().required(),
})

export const UpdateQuestionnaireRequest = Joi.object({
    access_token: Joi.string().required(),
    question: Joi.array().items(Joi.string()),
    status: Joi.string(),
    id: Joi.string().required()
})

export const DeleteQuestionnaireRequest = Joi.object({
    access_token: Joi.string().required(),
    id: Joi.string().required(),
})