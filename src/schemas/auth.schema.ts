import { JSONSchemaType } from 'ajv';
import { ISignupRequest } from '../interfaces/auth.interface';

export const SignUpSchema: JSONSchemaType<ISignupRequest> = {
  type: 'object',
  properties: {
    phone_number: { type: 'string' },
  },
  required: ['phone_number'],
  additionalProperties: false,
};
