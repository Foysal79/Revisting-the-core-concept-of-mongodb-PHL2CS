import { NextFunction, Request, Response } from "express";
import { MovieServices } from "./movie.service";




const createMovie = async (req : Request , res: Response) => {
  try {
      const movieData = req.body;
      const result = await MovieServices.createMovieFromDB(movieData)
      res.json({
        success : true,
        message : "Movie created successfully",
        data : result,
      })

  }catch(error : any){
      res.json({
        success : false,
        message : "Error creating movie",
        data : error
      })
  }
}


const getAllMovies = async ( req : Request, res : Response, next: NextFunction) => {
  try {
        const result1 = await MovieServices.getAllMoviesFromDB();
        res.status(200).json({
          success : true,
          message : "Movies fetched successfully",
          data : result
        })
  } catch(error) {
    //  res.status(500).json({
    //    success : false,
    //    message : 'do not get all movies for Database ',
    //    data : error
    //  })
    next(error);
  }
}

const getSingleMovie = async (req : Request , res : Response) => {
  try{
      const {Id} = req.params;
      const result = await MovieServices.getSingleMovieFromDB(Id);
      res.status(200).json({
        success : true,
        message : "Movie fetched successfully",
        data : result
      })
  }
  catch(error) {
     res.status(500).json({
      success : false,
      message : 'do not get single movie for Database ',
      data : error
     })
  }
}

const getMovieBySlug = async ( req : Request, res : Response) => {
  try {
    const {slug} = req.params
    
    const result = await MovieServices.getMovieBySlugFromDB(slug);
    res.status(200).json({
      success : true,
      message : "Movie fetched successfully",
      data : result
    })
  }
  catch(error){
     res.status(500).json({
      success : false,
      message : 'do not get movie by slug for Database ',
      data : error
     })
  }
}



export const movieController = {
    createMovie,
    getAllMovies,
    getSingleMovie,
    getMovieBySlug
}