import sql from '../utils/db';
import { PendingQuery, Row, RowList } from 'postgres';
import { DataBaseError } from '../utils/errors';

export class AuthModel {
  static async patientSignup(values: {
    email: string;
    last_name: string;
    first_name: string;
    dob: string;
    phone_number: string;
    user_type: string;
    user_id: string;
    otp: string;
  }): Promise<void> {
    try {
      await sql.begin(async (sql): Promise<void> => {
        await sql`INSERT INTO users (user_id,user_email,first_name,last_name,dob,phone_number,user_type) VALUES(
          ${values.user_id},
          ${values.email},
          ${values.first_name},
          ${values.last_name},
          ${values.dob},
          ${values.phone_number},
          ${values.user_type}
          ) RETURNING *`;

        await sql`INSERT INTO verifications (user_id,otp) VALUES(${values.user_id},${values.otp}) RETURNING *`;
      });
    } catch (error) {
      throw new DataBaseError({
        message: 'Query error',
        stack: error,
      });
    }
  }

  static async findUserEmail(
    table: string,
    columns: string[],
    userEmail: string
  ): Promise<RowList<Row[]>> {
    try {
      return await sql`SELECT ${sql(columns)} FROM ${sql(
        table
      )}  WHERE user_email = ${userEmail}`;
    } catch (error) {
      throw new DataBaseError({
        message: 'Query error',
        stack: error,
      });
    }
  }

  static async findUserById(
    table: string,
    columns: string[],
    id: string
  ): Promise<RowList<Row[]> | any> {
    try {
      return await sql`SELECT ${sql(columns)} FROM ${sql(
        table
      )} WHERE user_id = ${id}`;
    } catch (error) {
      throw new DataBaseError({
        message: 'Query error',
        stack: error,
      });
    }
  }

  static async updateUser(
    table: string,
    columns: string[],
    values: { [key: string]: any },
    id: string
  ): Promise<RowList<Row[]>> {
    try {
      return await sql`UPDATE ${sql(table)} set ${sql(
        values,
        columns
      )} WHERE user_id = ${id}`;
    } catch (error) {
      throw new DataBaseError({
        message: 'Query error',
        stack: error,
      });
    }
  }

  static async createInsurance(values: {
    medical_history: string[];
    provider: string;
    out_of_network_expenses: string;
    co_pay: string;
    out_of_pocket_expenses: string;
    user_id: string;
    id: string;
  }): Promise<void> {
    try {
      await sql.begin(async (sql): Promise<void> => {
        await sql`INSERT INTO patient_insurance (medical_history,provider,out_of_network_expenses,co_pay,out_of_pocket_expenses,user_id,id) VALUES(
          ${values.medical_history},
          ${values.provider},
          ${values.out_of_network_expenses},
          ${values.co_pay},
          ${values.out_of_pocket_expenses},
          ${values.user_id},
          ${values.id}
          ) RETURNING *`;
      });
    } catch (error) {
      throw new DataBaseError({
        message: 'Query error',
        stack: error,
      });
    }
  }

  static async clinicianSignup(values: {
    email: string;
    last_name: string;
    first_name: string;
    ethnicity: string;
    language: string;
    gender: string;
    location: string;
    phone_number: string;
    user_type: string;
    user_id: string;
    credentials: string[];
    specialties: string[];
    image: string;
    clinic_name: string;
    clinic_id: string;
    accept_patient: boolean;
    otp: string;
  }): Promise<void> {
    try {
      await sql.begin(async (sql): Promise<void> => {
        await sql`INSERT INTO users (user_id,user_email,first_name,last_name,location,phone_number,user_type,gender,ethnicity,language) VALUES(
          ${values.user_id},
          ${values.email},
          ${values.first_name},
          ${values.last_name},
          ${values.location},
          ${values.phone_number},
          ${values.user_type},
          ${values.gender},
          ${values.ethnicity},
          ${values.language}
          ) RETURNING *`;

        await sql`INSERT INTO verifications (user_id,otp) VALUES(${values.user_id},${values.otp}) RETURNING *`;

        await sql`INSERT INTO clinicians (credentials,specialties,image,clinic_name,clinic_id,accept_patient,user_id) VALUES(
          ${values.credentials},
          ${values.specialties},
          ${values.image},
          ${values.clinic_name},
          ${values.clinic_id},
          ${values.accept_patient},
          ${values.user_id}
          ) RETURNING *`;
      });
    } catch (error) {
      throw new DataBaseError({
        message: 'Query error',
        stack: error,
      });
    }
  }
}
