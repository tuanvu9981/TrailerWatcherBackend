import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { User } from "src/modules/users/entities/user.entity";
import { Genre } from "src/modules/genres/entities/genre.entity";
import { Trailer } from "src/modules/trailers/entities/trailer.entity";
import { Comment } from "src/modules/comments/entities/comment.entity";
import { FamousReview } from "src/modules/famous-review/entities/famous-review.entity";
import { ReleaseInfo } from "src/modules/release-info/entities/release-info.entity";
import { Director } from "src/modules/directors/entities/director.entity";
import { Actor } from "src/modules/actors/entities/actor.entity";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                type: 'mysql',
                host: configService.get<string>('databaseHost'),
                port: configService.get<number>('databasePort'),
                username: configService.get<string>('databaseUsername'),
                password: configService.get<string>('databasePassword'),
                database: configService.get<string>('databaseName'),
                entities: [
                    User,
                    Genre,
                    Trailer,
                    Comment,
                    FamousReview,
                    ReleaseInfo,
                    Director,
                    Actor                    
                ],
            }),
            inject: [ConfigService]
        })
    ]
})
export class DatabaseModule {}
