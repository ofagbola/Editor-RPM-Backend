import sql from '../utils/db';
import { PendingQuery, Row, RowList } from 'postgres';
import { DataBaseError } from '../utils/errors';

export class AuthModel {
  static async signup(
    columns: string[],
    project: any
  ): Promise<void> {
    try {
      const { user } = await sql.begin(async (sql) => {
        const user = await sql`SELECT * FROM users`;
        return {
          user,
        };
      });
    } catch (error) {
      throw new DataBaseError({
        message: 'Query error',
        stack: error,
      });
    }
  }

 
}
