import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1722345129157 implements MigrationInterface {
    name = 'Migration1722345129157'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "TasksManagerScheduler_auth" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "auth_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "access_token" text NOT NULL, "expiration_date" TIMESTAMP NOT NULL, "user_id" uuid NOT NULL, CONSTRAINT "REL_b5a38e2083bdc908955a72428b" UNIQUE ("user_id"), CONSTRAINT "PK_ba7ab90288d49111b966fb389ef" PRIMARY KEY ("auth_id"))`);
        await queryRunner.query(`CREATE TABLE "TasksManagerScheduler_type_documents" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "type_document_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(200) NOT NULL, CONSTRAINT "PK_0b94067c5de9fcfd0c2906b7d18" PRIMARY KEY ("type_document_id"))`);
        await queryRunner.query(`CREATE TABLE "TasksManagerScheduler_permissions" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "permission_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(250) NOT NULL, CONSTRAINT "PK_14584981d15e26322fd0c57ec61" PRIMARY KEY ("permission_id"))`);
        await queryRunner.query(`CREATE TABLE "TasksManagerScheduler_roles_permissions" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "permission_id" uuid NOT NULL, "role_id" uuid NOT NULL, CONSTRAINT "PK_292f84fb2cf8ace348d36291e91" PRIMARY KEY ("permission_id", "role_id"))`);
        await queryRunner.query(`CREATE TABLE "TasksManagerScheduler_roles" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "role_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(250) NOT NULL, CONSTRAINT "PK_63c8d2b9f800849c97565041bea" PRIMARY KEY ("role_id"))`);
        await queryRunner.query(`CREATE TABLE "TasksManagerScheduler_roles_users" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "user_id" uuid NOT NULL, "role_id" uuid NOT NULL, CONSTRAINT "PK_3df46bfefb8d3048c5a9e3f37dd" PRIMARY KEY ("user_id", "role_id"))`);
        await queryRunner.query(`CREATE TABLE "TasksManagerScheduler_passwords" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "password_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "password" character varying(250) NOT NULL, "salt" character varying(250) NOT NULL, "is_vigent" boolean NOT NULL, "user_id" uuid NOT NULL, CONSTRAINT "PK_a5a6d04895121ea5bf2875f7a6a" PRIMARY KEY ("password_id"))`);
        await queryRunner.query(`CREATE TABLE "TasksManagerScheduler_user_details" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "user_detail_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "country" character varying(100) NOT NULL, "city" character varying(100) NOT NULL, "cell_phone" integer NOT NULL, "direction" character varying(100) NOT NULL DEFAULT '', "summary" character varying(100) NOT NULL DEFAULT '', "date_birthday" TIMESTAMP NOT NULL, "user_id" uuid NOT NULL, CONSTRAINT "PK_c238c28ea815013b9016c40224a" PRIMARY KEY ("user_detail_id"))`);
        await queryRunner.query(`CREATE TABLE "TasksManagerScheduler_users" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "user_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "names" character varying(100) NOT NULL, "surnames" character varying(100) NOT NULL, "nikname" character varying(200) NOT NULL, "email" character varying(200) NOT NULL, "type_document_id" uuid NOT NULL, CONSTRAINT "UQ_b0ec96d2db67f0b7a21410f86e9" UNIQUE ("email"), CONSTRAINT "PK_8ce0107dd05e6687244f5af3bbd" PRIMARY KEY ("user_id"))`);
        await queryRunner.query(`CREATE TABLE "TasksManagerScheduler_auth_refresh" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "auth_refresh_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "refresh_token" text NOT NULL, "expiration_date" TIMESTAMP NOT NULL, "user_id" uuid NOT NULL, CONSTRAINT "REL_5103115855a17fcfe37d203d1f" UNIQUE ("user_id"), CONSTRAINT "PK_b118d2c3bd7a7aec26cd083b02b" PRIMARY KEY ("auth_refresh_id"))`);
        await queryRunner.query(`ALTER TABLE "TasksManagerScheduler_auth" ADD CONSTRAINT "FK_b5a38e2083bdc908955a72428b2" FOREIGN KEY ("user_id") REFERENCES "TasksManagerScheduler_users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "TasksManagerScheduler_roles_permissions" ADD CONSTRAINT "FK_03423a710060fcc9df4b18f1d67" FOREIGN KEY ("permission_id") REFERENCES "TasksManagerScheduler_permissions"("permission_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "TasksManagerScheduler_roles_permissions" ADD CONSTRAINT "FK_ca6581550c4cfcd2252fa2524b4" FOREIGN KEY ("role_id") REFERENCES "TasksManagerScheduler_roles"("role_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "TasksManagerScheduler_roles_users" ADD CONSTRAINT "FK_a0b02d19bad6af7cb5c771a1642" FOREIGN KEY ("user_id") REFERENCES "TasksManagerScheduler_users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "TasksManagerScheduler_roles_users" ADD CONSTRAINT "FK_a177b0be271375e04c4a8a78e29" FOREIGN KEY ("role_id") REFERENCES "TasksManagerScheduler_roles"("role_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "TasksManagerScheduler_passwords" ADD CONSTRAINT "FK_e8dd2d6421a0affa254757435a4" FOREIGN KEY ("user_id") REFERENCES "TasksManagerScheduler_users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "TasksManagerScheduler_user_details" ADD CONSTRAINT "FK_4c5b503dde2a0bd4fdb54fef54d" FOREIGN KEY ("user_id") REFERENCES "TasksManagerScheduler_users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "TasksManagerScheduler_users" ADD CONSTRAINT "FK_0008147023706fac211a3486987" FOREIGN KEY ("type_document_id") REFERENCES "TasksManagerScheduler_type_documents"("type_document_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "TasksManagerScheduler_auth_refresh" ADD CONSTRAINT "FK_5103115855a17fcfe37d203d1fb" FOREIGN KEY ("user_id") REFERENCES "TasksManagerScheduler_users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "TasksManagerScheduler_auth_refresh" DROP CONSTRAINT "FK_5103115855a17fcfe37d203d1fb"`);
        await queryRunner.query(`ALTER TABLE "TasksManagerScheduler_users" DROP CONSTRAINT "FK_0008147023706fac211a3486987"`);
        await queryRunner.query(`ALTER TABLE "TasksManagerScheduler_user_details" DROP CONSTRAINT "FK_4c5b503dde2a0bd4fdb54fef54d"`);
        await queryRunner.query(`ALTER TABLE "TasksManagerScheduler_passwords" DROP CONSTRAINT "FK_e8dd2d6421a0affa254757435a4"`);
        await queryRunner.query(`ALTER TABLE "TasksManagerScheduler_roles_users" DROP CONSTRAINT "FK_a177b0be271375e04c4a8a78e29"`);
        await queryRunner.query(`ALTER TABLE "TasksManagerScheduler_roles_users" DROP CONSTRAINT "FK_a0b02d19bad6af7cb5c771a1642"`);
        await queryRunner.query(`ALTER TABLE "TasksManagerScheduler_roles_permissions" DROP CONSTRAINT "FK_ca6581550c4cfcd2252fa2524b4"`);
        await queryRunner.query(`ALTER TABLE "TasksManagerScheduler_roles_permissions" DROP CONSTRAINT "FK_03423a710060fcc9df4b18f1d67"`);
        await queryRunner.query(`ALTER TABLE "TasksManagerScheduler_auth" DROP CONSTRAINT "FK_b5a38e2083bdc908955a72428b2"`);
        await queryRunner.query(`DROP TABLE "TasksManagerScheduler_auth_refresh"`);
        await queryRunner.query(`DROP TABLE "TasksManagerScheduler_users"`);
        await queryRunner.query(`DROP TABLE "TasksManagerScheduler_user_details"`);
        await queryRunner.query(`DROP TABLE "TasksManagerScheduler_passwords"`);
        await queryRunner.query(`DROP TABLE "TasksManagerScheduler_roles_users"`);
        await queryRunner.query(`DROP TABLE "TasksManagerScheduler_roles"`);
        await queryRunner.query(`DROP TABLE "TasksManagerScheduler_roles_permissions"`);
        await queryRunner.query(`DROP TABLE "TasksManagerScheduler_permissions"`);
        await queryRunner.query(`DROP TABLE "TasksManagerScheduler_type_documents"`);
        await queryRunner.query(`DROP TABLE "TasksManagerScheduler_auth"`);
    }

}
