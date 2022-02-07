import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { query } from 'express';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService){}

    @Get()
    public async findAll(@Query() query) {
        const movies = await this.moviesService.findAllMovies(query);
        return movies;
    }

    @Get(':id')
    public async findOne(@Param('id') movieId: string) {
        const movie = await this.moviesService.findOneMovie(movieId);
        return movie;
    }
}
