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
exports.QuotationCases = void 0;
const domain_1 = require("../../domain");
const Entity_1 = require("../../domain/exceptions/Entity");
const pdf_service_1 = require("../Services/pdf.service");
class QuotationCases {
    constructor(impInterface) {
        this.impInterface = impInterface;
        this.pdfService = new pdf_service_1.PdfService();
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.impInterface.get();
        });
    }
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundUser = yield this.impInterface.findUser(data.user);
            if (!foundUser)
                throw new Entity_1.NotFoundException("User", "");
            const dataSend = new domain_1.CreateQuotationUSDto();
            dataSend.status = data.status;
            dataSend.user = foundUser;
            return yield this.impInterface.save(dataSend);
        });
    }
    update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundQuotation = yield this.impInterface.getById(data.id);
            const foundServices = yield this.impInterface.findServices(data.services ? data.services : []);
            if (!foundQuotation)
                throw new Entity_1.NotFoundException("quotation", "");
            if (!foundServices)
                throw new Entity_1.NotFoundException("Service", "");
            foundQuotation.status = data.status;
            foundQuotation.services = foundServices;
            return yield this.impInterface.update(foundQuotation);
        });
    }
    quotationPdf(data, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const quotation = yield this.impInterface.getById(data);
            console.log(quotation);
            if (!quotation)
                throw new Entity_1.NotFoundException("Quotation", data.toString());
            const pdfBuffer = yield this.pdfService.generatePDF(quotation, res);
            return pdfBuffer;
        });
    }
}
exports.QuotationCases = QuotationCases;
