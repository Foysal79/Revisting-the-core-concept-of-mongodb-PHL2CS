import { model, Schema } from "mongoose";
import { TMovie, TReview } from "./movie.interface";

const reviewSchema = new Schema<TReview>({
    email : { type: String, required : true },
    rating : {type : Number, required : true},
    comment : {type : String, required : true}
})

const movieSchema = new Schema<TMovie>({
    title : {type: String, required : true},
    description : {type : String, required : true},
    releaseDate : {type : Date, required : false },
    genre : {type: String, required : true},
    isDeleted: {type : Boolean, required : true, default : false},
    viewCount : {type : Number, default : 0},
    reviews : [reviewSchema]
})


export const Movie = model<TMovie>('Movie', movieSchema);
