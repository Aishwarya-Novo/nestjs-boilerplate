import { AppConfig, Config, DatabaseConfig, } from './config.interface';

const { env, } = process;

const DEFAULT_CONFIG: Config = {
  appConfig: {
    env: 'local',
    port: 3000,
    appName: 'NestApp',
  },
  dbConfig: {
    dbUrl: null,
  },
};

export const appConfig = (): AppConfig => ({
  env: env.NODE_ENV || DEFAULT_CONFIG.appConfig.env,
  port: Number(env.PORT || DEFAULT_CONFIG.appConfig.port),
  appName: env.APP_NAME || DEFAULT_CONFIG.appConfig.appName,
});

export const dbConfig = (): DatabaseConfig => ({
  dbUrl: env.DATABASE_URL || DEFAULT_CONFIG.dbConfig.dbUrl,
});
