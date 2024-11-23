import { Request,Response } from "express";

export const getExample =(req:Request, res:Response):void=>{
    res.status(200).json({message:"This is am example of endpoint"});
}