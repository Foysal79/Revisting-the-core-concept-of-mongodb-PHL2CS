import { Request, Response } from "express";



const addReview = async (req : Request , res: Response) => {
    try {
        const reviewData = req.body;
        const result = await ReviewServices.createMovieFromDB(reviewData)
        res.json({
          success : true,
          message : "Review created successfully",
          data : result,
        })
  
    }catch(error : any){
        res.json({
          success : false,
          message : "Error creating Review",
          data : error
        })
    }
  }


  const getAllReviews = async ( req : Request, res : Response) => {
    try {
          const result = await ReviewServices.getAllMoviesFromDB();
          res.status(200).json({
            success : true,
            message : "Review fetched successfully",
            data : result
          })
    } catch(error) {
       res.status(500).json({
         success : false,
         message : 'do not get all Review for Database ',
         data : error
       })
    }
  }

  const getSReviewById = async (req : Request , res : Response) => {
    try{
        const {Id} = req.params;
        const result = await ReviewServices.getSingleMovieFromDB(Id);
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

  const updateReview = async (req : Request , res : Response) => {
    try{
        const {Id} = req.params;
        const result = await ReviewServices.getSingleMovieFromDB(Id);
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
  const deletedReview = async (req : Request , res : Response) => {
    try{
        const {Id} = req.params;
        const result = await ReviewServices.getSingleMovieFromDB(Id);
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
  

export const ReviewControllers = {
    addReview,
    getAllReviews,
    getSReviewById,
    updateReview,
    deletedReview

}