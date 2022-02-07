import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieSchema } from './movie.model';
import { RedisCacheModule } from 'src/redis-cache/redis-cache.module';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Movie', schema: MovieSchema}]),
    RedisCacheModule
  ],
  providers: [MoviesService],
  controllers: [MoviesController],
  exports: [MoviesService]
})
export class MoviesModule {}
