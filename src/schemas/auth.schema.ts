import Joi from 'joi';

export const SignUpSchema = Joi.object({
  email: Joi.string().email(),
});
