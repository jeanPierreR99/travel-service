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
exports.Quotation = exports.Status = void 0;
const typeorm_1 = require("typeorm");
const Service_entity_1 = require("./Service.entity");
const User_entity_1 = require("./User.entity");
var Status;
(function (Status) {
    Status["CREADO"] = "creado";
    Status["RESERVADO"] = "reserva";
    Status["ELIMINADO"] = "reserva cancelada";
})(Status || (exports.Status = Status = {}));
let Quotation = class Quotation {
};
exports.Quotation = Quotation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Quotation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: Status,
        default: Status.CREADO,
    }),
    __metadata("design:type", String)
], Quotation.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_entity_1.User, (user) => user.quotations),
    __metadata("design:type", User_entity_1.User)
], Quotation.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Service_entity_1.Service, (service) => service.quotations, {
        nullable: true,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Quotation.prototype, "services", void 0);
exports.Quotation = Quotation = __decorate([
    (0, typeorm_1.Entity)()
], Quotation);
