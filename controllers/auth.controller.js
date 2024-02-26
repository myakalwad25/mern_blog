 import User from "../models/user.model.js";
 import bcryptjs from 'bcryptjs'
 
const signup = async(req,res)=>{
    const{username, email, password }=req.body;
    if(!username || !email || !password || username==="" || email ==="" ||password ==="") {
        return res.status(400).json({message:"all fields are required"});
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
        res.status(500).json({message:err.message})
        // console.log(err);
    }
}  
 
 
export default signup; 