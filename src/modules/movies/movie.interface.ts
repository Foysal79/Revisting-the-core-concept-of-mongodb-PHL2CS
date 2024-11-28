import { Model } from "mongoose";

export type TReview = {
    email : string;
    rating : number;
    comment : string;
}

export type TMovie = {
    title : string;
    description : string;
    releaseDate : Date;
    genre : string;
    isDeleted: boolean;
    viewCount : number;
    reviews : TReview[];
    slug?: string;
}


//* put all user instance methods in this interface
export type TMovieMethods ={
    createSlug(payload : TMovie) : string;
}

export type MovieModel = Model<TMovie, Record<string, unknown> , TMovieMethods>