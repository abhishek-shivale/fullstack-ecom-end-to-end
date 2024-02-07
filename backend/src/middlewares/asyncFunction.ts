import { Request, NextFunction, Response } from "express"
const asyncFunction = (errorFunction:Function) =>{
   return (req:Request, res:Response, next:NextFunction)=>{
    try{
        errorFunction(req,res,next)
    }catch(err){
        console.log(err)
        next(err)
    }
   }
}
export default asyncFunction