import { Request, Response } from "express";
import { MovieServices } from "./movie.service";
import mongoose from "mongoose";



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


const getAllMovies = async ( req : Request, res : Response) => {
  try {
        const result = await MovieServices.getAllMoviesFromDB();
        res.status(200).json({
          success : true,
          message : "Movies fetched successfully",
          data : result
        })
  } catch(error) {
     res.status(500).json({
       success : false,
       message : 'do not get all movies for Database ',
       data : error
     })
  }
}

const getSingleMovie = async (req : Request , res : Response) => {
  try{
      const {Id} = req.params
     
      console.log(`Fetching movie with ID: ${Id}`);
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




export const movieController = {
    createMovie,
    getAllMovies,
    getSingleMovie
}