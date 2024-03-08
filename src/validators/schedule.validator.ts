import Joi from "joi";

const user = Joi.object({ id: Joi.string().required(), type: Joi.string().valid("PATIENT", "DOCTOR").required() }).required();

const schedule = Joi.object({
    initiator: user,
    recepient: user,
    duration: Joi.string().required(),
    sessions: Joi.number().required(),
    package: Joi.array().items(Joi.string().valid("MESSAGING", "QUESTIONNAIRE", "VIDEO_CALL", "VOICE_CALL").required()).required(),
    status: Joi.string().valid("ACCEPTED", "REJECTED", "PENDING").required(),
    date: Joi.object({ 
        seconds: Joi.string().required(), 
        nanos: Joi.number().required()
    }).required(),
}).required();

export const CreateScheduleValidator = Joi.object({
    access_token: Joi.string().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    schedule: schedule,
    userSubscriptionId: Joi.string().required()
})

export const CreateReScheduleValidator = Joi.object({
    access_token: Joi.string().required(),
    reason: Joi.string().required(),
    schedule: schedule,
    id: Joi.string().required(),
})

export const GetAllScheduleValidator = Joi.object({
    access_token: Joi.string().required(),
    request_query: Joi.object().required(),
})

export const GetScheduleValidator = Joi.object({
    access_token: Joi.string().required(),
    id: Joi.string().required(),
})

export const UpdateScheduleValidator = Joi.object({
    access_token: Joi.string().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    schedule: schedule,
    id: Joi.string().required()
})

export const UpdateReScheduleValidator = Joi.object({
    access_token: Joi.string().required(),
    index: Joi.number().required(),
    reason: Joi.string().required(),
    schedule: schedule,
    id: Joi.string().required()
})

export const DeleteScheduleValidator = Joi.object({
    access_token: Joi.string().required(),
    id: Joi.string().required(),
})

export const DeleteReScheduleValidator = Joi.object({
    access_token: Joi.string().required(),
    index: Joi.number().required(),
    id: Joi.string().required(),
})