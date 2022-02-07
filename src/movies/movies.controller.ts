import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { query } from 'express';
import { MoviesService } from './movies.service';

@ApiTags('movies')

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService){}

    @Get()    
    @ApiOkResponse({ description: 'Movies retrieved successfully.'})
    public async findAll(@Query() query) {
        const movies = await this.moviesService.findAllMovies(query);
        return movies;
    }

    @Get(':id')
    @ApiOkResponse({ description: 'Movie retrieved successfully.'})
    @ApiNotFoundResponse({ description: 'Movie not found.'})
    public async findOne(@Param('id') movieId: string) {
        const movie = await this.moviesService.findOneMovie(movieId);
        return movie;
    }
}
