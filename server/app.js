import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/database.js'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/authRoutes.js'
dotenv.config()
import cors from "cors"

let app = express();



app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser('GCC@LTD$2024')); // Use same secret as JWT


app.use('/api/auth', authRoutes);




connectDb().then(()=>{
    console.log('DB connected to mongodb');
    app.listen(34567,()=>{
        console.log('server is running on port 34567....');
    })
}).catch((err)=>{
    console.log(err);
})



