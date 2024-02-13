import userModel from "../models/usermodel.js";
import { Request, NextFunction, Response } from "express"
import asyncFunction from "../middlewares/asyncFunction.js";
import SendToken from "../utils/sendToken.js";
import SendError from "../utils/SendError.js";
import { comparePssword, hashedPassword } from "../utils/authUtils.js";

export const registerUser = asyncFunction(async(req:Request, res:Response, next:NextFunction)=>{    
   
    const { email, password, phoneNumber } = req.body
    
    if(!phoneNumber ||  !email || !password){
       return SendError('Something Is missing', res, 400)
    }
   
    const already = await userModel.findOne({email:email})
   
    if(already){
       return SendError('Already have an account',res,400)
    }
   
    const hashpassword = await hashedPassword(password) 
   
    const user = await userModel.create({
        email:email,
        password: hashpassword,
        phoneNumber: phoneNumber
    })

    await user.save()
   
    SendToken(user._id,user.role,res,201)
})

export const loginUser = asyncFunction(async(req:Request, res:Response, next:NextFunction)=>{
    
    const {email, password} = req.body

    const userExists = await userModel.findOne({email:email})

    if(!userExists){
      return SendError('Email Not Found', res, 404)
    }

    const passwordCheck = await comparePssword(password, userExists.password)

    if(!passwordCheck){
        return SendError('invalid credentials', res, 400)
    }    
    SendToken(userExists._id,userExists.role,res,201)
})

interface CustomRequest extends Request {
    id?: number; 
}

export const updateUserPassword = asyncFunction(async(req:CustomRequest, res:Response, next:NextFunction)=>{
    const id = req.id
    const {oldPassword, newPassword} = req.body
    if(oldPassword===null || newPassword=== null){
        return SendError('Enter Password', res, 411)
    }
    const user = await userModel.findById(id)    
    
    if(!user){
       return SendError('user Not found', res, 411)
    }
    const isMatch = await comparePssword(oldPassword, user?.password) 

    if(!isMatch){
        return SendError('Provided Password Dosn\'t match', res, 411 )
    }
    const hashedPssword = await hashedPassword(newPassword)
    await userModel.findOneAndUpdate({ _id: id }, { password: hashedPssword });
    res.status(200).json({
        success: true,
        message:'Password is Updated'
    })
})

interface User{
    name: string
    email: string
    phoneNumber: number
    address: string
}
export const updateProfile = asyncFunction(async(req:CustomRequest, res:Response, next:NextFunction)=>{
    const id = req.id
    const user = await userModel.findById(id)
    if(!user){
       return SendError('User Not Found', res, 411)
    }
    
    const bodyKeys: Array<keyof User> = ['name', 'email', 'phoneNumber', 'address'];

    bodyKeys.forEach((key)=>{
        if(req.body[key]){
            user[key] = req.body.key
        }
    })
    await user.save()
    res.status(200).json({
        success: true,
        message: 'Profile Update SuccessFully'
    })
})

export const logoutUser = asyncFunction(async(req:CustomRequest, res:Response, next:NextFunction)=>{
    const id = req.id; 
    res.cookie('token',null,{
        expires: new Date(Date.now()),
        httpOnly:true,
        secure:true
    })
    res.status(200).json({
        success: true,
        message: "Logged Out"
    })

})

export const deleteUser = asyncFunction(async(req:CustomRequest, res:Response, next:NextFunction)=>{
    const id = req.id
    const deletedUser = await userModel.findOneAndDelete({_id: id})
    if (!deletedUser) {
        return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.status(200).json({ success: true, message: 'User deleted successfully' });
})