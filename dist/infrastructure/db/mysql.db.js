"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("dotenv/config");
const typeorm_1 = require("typeorm");
const domain_1 = require("../../domain");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.MYSQLDB_HOST,
    port: Number(process.env.MYSQLDB_DOCKER_PORT),
    username: process.env.MYSQLDB_USER,
    password: process.env.MYSQLDB_PASSWORD,
    database: process.env.MYSQLDB_DATABASE,
    entities: [domain_1.User, domain_1.Quotation, domain_1.Provider, domain_1.Category, domain_1.Service],
    synchronize: true,
});
