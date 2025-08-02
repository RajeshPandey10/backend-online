import express from "express";
import {getProfile,register,login} from '../controllers/user.controller.js'
const userRouter = express.Router()


userRouter.post("/register",register)
userRouter.post("/login",login)
export default userRouter