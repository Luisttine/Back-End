"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1663274242700 = void 0;
class default1663274242700 {
    constructor() {
        this.name = 'default1663274242700';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "lancamentos" RENAME COLUMN "justificativa" TO "observacoes"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "lancamentos" RENAME COLUMN "observacoes" TO "justificativa"`);
    }
}
exports.default1663274242700 = default1663274242700;
//# sourceMappingURL=1663274242700-default.js.map