import { Movie } from "../movies/movie.model"
import { TReview } from "./review.interface"
import { Review } from "./review.model";


const addReviewForDB = async (slug : string, reviewData : Partial<TReview>)  =>  {
const session = await Review.startSession();
try{
    session.startTransaction();
    const movie = await Movie.findOne({slug })
   if(!movie) {
    throw new Error('Movie not found');
   }

   const review = await Review.create([
    { 
    movie : movie._id ,
    ...reviewData
    }], { session });
   const reviewCount = await Review.countDocuments({movie : movie._id}).session(session);
 
   await Movie.updateOne(
    {slug},
    {totalRating : reviewCount },
    {session}
   ) 
   await session.commitTransaction();
   return review;

} catch(error)
{
    console.log(`error`);
    await session.endSession();
}
 session.endSession();
}

export const ReviewServices = {
    addReviewForDB
}