import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

export const typerormConfig = async (
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> => ({
  type: configService.get<string>('DB_TYPE') as any,
  host: configService.get<string>('DB_HOST'),
  port: configService.get<number>('DB_PORT'),
  username: configService.get<string>('DB_USERNAME'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_DATABASE'),
  synchronize: true,
  retryAttempts: 15,
  retryDelay: 30000,
  autoLoadEntities: true,
});
