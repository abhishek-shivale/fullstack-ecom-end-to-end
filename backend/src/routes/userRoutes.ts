import express from "express"
import ProtectedRoute from "../middlewares/ProtectedRoute.js"
import { loginUser, registerUser, updateProfile, updateUserPassword, logoutUser, deleteUser } from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.route('/register').post(registerUser)
userRouter.route('/login').post(loginUser)

userRouter.route('/updatepassword').put(ProtectedRoute, updateUserPassword)
userRouter.route('/updateprofile').put(ProtectedRoute, updateProfile)

userRouter.route('/logoutuser').delete(ProtectedRoute, logoutUser)
userRouter.route('/deleteuser').delete(ProtectedRoute, deleteUser)

export default userRouter