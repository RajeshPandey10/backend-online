import express from "express";
import {getProfile,register,login} from '../controllers/user.controller.js'
import { isAuth } from "../middlewares/auth.middleware.js";
const userRouter = express.Router()


userRouter.post("/register",register)
userRouter.post("/login",login)
userRouter.get('/userprofile',isAuth,getProfile)
export default userRouter