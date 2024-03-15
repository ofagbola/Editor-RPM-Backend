// for maually describing data type to be accepted by request input
import Joi from "joi";

export const CreateSubscriptonValidator = Joi.object({
    access_token: Joi.string().required(),
    name: Joi.string().required(),
    amount: Joi.number().required(),
    currency: Joi.string().required(),
    discount: Joi.number().required(),
    billing: Joi.array().items(Joi.string().valid("WEEKLY", "MONTHLY", "YEARLY").required()).required(),
    paymentMethod: Joi.array().items(Joi.string().valid("PAYPAL", "STRIPE", "VENMO", "CARD").required()).required(),
    benefits: Joi.array().items(Joi.object({
        available: Joi.boolean().required(),
        description: Joi.string().required(),
    }).required()).required(),
    extras: Joi.object({
        duration: Joi.string().required(),
        sessions: Joi.number().required(),
        package: Joi.array().items(Joi.string().valid("MESSAGING", "QUESTIONNAIRE", "VIDEO_CALL", "VOICE_CALL").required()),
    }).required()
})

export const GetAllSubscriptonValidator = Joi.object({
    access_token: Joi.string().required(),
    request_query: Joi.object().required(),
})

export const GetSubscriptonValidator = Joi.object({
    access_token: Joi.string().required(),
    id: Joi.string().required(),
})

export const UpdateSubscriptonValidator = Joi.object({
    access_token: Joi.string().required(),
    name: Joi.string().required(),
    status: Joi.string().required(),
    amount: Joi.number().required(),
    currency: Joi.string().required(),
    discount: Joi.number().required(),
    billing: Joi.array().items(Joi.string().valid("WEEKLY", "MONTHLY", "YEARLY").required()).required(),
    paymentMethod: Joi.array().items(Joi.string().valid("PAYPAL", "STRIPE", "VENMO", "CARD").required()).required(),
    benefits: Joi.array().items(Joi.object({
        available: Joi.boolean().required(),
        description: Joi.string().required(),
    }).required()).required(),
    extras: Joi.object({
        duration: Joi.string().required(),
        sessions: Joi.number().required(),
        package: Joi.array().items(Joi.string().valid("MESSAGING", "QUESTIONNAIRE", "VIDEO_CALL", "VOICE_CALL").required()),
    }).required(),
    id: Joi.string().required()
})

export const DeleteSubscriptonValidator = Joi.object({
    access_token: Joi.string().required(),
    id: Joi.string().required(),
})