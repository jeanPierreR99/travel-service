import "dotenv/config";
import { DataSource } from "typeorm";
import { Category, Provider, Quotation, Service, User } from "../../domain";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.MYSQLDB_HOST,
  port: Number(process.env.MYSQLDB_DOCKER_PORT),
  username: process.env.MYSQLDB_USER,
  password: process.env.MYSQLDB_PASSWORD,
  database: process.env.MYSQLDB_DATABASE,
  entities: [User, Quotation, Provider, Category, Service],
  synchronize: true,
});
