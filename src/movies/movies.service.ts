import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movie } from './movie.model';
import * as mongoose from 'mongoose';


@Injectable()
export class MoviesService {

    constructor(@InjectModel('Movie') private readonly movieModel: Model<Movie>) {}

    public async findAllMovies(query: string) {        

        let { filter, sortBy, page} = JSON.parse(JSON.stringify(query));
        let findOptions =  filter ? {'title': { $regex: '.*' + filter + '.*' } } : {};
        sortBy ? sortBy : 'title';
        
        const result = await this.movieModel.find( findOptions )
                .sort( {[sortBy]: 1} ).skip( page > 0 ? ((page - 1) * 10) : 0 ).limit( 10 ).exec();

        return result as Movie[];
    }

    public async findOneMovie(movieId: string): Promise<Movie> {
        let movie;
        
        if (mongoose.isValidObjectId(movieId)) {            
            try {
                movie = await this.movieModel.findById(movieId).exec();                 
            } catch (error) {
                console.log("error: " + error);
                throw new NotFoundException('There\'s no information for that movie');
            }
        }
    
        if (!movie) {
            throw new NotFoundException('There\'s no information for that movie');
        }

        return movie;

    }

}
