"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("dotenv/config");
const typeorm_1 = require("typeorm");
const domain_1 = require("../../domain");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "db",
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [domain_1.User, domain_1.Quotation, domain_1.Provider, domain_1.Category, domain_1.Service],
    synchronize: true,
});
