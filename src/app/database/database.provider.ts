import { ConnectionSource, } from './orm.config';

export const databaseProvider = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = ConnectionSource;
      return dataSource.initialize();
    },
  },
];
