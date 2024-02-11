import jwt from 'jsonwebtoken'
import { Response } from 'express'

const SendToken = (id:number, res:Response, statusCode:number) => {
    const key = 'Ecommerce'
    const token =  jwt.sign({id:id},key)
     res.cookie('token', token, {
        // domain: 'localhost',
        // path: '/',
        expires: new Date(
            Date.now() + 7 * 24 * 60 * 60 * 1000
        ),
        httpOnly:true,
        secure:true
    })
    res.status(statusCode).json({
        success: true,
        token
    })
}
export default SendToken