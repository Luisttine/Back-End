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
exports.Verba = void 0;
const typeorm_1 = require("typeorm");
const Lancamento_1 = require("./Lancamento");
let Verba = class Verba {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Verba.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], Verba.prototype, "verba", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: "decimal" }),
    __metadata("design:type", Number)
], Verba.prototype, "adicional", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], Verba.prototype, "quantidadehoras", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Date)
], Verba.prototype, "inicio", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Date)
], Verba.prototype, "fim", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Lancamento_1.Lancamento, lancamento => lancamento.verbas),
    (0, typeorm_1.JoinTable)({
        name: 'lancamento_verba',
        joinColumn: {
            name: 'lançamento_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'verba_id',
            referencedColumnName: 'id',
        },
    }),
    __metadata("design:type", Array)
], Verba.prototype, "lancamentos", void 0);
Verba = __decorate([
    (0, typeorm_1.Entity)('verbas')
], Verba);
exports.Verba = Verba;
//# sourceMappingURL=Verba.js.map