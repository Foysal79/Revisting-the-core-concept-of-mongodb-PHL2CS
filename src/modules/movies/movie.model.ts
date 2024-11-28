import { model, Schema } from "mongoose";
import { MovieModel, TMovie, TMovieMethods, TReview } from "./movie.interface";
import { format } from "date-fns";
import slugify  from "slugify"

const reviewSchema = new Schema<TReview>({
    email : { type: String, required : true },
    rating : {type : Number, required : true},
    comment : {type : String, required : true}
})

const movieSchema = new Schema<TMovie, MovieModel, TMovieMethods>({
    title : {type: String, required : true},
    description : {type : String, required : true},
    releaseDate : {type : Date, required : false },
    genre : {type: String, required : true},
    isDeleted: {type : Boolean, required : true, default : false},
    viewCount : {type : Number, default : 0},
    reviews : [reviewSchema],
    slug: {type : String}
})

//* Create Slug 
// movieSchema.pre('save', async function(next){
//     const date = format(this.releaseDate, "dd-MM-yyyy");
//      this.slug = slugify(`${this.title}-${date}`, {
//         lower: true,
//     })
//     next();
// })

//* create slug for Instance Methods 
movieSchema.method('createSlug', function createSlug(payload : TMovie) {
    const date = format(payload.releaseDate, "dd-MM-yyyy");
    const slug = slugify(`${payload.title}-${date}`, {
        lower : true,
    })
    return slug;
  });

export const Movie = model<TMovie, MovieModel>('Movie', movieSchema);
