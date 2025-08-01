
import mongoose,{Schema} from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = Schema({
    username:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    
    password:{
        type:String,
        required:true
    }
},{timestamps:true})   

userSchema.pre("save",async function (next){
    if(!this.isModified("password")){
        return next;
    }

    try {
        const salt = await bcrypt.genSalt(10)
        this.password =await  bcrypt.hash(this.password,salt)
        console.log(salt)
        console.log(`password hashed!! for user ${this.username} `)
        next;
        
    } catch (error) {
        console.log("error when hashing",error)
        next(error);
    }
})
userSchema.methods.matchPassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
};

const User = mongoose.model("User",userSchema)
export default User