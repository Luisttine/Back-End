import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662674381315 implements MigrationInterface {
    name = 'default1662674381315'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clientes" ("id" SERIAL NOT NULL, "nome" character varying(100) NOT NULL, "cnpj" character varying(20) NOT NULL, "contato" text, CONSTRAINT "PK_d76bf3571d906e4e86470482c08" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."projetos_status_enum" AS ENUM('ativo', 'inativo')`);
        await queryRunner.query(`CREATE TABLE "projetos" ("id" SERIAL NOT NULL, "nome" character varying(100) NOT NULL, "status" "public"."projetos_status_enum" NOT NULL DEFAULT 'ativo', "cliente_id" integer, "cr_id" integer, CONSTRAINT "REL_38d6428cb62a75b4d9412d5421" UNIQUE ("cr_id"), CONSTRAINT "PK_fb6b6aed4b30e10b976fe8bdf5b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "verbas" ("id" SERIAL NOT NULL, "verba" integer NOT NULL, "adicional" numeric NOT NULL, "quantidadehoras" integer NOT NULL, "inicio" TIMESTAMP NOT NULL, "fim" TIMESTAMP NOT NULL, CONSTRAINT "PK_6043b46e2bb35b8264d4d6890ba" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."lancamentos_modalidade_enum" AS ENUM('hora extra', 'sobreaviso')`);
        await queryRunner.query(`CREATE TYPE "public"."lancamentos_status_enum" AS ENUM('aprovado', 'pendente', 'reprovado')`);
        await queryRunner.query(`CREATE TABLE "lancamentos" ("id" SERIAL NOT NULL, "modalidade" "public"."lancamentos_modalidade_enum" NOT NULL, "inicio" TIMESTAMP NOT NULL, "fim" TIMESTAMP NOT NULL, "justificativa" text, "status" "public"."lancamentos_status_enum" NOT NULL DEFAULT 'pendente', "colaborador_id" integer, "gestor_id" integer, "projeto_id" integer, CONSTRAINT "PK_863ece961e659a6e426dcff9d90" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."colaboradores_perfil_enum" AS ENUM('administrador', 'gestor', 'colaborador')`);
        await queryRunner.query(`CREATE TABLE "colaboradores" ("id" SERIAL NOT NULL, "nome" character varying(100) NOT NULL, "matricula" integer NOT NULL, "turno" character varying(50) NOT NULL, "email" character varying(100) NOT NULL, "telefone" character varying(20) NOT NULL, "perfil" "public"."colaboradores_perfil_enum" NOT NULL DEFAULT 'colaborador', "cr_id" integer, CONSTRAINT "PK_43dcbea28bbd5f12859c6da8089" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "crs" ("id" SERIAL NOT NULL, "numero" integer NOT NULL, "nome" character varying(100) NOT NULL, CONSTRAINT "PK_6385ce382f336288026032c8579" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lancamento_verba" ("lançamento_id" integer NOT NULL, "verba_id" integer NOT NULL, CONSTRAINT "PK_010be7de9ff2a7630a55154ffb1" PRIMARY KEY ("lançamento_id", "verba_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a76ea04f92ba0ea1f08c8ec731" ON "lancamento_verba" ("lançamento_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_92848f5f26f6adb1371c41d777" ON "lancamento_verba" ("verba_id") `);
        await queryRunner.query(`ALTER TABLE "projetos" ADD CONSTRAINT "FK_9fecf68c32703585c72b8b8ed9f" FOREIGN KEY ("cliente_id") REFERENCES "clientes"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "projetos" ADD CONSTRAINT "FK_38d6428cb62a75b4d9412d54213" FOREIGN KEY ("cr_id") REFERENCES "crs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lancamentos" ADD CONSTRAINT "FK_32f2192fa29c9f2c5b28000268d" FOREIGN KEY ("colaborador_id") REFERENCES "colaboradores"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lancamentos" ADD CONSTRAINT "FK_10a929b9af5684c83ae32ae52fd" FOREIGN KEY ("gestor_id") REFERENCES "colaboradores"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lancamentos" ADD CONSTRAINT "FK_92d224d27e4606b5836858bc0fb" FOREIGN KEY ("projeto_id") REFERENCES "projetos"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "colaboradores" ADD CONSTRAINT "FK_0c7e100f44786fb282afaba112d" FOREIGN KEY ("cr_id") REFERENCES "crs"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lancamento_verba" ADD CONSTRAINT "FK_a76ea04f92ba0ea1f08c8ec731e" FOREIGN KEY ("lançamento_id") REFERENCES "verbas"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "lancamento_verba" ADD CONSTRAINT "FK_92848f5f26f6adb1371c41d7779" FOREIGN KEY ("verba_id") REFERENCES "lancamentos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lancamento_verba" DROP CONSTRAINT "FK_92848f5f26f6adb1371c41d7779"`);
        await queryRunner.query(`ALTER TABLE "lancamento_verba" DROP CONSTRAINT "FK_a76ea04f92ba0ea1f08c8ec731e"`);
        await queryRunner.query(`ALTER TABLE "colaboradores" DROP CONSTRAINT "FK_0c7e100f44786fb282afaba112d"`);
        await queryRunner.query(`ALTER TABLE "lancamentos" DROP CONSTRAINT "FK_92d224d27e4606b5836858bc0fb"`);
        await queryRunner.query(`ALTER TABLE "lancamentos" DROP CONSTRAINT "FK_10a929b9af5684c83ae32ae52fd"`);
        await queryRunner.query(`ALTER TABLE "lancamentos" DROP CONSTRAINT "FK_32f2192fa29c9f2c5b28000268d"`);
        await queryRunner.query(`ALTER TABLE "projetos" DROP CONSTRAINT "FK_38d6428cb62a75b4d9412d54213"`);
        await queryRunner.query(`ALTER TABLE "projetos" DROP CONSTRAINT "FK_9fecf68c32703585c72b8b8ed9f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_92848f5f26f6adb1371c41d777"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a76ea04f92ba0ea1f08c8ec731"`);
        await queryRunner.query(`DROP TABLE "lancamento_verba"`);
        await queryRunner.query(`DROP TABLE "crs"`);
        await queryRunner.query(`DROP TABLE "colaboradores"`);
        await queryRunner.query(`DROP TYPE "public"."colaboradores_perfil_enum"`);
        await queryRunner.query(`DROP TABLE "lancamentos"`);
        await queryRunner.query(`DROP TYPE "public"."lancamentos_status_enum"`);
        await queryRunner.query(`DROP TYPE "public"."lancamentos_modalidade_enum"`);
        await queryRunner.query(`DROP TABLE "verbas"`);
        await queryRunner.query(`DROP TABLE "projetos"`);
        await queryRunner.query(`DROP TYPE "public"."projetos_status_enum"`);
        await queryRunner.query(`DROP TABLE "clientes"`);
    }

}
