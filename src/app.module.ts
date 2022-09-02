import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genre } from './modules/genres/entities/genre.entity';
import { User } from './modules/users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: '',
      password: '',
      database: '',
      entities: [User, Genre],
      synchronize: true
      // Setting synchronize: true shouldn't be used in production - otherwise you can lose production data.
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
