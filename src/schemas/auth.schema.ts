import Joi from 'joi';


export const ClinicianSignUpSchema = Joi.object({
  email: Joi.string().email().required(),
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  location: Joi.string().required(),
  credentials: Joi.array().items(Joi.string()).required(),
  ethnicity: Joi.string().required(),
  gender: Joi.string().required(),
  language: Joi.string().required(),
  specialties: Joi.array().items(Joi.string()).required(),
  image: Joi.string().required(),
  clinic_name: Joi.string().required(),
  clinic_id: Joi.string().required(),
  accept_patient: Joi.bool().required(),
  phone_number: Joi.string()
    .min(10)
    .pattern(/^[0-9]+$/)
    .required(),
});

export const PatientSignUpSchema = Joi.object({
  email: Joi.string().email().required(),
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  date_of_birth: Joi.date().required(),
  phone_number: Joi.string()
    .min(10)
    .pattern(/^[0-9]+$/)
    .required(),
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

export const VerifyOtpSchema = Joi.object({
  email: Joi.string().email().required(),
  code: Joi.string().required(),
});

export const ForgotPasswordSchema = Joi.object({
  email: Joi.string().email().required(),
});

export const ResetPasswordSchema = Joi.object({
  email: Joi.string().email().required(),
  new_password: Joi.string().required(),
});

export const CreatePasswordSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const UpdatePatientInsuranceSchema = Joi.object({
  medicalHistory: Joi.array().items(Joi.string()).required(),
  provider: Joi.string().required(),
  out_of_network_expenses: Joi.string().required(),
  co_pay: Joi.string().required(),
  out_of_pocket_expenses: Joi.string().required(),
  email: Joi.string().required(),
});
