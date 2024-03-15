import Joi from "joi";

export const CreateAnswerRequest = Joi.object({
    access_token: Joi.string().required(),
    questionnaire: Joi.string().required(),
    question: Joi.string().required(),
    answer: Joi.array().items(Joi.number()).required(),
    status: Joi.string().required()
})

export const GetAllAnswerRequest = Joi.object({
    access_token: Joi.string().required(),
    request_query: Joi.object().required(),
})

export const GetAnswerRequest = Joi.object({
    access_token: Joi.string().required(),
    id: Joi.string().required(),
})

export const UpdateAnswerRequest = Joi.object({
    access_token: Joi.string().required(),
    answer: Joi.array().items(Joi.number()).required(),
    status: Joi.string(),
    id: Joi.string().required()
})

export const DeleteAnswerRequest = Joi.object({
    access_token: Joi.string().required(),
    id: Joi.string().required(),
})