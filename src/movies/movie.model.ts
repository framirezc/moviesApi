import * as mongoose from 'mongoose';

export const MovieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    cast: Array,
    genres: Array,

});

export interface Movie extends mongoose.Document {    
    id: string;
    title: string;
    year: number;
    cast: string[];
    genres: string[];
}