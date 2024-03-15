// for maually describing data type to be accepted by request input
import Joi from "joi";

export const CreateUserSubscriptonValidator = Joi.object({
    access_token: Joi.string().required(),
    subscriptionId: Joi.string().required(),
    paid: Joi.number().required(),
    billing: Joi.string().valid("WEEKLY", "MONTHLY", "YEARLY").required(),
    paymentMethod: Joi.string().valid("PAYPAL", "STRIPE", "VENMO", "CARD").required(),
    paymentInfo: Joi.object({
        name: Joi.string().required(),
        cardNumber: Joi.string().required(),
        paymentId: Joi.string().required(),
        additionalKey: Joi.string().required(),
        cvv: Joi.number().required(),
        pin: Joi.number().required(),
        type: Joi.string().valid("PAYPAL", "STRIPE", "VENMO", "CARD").required(),
        description: Joi.string().required(),
    }).required()
})

export const GetAllUserSubscriptonValidator = Joi.object({
    access_token: Joi.string().required(),
    request_query: Joi.object().required(),
})

export const GetUserSubscriptonValidator = Joi.object({
    access_token: Joi.string().required(),
    id: Joi.string().required(),
})

export const UpdateUserSubscriptonValidator = Joi.object({
    access_token: Joi.string().required(),
    paid: Joi.number(),
    status: Joi.string(),
    id: Joi.string().required(),
})

export const DeleteUserSubscriptonValidator = Joi.object({
    access_token: Joi.string().required(),
    id: Joi.string().required(),
})