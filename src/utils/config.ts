import dotenv from "dotenv";

const envFile =
  process.env.NODE_ENV === "production" ? ".env" : ".env.development";
dotenv.config({ path: envFile });

export const config = {
  NODE_ENV: process.env.NODE_ENV,
  MYSQLDB_HOST: process.env.MYSQLDB_HOST,
  MYSQLDB_USER: process.env.MYSQLDB_USER,
  MYSQLDB_PASSWORD: process.env.MYSQLDB_PASSWORD,
  MYSQLDB_DATABASE: process.env.MYSQLDB_DATABASE,
  MYSQLDB_DOCKER_PORT: Number(process.env.MYSQLDB_DOCKER_PORT),
  NODE_LOCAL_PORT: Number(process.env.NODE_LOCAL_PORT),
};
