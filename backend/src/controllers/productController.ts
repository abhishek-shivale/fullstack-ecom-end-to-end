import productModel, { Rating } from "../models/productModel.js";
import { Request, NextFunction, Response, response } from "express"
import asyncFunction from "../middlewares/asyncFunction.js";
import {v4 as uuidv4} from 'uuid'
import SendToken from "../utils/sendToken.js";
import SendError from "../utils/SendError.js";



export const getAllProduct = asyncFunction(async(req:Request,res:Response,next:NextFunction)=>{
    const AllProduct = await productModel.find({})
    return res.status(200).json({
        success: true,
        AllProduct
    })
})

//not neccesssary 
export const getProduct = asyncFunction(async(req:Request,res:Response,next:NextFunction)=>{
    const id = req.params.product
    if(!id){
        SendError('Product Id Not found',res,411)
    }
    const getOneProduct = await productModel.findOne({id:id})
    res.status(200).json({
        getOneProduct,
        success:true
    }) 
})

export const productIncart = asyncFunction(async(req:Request,res:Response,next:NextFunction)=>{
    const productIds: string[] = req.body.productIds;
    if(!productIds){
        return SendError('product Not Found', res, 411)
    }
    const products = await productModel.find({ id: { $in: productIds } });
    res.status(200).json({
        success:true,
        products
    })
})

//Search Product and Filter /search?searchterm=&category=&price=&rating=

export const searchProduct = asyncFunction(async(req:Request,res:Response,next:NextFunction)=>{
    
})


//admin
export const createProduct = asyncFunction(async(req:Request, res:Response, next:NextFunction)=>{
    const {title,description,price,category,image, rating} = req.body
    if(!title || !description || !price || !category || !image || !rating){
        return SendError('SmoeThing is Misssing',res,411)
    }
    const id = uuidv4()
    const newProduct = await productModel.create({
        id,
        title,
        description,
        price,
        category,image,rating
    })
    await newProduct.save()
    res.status(200).json({
        success: true,
        message: 'product is added successfully'
    })
})


// Edit product /admin/product/edit?productid=
interface Product{
    title:string,
    description:string,
    price:string,
    category:[string],
    image:string,
    rating:Rating
}
export const editProduct = asyncFunction(async(req:Request, res:Response, next:NextFunction)=>{  
    const id = req.params.productid
    const product:any = await productModel.findOne({id})
    if(!product){
        return SendError('Product Not found',res,411)
    }
    const bodyKeys: Array<keyof Product> = ['title', 'description', 'price', 'category', 'rating', "image"];

    bodyKeys.forEach((key)=>{
        if(req.body[key]){
            product[key] = req.body.key
        }
    })
    await product.save()
})