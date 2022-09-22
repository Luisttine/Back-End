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
exports.Lancamento = void 0;
const typeorm_1 = require("typeorm");
const Colaborador_1 = require("./Colaborador");
const Projeto_1 = require("./Projeto");
const Verba_1 = require("./Verba");
let Lancamento = class Lancamento {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Lancamento.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: ['hora extra', 'sobreaviso'], nullable: false }),
    __metadata("design:type", String)
], Lancamento.prototype, "modalidade", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Date)
], Lancamento.prototype, "data_inicio", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Date)
], Lancamento.prototype, "data_fim", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "text" }),
    __metadata("design:type", String)
], Lancamento.prototype, "observacoes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: ['aprovado', 'pendente', 'reprovado'], default: 'pendente', nullable: false }),
    __metadata("design:type", String)
], Lancamento.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Colaborador_1.Colaborador, colaborador => colaborador.lancamentos, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'colaborador_id' }),
    __metadata("design:type", Colaborador_1.Colaborador)
], Lancamento.prototype, "colaborador", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Projeto_1.Projeto, projeto => projeto.lancamentos, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'projeto_id' }),
    __metadata("design:type", Projeto_1.Projeto)
], Lancamento.prototype, "projeto", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Verba_1.Verba, verba => verba.lancamentos),
    __metadata("design:type", Array)
], Lancamento.prototype, "verbas", void 0);
Lancamento = __decorate([
    (0, typeorm_1.Entity)('lancamentos')
], Lancamento);
exports.Lancamento = Lancamento;
//# sourceMappingURL=Lancamento.js.map