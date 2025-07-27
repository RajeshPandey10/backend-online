import express from "express";
import {getProfile} from '../controllers/user.controller.js'
const userRouter = express.Router()

userRouter.get("/profile",getProfile)

export default userRouter