import { MigrationInterface, QueryRunner } from "typeorm";

export class default1663272558749 implements MigrationInterface {
    name = 'default1663272558749'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lancamentos" DROP CONSTRAINT "FK_10a929b9af5684c83ae32ae52fd"`);
        await queryRunner.query(`ALTER TABLE "lancamentos" DROP COLUMN "gestor_id"`);
        await queryRunner.query(`ALTER TABLE "colaboradores" ADD "gestor_id" integer`);
        await queryRunner.query(`ALTER TABLE "colaboradores" ADD CONSTRAINT "FK_fa46f76178d878577209926d59a" FOREIGN KEY ("gestor_id") REFERENCES "colaboradores"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "colaboradores" DROP CONSTRAINT "FK_fa46f76178d878577209926d59a"`);
        await queryRunner.query(`ALTER TABLE "colaboradores" DROP COLUMN "gestor_id"`);
        await queryRunner.query(`ALTER TABLE "lancamentos" ADD "gestor_id" integer`);
        await queryRunner.query(`ALTER TABLE "lancamentos" ADD CONSTRAINT "FK_10a929b9af5684c83ae32ae52fd" FOREIGN KEY ("gestor_id") REFERENCES "colaboradores"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
