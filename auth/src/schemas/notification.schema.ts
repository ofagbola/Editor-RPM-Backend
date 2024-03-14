import Joi from 'joi';

export const SubscribeSchema = Joi.object({
  uuid: Joi.string().required(),
  topics: Joi.array().items(Joi.string()).required(),
});

export const NotifySchema = Joi.object({
  title: Joi.string().required(),
  sender: Joi.string().required(),
  body: Joi.object({
    message: Joi.string().required(),
    group: Joi.string().required(),
  }),
});
