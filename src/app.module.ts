import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [
    MoviesModule, 
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/titles')
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
