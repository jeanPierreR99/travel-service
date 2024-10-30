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
exports.ServiceCases = void 0;
const domain_1 = require("../../domain");
const Entity_1 = require("../../domain/exceptions/Entity");
class ServiceCases {
    constructor(impInterface) {
        this.impInterface = impInterface;
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(domain_1.CreateServiceDto);
            return yield this.impInterface.get();
        });
    }
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const found = yield this.impInterface.findByName(data.name);
            if (found) {
                if (found)
                    throw new Entity_1.ConflictException("Service", data.name);
            }
            return yield this.impInterface.save(data);
        });
    }
}
exports.ServiceCases = ServiceCases;
