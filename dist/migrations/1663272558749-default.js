"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1663272558749 = void 0;
class default1663272558749 {
    constructor() {
        this.name = 'default1663272558749';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "lancamentos" DROP CONSTRAINT "FK_10a929b9af5684c83ae32ae52fd"`);
        await queryRunner.query(`ALTER TABLE "lancamentos" DROP COLUMN "gestor_id"`);
        await queryRunner.query(`ALTER TABLE "colaboradores" ADD "gestor_id" integer`);
        await queryRunner.query(`ALTER TABLE "colaboradores" ADD CONSTRAINT "FK_fa46f76178d878577209926d59a" FOREIGN KEY ("gestor_id") REFERENCES "colaboradores"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "colaboradores" DROP CONSTRAINT "FK_fa46f76178d878577209926d59a"`);
        await queryRunner.query(`ALTER TABLE "colaboradores" DROP COLUMN "gestor_id"`);
        await queryRunner.query(`ALTER TABLE "lancamentos" ADD "gestor_id" integer`);
        await queryRunner.query(`ALTER TABLE "lancamentos" ADD CONSTRAINT "FK_10a929b9af5684c83ae32ae52fd" FOREIGN KEY ("gestor_id") REFERENCES "colaboradores"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
}
exports.default1663272558749 = default1663272558749;
//# sourceMappingURL=1663272558749-default.js.map