import userModel from "../models/usermodel.js";
import bcrypt from 'bcrypt'
import { Request, NextFunction, Response } from "express"
import asyncFunction from "../middlewares/asyncFunction.js";
import SendToken from "../utils/sendToken.js";
import SendError from "../utils/SendError.js";

export const registerUser = asyncFunction(async(req:Request, res:Response, next:NextFunction)=>{    
   
    const {name, email, password, gender, dob, photo, role, age} = req.body
   
    if(!{name, email, password, gender, dob, photo, role, age}){
       return SendError('Something Is missing', res, 400)
    }
   
    const already = await userModel.findOne({email:email})
   
    if(already){
       return SendError('Already have an account',res,400)
    }
   
    const hashpassword = await bcrypt.hash(password,10)   
   
    const user = await userModel.create({
        name,
        email,
        password: hashpassword,
        gender,
        dob,
        photo,
        role,
        age
    })
   
    await user.save()
   
    SendToken(user._id,res,201)
})

export const loginUser = asyncFunction(async(req:Request, res:Response, next:NextFunction)=>{
    
    const {email, password} = req.body

    const userExists = await userModel.findOne({email:email})

    if(!userExists){
      return SendError('Email Not Found', res, 404)
    }

    const passwordCheck = await bcrypt.compare(password, userExists.password)

    if(!passwordCheck){
        return SendError('invalid credentials', res, 400)
    }    
    SendToken(userExists._id,res,201)
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
    const isMatch = await bcrypt.compare(oldPassword, user?.password) 

    if(!isMatch){
        return SendError('Provided Password Dosn\'t match', res, 411 )
    }
    const hashedPssword = await bcrypt.hash(newPassword, 10)
    await userModel.findOneAndUpdate({ _id: id }, { password: hashedPssword });
    SendToken(user._id, res, 201)
})

export const updateProfile = asyncFunction(async(req:CustomRequest, res:Response, next:NextFunction)=>{
    const id = req.id
    const {name, email, dob, gender,photo, age} = req.body
    const user = await userModel.findById(id)
    if(!user){
       return SendError('User Not Found', res, 411)
    }
    if(name !== undefined){
        user.name = name
    }
    if(email !== undefined){
        user.email = email
    }
    if(dob !== undefined){
        user.dob = dob
    }
    if(gender !== undefined){
        user.gender = gender
    }
    if(photo !== undefined){
        user.photo = photo
    }
    if(age !== undefined){
        user.age = age
    }
    await user.save()
    SendToken(user._id, res, 201)
})

export const deleteUser = asyncFunction(async(req:CustomRequest, res:Response, next:NextFunction)=>{
    const id = req.id
    const deletedUser = await userModel.findOneAndDelete({_id: id})
    if (!deletedUser) {
        return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.status(200).json({ success: true, message: 'User deleted successfully' });
})