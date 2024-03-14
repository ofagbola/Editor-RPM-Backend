import sql from '../utils/db';
import { PendingQuery, Row, RowList } from 'postgres';
import { DataBaseError } from '../utils/errors';

export class NotificationModel {
  static async createSubscriber(values: {
    uuid: string;
    topics: string[];
  }): Promise<void> {
    try {
      await sql.begin(async (sql): Promise<void> => {
        await sql`INSERT INTO subscribers (sub_uuid,topics) VALUES(
          ${values.uuid},
          ${values.topics}
         
          ) RETURNING *`;
      });
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
      )} WHERE sub_uuid = ${id}`;
    } catch (error) {
      throw new DataBaseError({
        message: 'Query error',
        stack: error,
      });
    }
  }

  static async findNotificationByTopic(
    table: string,
    columns: string[],
    topic: string
  ): Promise<RowList<Row[]> | any> {
    try {
      return await sql`SELECT ${sql(columns)} FROM ${sql(
        table
      )} WHERE topics @> '{${sql(topic)}}' `;
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
      )} WHERE sub_uuid = ${id}`;
    } catch (error) {
      throw new DataBaseError({
        message: 'Query error',
        stack: error,
      });
    }
  }
}
