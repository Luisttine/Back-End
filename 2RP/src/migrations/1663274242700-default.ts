import { MigrationInterface, QueryRunner } from "typeorm";

export class default1663274242700 implements MigrationInterface {
    name = 'default1663274242700'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lancamentos" RENAME COLUMN "justificativa" TO "observacoes"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lancamentos" RENAME COLUMN "observacoes" TO "justificativa"`);
    }

}
