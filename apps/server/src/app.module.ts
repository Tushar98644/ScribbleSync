import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typerormConfig } from './config/typerorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.development'],
    }),
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot(typerormConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
