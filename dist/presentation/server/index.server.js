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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexServer = void 0;
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const swagger_1 = require("../../swagger");
class IndexServer {
    constructor(options) {
        this.app = (0, express_1.default)();
        const { port, routes } = options;
        this.port = port;
        this.routes = routes;
        this.app.use(express_1.default.json());
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            this.app.use("/api", this.routes);
            (0, swagger_1.setupSwagger)(this.app);
            this.app.listen(this.port, () => {
                console.log(`
        ███████╗██████╗ ██████╗ ███████╗██████╗ ██╗     ███████╗██████╗ 
        ██╔════╝██╔══██╗██╔══██╗██╔════╝██╔══██╗██║     ██╔════╝██╔══██╗
        █████╗  ██████╔╝██████╔╝█████╗  ██████╔╝██║     █████╗  ██████╔╝
        ██╔══╝  ██╔═══╝ ██╔═══╝ ██╔══╝  ██╔═══╝ ██║     ██╔══╝  ██╔═══╝ 
        ██║     ██║     ██║     ███████╗██║     ███████╗███████╗██║     
        ╚═╝     ╚═╝     ╚═╝     ╚══════╝╚═╝     ╚══════╝╚══════╝╚═╝     
                                                                          
                   SERVER LISTENING ON PORT: ${this.port}
        `);
            });
        });
    }
}
exports.IndexServer = IndexServer;
