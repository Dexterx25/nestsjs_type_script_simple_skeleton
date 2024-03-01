import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot({})],
      inject: [ConfigService],
      useFactory: (_config: ConfigService) => ({
        type: 'mongodb',
        host: '127.0.0.1',
        port: 27017,
        database: 'TransactionsPayments',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    }),
  ],
})
export class MongoDatabaseModule {}
