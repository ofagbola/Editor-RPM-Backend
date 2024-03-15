import Joi from "joi";

export const CreateReviewValidator = Joi.object({
    access_token: Joi.string().required(),
    sessionId: Joi.string().required(),
    doctorId: Joi.string().required(),
    rating: Joi.number().required(),
    review: Joi.string().required()
})

export const GetDoctorReviewValidator = Joi.object({
    access_token: Joi.string().required(),
    doctorId: Joi.string().required(),
    request_query: Joi.object().required()
})

export const GetSessionReviewValidator = Joi.object({
    access_token: Joi.string().required(),
    sessionId: Joi.string().required(),
    request_query: Joi.object().required()
})

export const UpdateReviewValidator = Joi.object({
    access_token: Joi.string().required(),
    rating: Joi.number(),
    review: Joi.string(),
    id: Joi.string().required()
})

export const DeleteReviewValidator = Joi.object({
    access_token: Joi.string().required(),
    id: Joi.string().required(),
})