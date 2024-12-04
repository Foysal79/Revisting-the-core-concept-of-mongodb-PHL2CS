import { NextFunction, Request, RequestHandler, Response } from "express"
import { Promise } from "mongoose"

export const catchAsync =  ( fn : RequestHandler) => {
    return async (req: Request , res : Response, next : NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((error : any) => {
        console.log(error);
        res.status(500).json({ 
            success : false,
            message: "Internal Server Error" ,
            error : error
        });
    })
    }
}