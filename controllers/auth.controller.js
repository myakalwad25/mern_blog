 import User from "../models/user.model.js";
 import bcryptjs from 'bcryptjs'
import { errorHander } from "../utils/error.js";
 
const signup = async(req,res,next)=>{
    const{username, email, password }=req.body;
    if(!username || !email || !password || username==="" || email ==="" ||password ==="") {
        next(errorHander(400,"all fields are required"));
    }

    const hashPassword = await bcryptjs.hash(password,10);
    const newUser = new User({
        username,
        email,
        password: hashPassword,
    })
    try{

        await newUser.save();
        res.json({message:"Signup successful"});
        
    }
    catch(err) {
        next(err);
        // console.log(err);
    }
}  
 
 
export default signup; 