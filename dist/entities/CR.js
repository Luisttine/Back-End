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
exports.CR = void 0;
const typeorm_1 = require("typeorm");
const Colaborador_1 = require("./Colaborador");
let CR = class CR {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CR.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], CR.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: false }),
    __metadata("design:type", String)
], CR.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Colaborador_1.Colaborador, colaborador => colaborador.cr),
    __metadata("design:type", Array)
], CR.prototype, "colaboradores", void 0);
CR = __decorate([
    (0, typeorm_1.Entity)('crs')
], CR);
exports.CR = CR;
//# sourceMappingURL=CR.js.map