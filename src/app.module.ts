import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest-blog', { useNewUrlParser: true }),
    BlogModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
