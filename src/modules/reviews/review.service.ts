import { Movie } from "../movies/movie.model"
import { TReview } from "./review.interface"
import { Review } from "./review.model";


const addReviewForDB = async (slug : string, reviewData : Partial<TReview>) : promise<TReview> => {
   const movie = await Movie.findOne({slug })
   if(!movie) {
    throw new Error('Movie not found');
   }

   const review = await Review.create({ movie : movie._id ,...reviewData});
   const reviewCount = await Review.countDocuments({movie : movie._id})
   await Movie.updateOne(
    {slug},
    {totalRating : reviewCount },
    {new : true}
   )
   return review;
}

export const ReviewServices = {
    addReviewForDB
}