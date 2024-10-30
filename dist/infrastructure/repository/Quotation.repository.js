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
exports.QuotationRepository = void 0;
const typeorm_1 = require("typeorm");
const __1 = require("..");
const domain_1 = require("../../domain");
class QuotationRepository {
    constructor(repository) {
        this.repository = repository;
        this.serviceRepository = __1.AppDataSource.getRepository(domain_1.Service);
        this.userRepository = __1.AppDataSource.getRepository(domain_1.User);
        this.repository = repository;
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find({
                relations: ["user", "services", "services.provider", "services.category"],
            });
        });
    }
    getById(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findOne({
                where: { id: data },
                relations: ["user", "services", "services.provider", "services.category"],
            });
        });
    }
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.save(data);
        });
    }
    update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.save(data);
        });
    }
    findServices(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const found = yield this.serviceRepository.findBy({
                id: (0, typeorm_1.In)(data),
            });
            return data.length === found.length ? found : null;
        });
    }
    findUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const found = yield this.userRepository.findOneBy({
                id: data,
            });
            return found || null;
        });
    }
}
exports.QuotationRepository = QuotationRepository;
