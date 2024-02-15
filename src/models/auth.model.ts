import sql from '../utils/db';
import { PendingQuery, Row, RowList } from 'postgres';
import { DataBaseError } from '../utils/errors';

export class AuthModel {
  static async signup(values: {
    email: string;
    user_id: string;
  }): Promise<void> {
    try {
      await sql.begin(async (sql): Promise<void> => {
        await sql`INSERT INTO users (user_id,user_email) VALUES(${values.user_id},${values.email}) RETURNING *`;
      });
    } catch (error) {
      throw new DataBaseError({
        message: 'Query error',
        stack: error,
      });
    }
  }

  static async createVerification(values: {
    otp: string;
    user_id: string;
  }): Promise<void> {
    try {
      await sql.begin(async (sql): Promise<void> => {
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
}
