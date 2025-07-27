import express from "express"
import connectDB from "./db/dbconnetction.js"
import userRouter from "./routes/user.route.js"
const app = express()
app.use(express.json())



// const person = {
//   name:"demo",
//   age:123,
//   faculty:"something",
//   height:5

// }
// const {name,age,faculty,height} = person


app.get("/health",(req,res)=>{
    res.status(200).json({
        message:"running"
    })
})

app.use("/api/users",userRouter)
// app.use("api/v1/books",pass)



app.listen(8000,(req,res)=>{
  console.log("server is running")
  connectDB()
})