import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typerormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Saber@98644',
  database: 'users',
  synchronize: true,
  retryAttempts: 15,
  retryDelay: 30000,
  autoLoadEntities: true,
};
