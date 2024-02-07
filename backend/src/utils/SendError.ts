import { Response } from 'express'

const SendError = (error:string, res:Response, statusCode:number) => {
  
    res.status(statusCode).json({
        success: false,
        error,
    })
}
export default SendError