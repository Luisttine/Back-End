"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1663266947112 = void 0;
class default1663266947112 {
    constructor() {
        this.name = 'default1663266947112';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "lancamentos" DROP COLUMN "inicio"`);
        await queryRunner.query(`ALTER TABLE "lancamentos" DROP COLUMN "fim"`);
        await queryRunner.query(`ALTER TABLE "lancamentos" ADD "data_inicio" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lancamentos" ADD "data_fim" TIMESTAMP NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "lancamentos" DROP COLUMN "data_fim"`);
        await queryRunner.query(`ALTER TABLE "lancamentos" DROP COLUMN "data_inicio"`);
        await queryRunner.query(`ALTER TABLE "lancamentos" ADD "fim" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lancamentos" ADD "inicio" TIMESTAMP NOT NULL`);
    }
}
exports.default1663266947112 = default1663266947112;
//# sourceMappingURL=1663266947112-default.js.map