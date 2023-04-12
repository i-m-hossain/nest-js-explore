import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../typeorm/entities/User';
import { Profile } from '../typeorm/entities/Profile';
import { Post } from '../typeorm/entities/Post';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile, Post])],
  controllers: [UsersController],
  providers: [UsersService], //is just a class <---> Dependency injection(create an instance) <--> services(responsible for work), repositories, factories, strategy files for authentication, Guards
})
export class UsersModule {}
