import { NextFunction, Request, Response } from "express";

const globalErrorHandling = (err :any , req : Request, res : Response, next : NextFunction) => {
    res.status(500).json({
      
      message: 'Internal Server Error',
      success : false,
      err,
  
    })
    next();
  }

  export default globalErrorHandling;