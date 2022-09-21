import { MigrationInterface, QueryRunner } from "typeorm";

export class default1663266947112 implements MigrationInterface {
    name = 'default1663266947112'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lancamentos" DROP COLUMN "inicio"`);
        await queryRunner.query(`ALTER TABLE "lancamentos" DROP COLUMN "fim"`);
        await queryRunner.query(`ALTER TABLE "lancamentos" ADD "data_inicio" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lancamentos" ADD "data_fim" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lancamentos" DROP COLUMN "data_fim"`);
        await queryRunner.query(`ALTER TABLE "lancamentos" DROP COLUMN "data_inicio"`);
        await queryRunner.query(`ALTER TABLE "lancamentos" ADD "fim" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lancamentos" ADD "inicio" TIMESTAMP NOT NULL`);
    }

}
