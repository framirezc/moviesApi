import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesModule } from './movies/movies.module';
import { RedisCacheModule } from './redis-cache/redis-cache.module';

@Module({
  imports: [
    MoviesModule, 
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/titles'), RedisCacheModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
