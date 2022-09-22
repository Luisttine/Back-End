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
var Colaborador_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colaborador = void 0;
const typeorm_1 = require("typeorm");
const CR_1 = require("./CR");
const Lancamento_1 = require("./Lancamento");
let Colaborador = Colaborador_1 = class Colaborador {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Colaborador.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: false }),
    __metadata("design:type", String)
], Colaborador.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], Colaborador.prototype, "matricula", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, nullable: false }),
    __metadata("design:type", String)
], Colaborador.prototype, "turno", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: false }),
    __metadata("design:type", String)
], Colaborador.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: false }),
    __metadata("design:type", String)
], Colaborador.prototype, "telefone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: ['administrador', 'gestor', 'colaborador'], default: 'colaborador', nullable: false }),
    __metadata("design:type", String)
], Colaborador.prototype, "perfil", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Lancamento_1.Lancamento, lancamento => lancamento.colaborador),
    __metadata("design:type", Array)
], Colaborador.prototype, "lancamentos", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CR_1.CR, CR => CR.colaboradores, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'cr_id' }),
    __metadata("design:type", CR_1.CR)
], Colaborador.prototype, "cr", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Colaborador_1, colaborador => colaborador.gestor, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'gestor_id' }),
    __metadata("design:type", Colaborador)
], Colaborador.prototype, "gestor", void 0);
Colaborador = Colaborador_1 = __decorate([
    (0, typeorm_1.Entity)('colaboradores')
], Colaborador);
exports.Colaborador = Colaborador;
//# sourceMappingURL=Colaborador.js.map