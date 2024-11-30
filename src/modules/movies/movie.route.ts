import express from "express"
import { movieController } from "./movie.controller";
import { ReviewControllers } from "../reviews/review.controller";

const router = express.Router();

router.post('/create-movie', movieController.createMovie);
router.get('/all-movies', movieController.getAllMovies);
router.get('/:slug', movieController.getMovieBySlug);
router.get('/:Id', movieController.getSingleMovie);


//* Review Route

router.post('/:slug/review', ReviewControllers.addReview);
router.get('/:slug/reviews', ReviewControllers.getAllReviews);
router.put('/:slug/review', ReviewControllers.getSReviewById);
router.delete('/:slug/review', ReviewControllers.deletedReview);



export const MovieRoutes = router