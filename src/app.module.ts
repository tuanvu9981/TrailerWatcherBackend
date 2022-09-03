import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from './config/database.config';
import { DatabaseModule } from './database/database.module';
import { ActorModule } from './modules/actors/actor.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'src/.env/dev.env',
      load: [
        databaseConfig
      ]
    }),
    DatabaseModule,
    ActorModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
