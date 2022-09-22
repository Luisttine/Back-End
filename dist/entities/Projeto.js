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
exports.Projeto = void 0;
const typeorm_1 = require("typeorm");
const Cliente_1 = require("./Cliente");
const CR_1 = require("./CR");
const Lancamento_1 = require("./Lancamento");
let Projeto = class Projeto {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Projeto.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: false }),
    __metadata("design:type", String)
], Projeto.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: ['ativo', 'inativo'], default: 'ativo', nullable: false }),
    __metadata("design:type", String)
], Projeto.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Lancamento_1.Lancamento, lancamento => lancamento.projeto),
    __metadata("design:type", Array)
], Projeto.prototype, "lancamentos", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Cliente_1.Cliente, cliente => cliente.projetos, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'cliente_id' }),
    __metadata("design:type", Cliente_1.Cliente)
], Projeto.prototype, "cliente", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => CR_1.CR),
    (0, typeorm_1.JoinColumn)({ name: 'cr_id' }),
    __metadata("design:type", CR_1.CR)
], Projeto.prototype, "cr", void 0);
Projeto = __decorate([
    (0, typeorm_1.Entity)('projetos')
], Projeto);
exports.Projeto = Projeto;
//# sourceMappingURL=Projeto.js.map