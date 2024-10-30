import "dotenv/config";
import { DataSource } from "typeorm";
import { Category, Provider, Quotation, Service, User } from "../../domain";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User, Quotation, Provider, Category, Service],
  synchronize: true,
});
