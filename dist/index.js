"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_db_1 = require("./infrastructure/db/mysql.db");
const presentation_1 = require("./presentation");
(() => {
    startServer();
})();
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mysql_db_1.AppDataSource.initialize();
            const port = parseFloat(process.env.NODE_LOCAL_PORT);
            const routes = presentation_1.IndexRoutes.routes;
            new presentation_1.IndexServer({ port, routes }).start();
        }
        catch (e) {
            console.log(e);
        }
    });
}
