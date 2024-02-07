import mongoose, { Document } from "mongoose";
import validator from 'validator'

interface User extends Document {
    name: string;
    email: string | undefined;
    password: string;
    photo: string;
    role: 'admin' | 'user';
    gender: 'male' | 'female';
    dob: Date; 
    createdAt: Number;
    updatedAt: Number;
    age: Number;
}


const userSchema = new mongoose.Schema<User>({
    name: {
        type: String,
        required: [true, 'Please Enter Name']
    },
    email: {
        type: String,
        required: [true, 'Please Enter Email'],
        unique: [true, 'Email already exists'],
        validate: validator.isEmail 
    },
    password: {
        type: String,
        required: [true, 'Please Enter Password']
    },
    photo: {
        type: String,
        required: [true, 'Please Add Your Photo']
    },
    role: {
        type: String,
        enum: ['admin', 'user'], 
        default: 'user'
    },
    gender: {
        type: String,
        enum: ['male', 'female'], 
        required: [true, 'Please Enter Gender']
    },
    dob: {
        type: Date,
        required: [true, "Please enter Date of Birth"],
    },
    age: {
        type: Number,
        required: [true, 'Please Enter Age']
    }
}, {
    timestamps: true
});

const userModel = mongoose.model<User>("User", userSchema);
export default userModel;
