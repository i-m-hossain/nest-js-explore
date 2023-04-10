import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ExampleMiddleware } from './middlewares/example/example.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService], //is just a class <---> Dependency injection(create an instance) <--> services(responsible for work), repiositories, factories, strategy files for authentication, Guards
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ExampleMiddleware).forRoutes(UsersController);
  }
}
