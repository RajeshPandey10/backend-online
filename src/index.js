import express from "express"
import connectDB from "./db/dbconnetction.js"
import userRouter from "./routes/user.route.js"

import userData from "./data/userData.js"
import User from "./models/user.model.js"

const app = express()

app.use(express.json())


app.get("/health",(req,res)=>{
//   fs.appendFile("log.txt",log,(err)=>{
//   if(err){
//     console.log("errr",err)
//     return
//   }
//   res.end("hello world from server")
// })
// console.log(req)
    res.status(200).json({
        message:"running"
    })
})

app.use("/api/v1/users",userRouter)



app.listen(8000,(req,res)=>{
  console.log("server is running")
  
  connectDB()
})