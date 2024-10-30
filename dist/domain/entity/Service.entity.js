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
exports.Service = void 0;
const typeorm_1 = require("typeorm");
const Category_entity_1 = require("./Category.entity");
const Quotation_entity_1 = require("./Quotation.entity");
const Provider_entity_1 = require("./Provider.entity");
let Service = class Service {
};
exports.Service = Service;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Service.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Service.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Service.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Service.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Quotation_entity_1.Quotation, (quotation) => quotation.services),
    __metadata("design:type", Array)
], Service.prototype, "quotations", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Category_entity_1.Category, (category) => category.services),
    __metadata("design:type", Category_entity_1.Category)
], Service.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Provider_entity_1.Provider, (provider) => provider.services),
    __metadata("design:type", Provider_entity_1.Provider)
], Service.prototype, "provider", void 0);
exports.Service = Service = __decorate([
    (0, typeorm_1.Entity)()
], Service);
