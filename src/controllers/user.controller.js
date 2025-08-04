
import User from "../models/user.model.js";
export const getProfile = (req,res)=>{
    console.log(req.user)
    res.status(200).json({
      message:"okay that much for today"
    })

}

export const register = async (req,res)=>{
  try {
    
    const {username,email,password} = req.body;
    if(!username || !email || !password){
      res.status(400).json({
        message:"All field are required"
      })
      return
    }
    const ifUser = await User.findOne({email})
    if(ifUser){
      res.status(400).json({
        message:"user already exist"
      })
      return
    }
   
    User.create({
      username,
      email,
      password
    })
    const userData = {username,email,password}
    res.status(201).send({
      message:"user created",
      data:userData
    })
  } catch (err) {
    console.log("error while registering",err)
  }
}
 export const login = async (req,res)=>{
 try {
   const {email,password} = req.body
  if(!email || !password){
    res.status(400).json({
      message:"All field are required"
    })
    return 
  }
  const user = await User.findOne({email})
  if(!user || !(await user.matchPassword(password))){
    return res.status(401).json({
      message:"invalid email or password"
    })
  }
 
  const token =user.generateAuthToken();
  res.status(200).json({
    message:"user logged in",
    data:{user,token}
  })
 } catch (error) {
  console.log("eror login",error)
 }
 }

