import jwt from 'jsonwebtoken'
import { Response } from 'express'

const SendToken = (id:number, res:Response, statusCode:number) => {
    const key = 'Ecommerce'
    const token =  jwt.sign({id:id},key)
    res.status(statusCode).json({
        success: true,
        token,
    })
}
export default SendToken