import { MigrationInterface, QueryRunner, } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/naming-convention
export class createCardTable1659007184608 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "cards" (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
            "vendor" text NOT NULL,
            "category" text NOT NULL,
            "type" text NOT NULL,
            "external_card_id" text NOT NULL,
            "user_id" text NOT NULL,
            "account_id" text NOT NULL,
            "nick_name" text NOT NULL,
            "last_four" text NOT NULL,
            "status" text NOT NULL,
            "expiry" text NOT NULL,
            "created_at" TIMESTAMP NOT NULL DEFAULT now(),
            "updated_at" TIMESTAMP NOT NULL DEFAULT now())`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "cards"');
  }
}
