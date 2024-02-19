export interface IPatientSignupRequest {
  email: string;
  first_name: string;
  last_name: string;
  dob: string;
  phone_number: string;
}

export interface IClinicianSignupRequest {
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  location: string;
  credentials: string[];
  ethnicity: string;
  gender: string;
  language: string;
  specialties: string[];
  image: string;
  clinic_name: string;
  clinic_id: string;
  accept_patient: boolean;
}

export interface ICreatePasswordRequest {
  email: string;
  password: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IVerifyAccountRequest {
  code: string;
  email: string;
}

export interface IVerifyOneTimePasswordRequest {
  code: string;
  email: string;
}

export interface IForgotPasswordRequest {
  email: string;
}

export interface IPasswordResetRequest {
  new_password: string;
  email: string;
}

export interface IUpdateAccountInsuranceRequest {
  medicalHistory: string[];
  provider: string;
  out_of_network_expenses: string;
  co_pay: string;
  out_of_pocket_expenses: string;
  email: string;
}
