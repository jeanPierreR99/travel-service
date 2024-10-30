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
exports.ProviderController = void 0;
const domain_1 = require("../../domain");
const Entity_1 = require("../../domain/exceptions/Entity");
const utils_1 = require("../../utils");
class ProviderController {
    constructor(cases) {
        this.cases = cases;
    }
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dataDto = yield (0, utils_1.validationHandler)(req, res, domain_1.CreateProviderDto);
                if (!dataDto)
                    return;
                const data = yield this.cases.save(dataDto);
                res.status(201).json(data);
            }
            catch (error) {
                if (error instanceof Entity_1.ConflictException) {
                    res.status(409).json({ message: error.message });
                    return;
                }
                res.status(500).json({ message: error });
            }
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.cases.get();
                res.status(200).json(data);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: error });
            }
        });
    }
}
exports.ProviderController = ProviderController;
