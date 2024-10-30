"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateQuotationDto = exports.CreateQuotationUSDto = exports.CreateQuotationDto = void 0;
const class_validator_1 = require("class-validator");
const Quotation_entity_1 = require("../entity/Quotation.entity");
class CreateQuotationDto {
}
exports.CreateQuotationDto = CreateQuotationDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(Quotation_entity_1.Status, {
        message: "The status must be one of the following: created, reserved, deleted",
    }),
    __metadata("design:type", String)
], CreateQuotationDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateQuotationDto.prototype, "user", void 0);
class CreateQuotationUSDto {
}
exports.CreateQuotationUSDto = CreateQuotationUSDto;
class UpdateQuotationDto {
}
exports.UpdateQuotationDto = UpdateQuotationDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateQuotationDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(Quotation_entity_1.Status, {
        message: "The status must be one of the following: created, reserved, deleted",
    }),
    __metadata("design:type", String)
], UpdateQuotationDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], UpdateQuotationDto.prototype, "services", void 0);
