import sql from '../utils/db';
import { PendingQuery, Row, RowList } from 'postgres';
import { DataBaseError } from '../utils/errors';

export class AuthModel {
  static async signup(
    columns: string[],
    project: any
  ): Promise<void> {
    try {
      await sql.begin(async (sql) => {
        await sql`INSERT INTO projects ${sql(project, columns)}`;
      });
    } catch (error) {
      throw new DataBaseError({
        message: 'Query error',
        stack: error,
      });
    }
  }

 
}
