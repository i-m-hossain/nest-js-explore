import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './typeorm/entities/User';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
<<<<<<< HEAD
      username: 'root',
      password: '',
      database: 'nestjs_mysql',
      synchronize: true,
      entities: [User],
=======
      username: 'nestjs',
      password: 'nestjs',
      database: 'nestjsExplore',
      entities: [User],
      synchronize: true,
>>>>>>> bc032445c963f26aac8356b38036cee6c98f1c92
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
