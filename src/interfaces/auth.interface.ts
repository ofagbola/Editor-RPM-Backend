export interface ISignupRequest {
  email: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IVerifyAccountRequest {
  code: string;
  email: string;
}

export interface IUpdateAccountRequest {
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth: string;
  password: string;
}