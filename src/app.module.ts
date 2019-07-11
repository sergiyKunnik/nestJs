import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest-blog', { useNewUrlParser: true }),
    BlogModule,
    ConfigModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
