import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { ChatModule } from './chat/chat.module';
// import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    BlogModule,
    ChatModule,
    CatsModule,
    // MongooseModule.forRoot('mongodb://localhost:27017/nestMongo'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
