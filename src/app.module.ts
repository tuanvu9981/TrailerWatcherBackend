import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from './config/database.config';
import { DatabaseModule } from './database/database.module';
import { ActorModule } from './modules/actors/actor.module';
import { CommentModule } from './modules/comments/comment.module';
import { DirectorModule } from './modules/directors/director.module';
import { FamousReviewModule } from './modules/famous-review/famous-review.module';
import { GenresModule } from './modules/genres/genre.module';
import { ReleaseInfoModule } from './modules/release-info/release-info.module';
import { TrailersModule } from './modules/trailers/trailer.module';
import { UsersModule } from './modules/users/user.module';

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

    ActorModule,
    CommentModule,
    DirectorModule,
    FamousReviewModule,
    GenresModule,
    ReleaseInfoModule,
    TrailersModule,
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
