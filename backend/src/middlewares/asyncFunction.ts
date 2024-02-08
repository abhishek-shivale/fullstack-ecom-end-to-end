import { Request, NextFunction, Response } from "express"
const asyncFunction = (errorFunction:Function) =>{
   return (req:Request, res:Response, next:NextFunction)=>{
    try{
        errorFunction(req,res,next)
    }catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            message: 'Error in async middelware',
            error: err
        })
    }
   }
}
export default asyncFunction