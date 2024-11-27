import { TMovie } from "./movie.interface";
import { Movie } from "./movie.model";


const createMovieFromDB = async (payload : TMovie) => {
    const result = await Movie.create(payload)
    return result;
}

const getAllMoviesFromDB = async () => {
    const result = await Movie.find();
    return result;
}

const getSingleMovieFromDB = async (id : string) => {
   const result = await Movie.findById(id);
   return result;
}

export const MovieServices = {
    createMovieFromDB,
    getAllMoviesFromDB,
    getSingleMovieFromDB
}