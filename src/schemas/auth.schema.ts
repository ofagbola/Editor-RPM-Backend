import Joi from 'joi';

export const SignUpSchema = Joi.object({
  email: Joi.string().email().required(),
});

export const LoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const VerifyAccountSchema = Joi.object({
  email: Joi.string().email().required(),
  code: Joi.string().required(),
});

export const UpdateAccountSchema = Joi.object({
  email: Joi.string().email().required(),
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  date_of_birth: Joi.date().required(),
  password: Joi.string().min(8).required(),
});

