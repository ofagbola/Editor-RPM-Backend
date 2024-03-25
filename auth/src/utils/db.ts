import postgres from 'postgres';
import 'dotenv/config';

const sql = postgres(
  `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.DATABASE_HOST}:5432/${process.env.POSTGRES_DB}`,
  {
    ssl: 'prefer',
  }
);

export default sql;
