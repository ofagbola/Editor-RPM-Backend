import sql from '../utils/db';
import { PendingQuery, Row, RowList } from 'postgres';
import { DataBaseError } from '../utils/errors';

export class AuthModel {
  static async signup(values: {
    email: string;
    user_id: string;
  }): Promise<void> {
    try {
      console.log(values);
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
      console.log(values);
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
    userEmail: string,
    columns: string[]
  ): Promise<RowList<Row[]>> {
    try {
      return await sql`SELECT ${sql(
        columns
      )} FROM users WHERE user_email = ${userEmail}`;
    } catch (error) {
      throw new DataBaseError({
        message: 'Query error',
        stack: error,
      });
    }
  }
}
