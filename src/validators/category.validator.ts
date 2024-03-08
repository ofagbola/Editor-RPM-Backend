import Joi from "joi";

export const CreateCategoryRequest = Joi.object({
    access_token: Joi.string().required(),
    name: Joi.string().required(),
    status: Joi.string().required()
})

export const GetAllCategoryRequest = Joi.object({
    access_token: Joi.string().required(),
    request_query: Joi.object().required(),
})

export const GetCategoryRequest = Joi.object({
    access_token: Joi.string().required(),
    id: Joi.string().required(),
})

export const UpdateCategoryRequest = Joi.object({
    access_token: Joi.string().required(),
    name: Joi.string().required(),
    status: Joi.string().required(),
    id: Joi.string().required()
})

export const DeleteCategoryRequest = Joi.object({
    access_token: Joi.string().required(),
    id: Joi.string().required(),
})