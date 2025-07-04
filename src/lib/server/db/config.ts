import { env } from "$env/dynamic/private";

const dbConfig = {
  database: env.DATABASE as string,
  username: env.DB_USER as string,
  password: env.DB_PASSWORD as string,
  host: env.DB_HOST as string,
  port: Number(env.DB_PORT || 38542),
};

export default dbConfig;
