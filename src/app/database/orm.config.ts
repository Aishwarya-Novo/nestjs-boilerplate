import { DataSource, } from 'typeorm';
import { dbConfig, } from '../config/config';

export const ConnectionSource = new DataSource({
  type: 'postgres',
  url: dbConfig().dbUrl,
  migrationsTableName: 'migrations',
  synchronize: false,
  migrationsRun: true,
  database: 'card_service',
  entities: [
    `${__dirname}../../../app/modules/**/*.entity{.ts,.js}`,
  ],
  migrations: [ 'src/app/database/migrations/*.js', ],
});
