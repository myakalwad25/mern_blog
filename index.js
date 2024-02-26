import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
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
app.use("/api/user",userRoutes);
app.use('/api/auth',authRoutes)

app.get('/',(req,res)=>{
    res.send("home")
})
app.listen(3000,()=>{
    console.log("server is running on port 3000!!");
});  