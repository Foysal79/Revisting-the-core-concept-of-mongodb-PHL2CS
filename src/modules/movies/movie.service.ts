import { TMovie } from "./movie.interface";
import { Movie } from "./movie.model";
import { format } from "date-fns";
import slugify  from "slugify"


const createMovieFromDB = async (payload : TMovie) => {
    const result = new Movie(payload);
   
    const slug = result.createSlug(payload);
    result.slug = slug;
    await result.save();
    
    // const result = await Movie.create(payload)
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

const getMovieBySlugFromDB = async (slug : string) => {
    const result = await Movie.findOne({ slug : slug });
    return result;     
}

export const MovieServices = {
    createMovieFromDB,
    getAllMoviesFromDB,
    getSingleMovieFromDB,
    getMovieBySlugFromDB
}