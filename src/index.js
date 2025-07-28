import express from "express"
import connectDB from "./db/dbconnetction.js"
import userRouter from "./routes/user.route.js"
import fs from "fs"
import userData from "./data/userData.js"
import User from "./models/user.model.js"

const app = express()

app.use(express.json())
const log =`${Date.now()}: hello request listened`

// const user = userData
// const person = {
//   name:"demo",
//   age:123,
//   faculty:"something",
//   height:5

// }
// const {name,age,faculty,height} = person


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


// app.get("/api/users",(req,res)=>{
  
//  res.status(200).send(user)
// })

// app.post("/api/users",(req,res)=>{
//  const {name,username}= req.body;
//  const newUser = {
//   id:userData.length + 1,
//   name,
//   username
//  }
//  userData.push(newUser)

//  res.status(201).send({
//   message:"user created successfully",
//   data:newUser
//  })
// })

//post
// app.get("/api/v1/users/:id",(req,res)=>{
//   // console.log(req.params.id)
//   const {id} = req.params
//   const parsedId = parseInt(id);
//   const specificUser =  userData.find((user)=>user.id ===parsedId)

//   res.status(200).send(specificUser)
// })
// app.use("api/v1/books",pass)

app.post("/user",async(req,res)=>{
  try {
    const {username,email,password} =req.body;
    const user = await User.create({
      username,
      email,
      password
    })
    
    res.status(201).send({
      message:"created",
      data:user
    })
  } catch (err) {
    console.log("eroor",err)
  }
})

app.listen(8000,(req,res)=>{
  console.log("server is running")
  
  connectDB()
})