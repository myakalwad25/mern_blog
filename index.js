import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import cookieParser from 'cookie-parser';
const app =express();

dotenv.config();

mongoose.connect(process.env.MONGO).then(
    ()=>{
        console.log("mongodb is connected");
    }
).catch((err)=>{
    console.log(err);
} )

app.use(express.json());
app.use(cookieParser());
app.use("/api/user",userRoutes);
app.use('/api/auth',authRoutes)
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "internal server error";
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})


app.get('/',(req,res)=>{
    res.send("home")
})


app.listen(3000,()=>{
    console.log("server is running on port 3000!!");
});  