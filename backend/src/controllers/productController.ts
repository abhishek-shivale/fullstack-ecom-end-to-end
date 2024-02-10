import productModel from "../models/productModel.js";
import { Request, NextFunction, Response } from "express"
import asyncFunction from "../middlewares/asyncFunction.js";
import SendToken from "../utils/sendToken.js";
import SendError from "../utils/SendError.js";

export const getAllProduct = asyncFunction(async(req:Request,res:Response,next:NextFunction)=>{

})

export const getProduct = asyncFunction(async(req:Request,res:Response,next:NextFunction)=>{

})

export const getProductDetails = asyncFunction(async(req:Request,res:Response,next:NextFunction)=>{

})