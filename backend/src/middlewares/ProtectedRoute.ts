import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request as ExpressRequest, Response, NextFunction } from 'express';
import SendError from '../utils/SendError.js';

interface CustomRequest extends ExpressRequest {
    id?: number; 
}
const ProtectedRoute = (req: CustomRequest, res: Response, next: NextFunction) => {
    const token:string | undefined = req.body.token; 

    if (!token) {
         SendError('Token Missing', res, 400);
        return; 
    }
    try {
        const key = 'Ecommerce';
        const decoded: any = jwt.verify(token, key);
        req.id = decoded.id;
        next();
    } catch (error) {
       return SendError('Token Verification Failed', res, 400);
    }
};


export default ProtectedRoute