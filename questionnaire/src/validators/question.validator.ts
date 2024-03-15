// for maually describing data type to be accepted by request input
import Joi from "joi";

export const CreateQuestionRequest = Joi.object({
    access_token: Joi.string().required(),
    question: Joi.string().required(),
    answers: Joi.array().items(Joi.string(), Joi.number()).required(),
    type: Joi.string().valid("singleChoice", "multipleChoice", "numberScale", "longAnswer", "shortAnswer", "existngQuestion").required(),
    category: Joi.string().required(),
    status: Joi.string().required()
})

export const GetAllQuestionRequest = Joi.object({
    access_token: Joi.string().required(),
    request_query: Joi.object().required(),
})

export const GetQuestionRequest = Joi.object({
    access_token: Joi.string().required(),
    id: Joi.string().required(),
})

export const UpdateQuestionRequest = Joi.object({
    access_token: Joi.string().required(),
    question: Joi.string(),
    answers: Joi.array().items(Joi.string(), Joi.number()),
    type: Joi.string().valid("singleChoice", "multipleChoice", "numberScale", "longAnswer", "shortAnswer", "existngQuestion"),
    category: Joi.string(),
    status: Joi.string(),
    id: Joi.string().required()
})

export const DeleteQuestionRequest = Joi.object({
    access_token: Joi.string().required(),
    id: Joi.string().required(),
})