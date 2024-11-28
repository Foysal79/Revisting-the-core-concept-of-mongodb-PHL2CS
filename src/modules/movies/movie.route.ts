import express from "express"
import { movieController } from "./movie.controller";

const router = express.Router();

router.post('/create-movie', movieController.createMovie);
router.get('/all-movies', movieController.getAllMovies);
router.get('/:slug', movieController.getMovieBySlug);
router.get('/:Id', movieController.getSingleMovie);


export const MovieRoutes = router