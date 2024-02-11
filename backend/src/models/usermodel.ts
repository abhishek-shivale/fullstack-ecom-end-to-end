import mongoose, { Document } from "mongoose";
import validator from 'validator'
interface User extends Document {
    name: string;
    email: string | undefined;
    password: string;
    address: string
    role: 'admin' | 'user';
    phoneNumber: Number;
    createdAt: Number;
    updatedAt: Number;
}


const userSchema = new mongoose.Schema<User>({
    name: {
        type: String,
        required: [false, 'Please Enter Name']
    },
    email: {
        type: String,
        required: [true, 'Please Enter Email'],
        unique: [true, 'Email already exists'],
        validate: validator.default.isEmail 
    },
    password: {
        type: String,
        required: [true, 'Please Enter Password']
    },
    address: {
        type: String,
        required: [false, 'Please Enter address']
    },
    role: {
        type: String,
        enum: ['admin', 'user'], 
        default: 'user'
    },
    phoneNumber: {
        type: Number,
        required: [true, 'Please Enter phoneNumber']
    }
}, {
    timestamps: true
});

const userModel = mongoose.model<User>("User", userSchema);
export default userModel;
