import { DataSource } from "typeorm";
import { Category, Provider, Quotation, Service, User } from "../../domain";
import { config } from "../../utils/config";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: config.MYSQLDB_HOST,
  port: config.MYSQLDB_DOCKER_PORT,
  username: config.MYSQLDB_USER,
  password: config.MYSQLDB_PASSWORD,
  database: config.MYSQLDB_DATABASE,
  entities: [User, Quotation, Provider, Category, Service],
  synchronize: true,
});
