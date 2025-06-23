const express = require('express');
const connectDB =  require('./config/database');
const  app = express();
require('dotenv').config();
// const cookieParser = require('cookie-parser');
const cors = require('cors');


// app.use(cors({
//     origin: 'http://localhost:5173',
//     credentials: true,
// }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser('GCC@LTD$2024')); // Use same secret as JWT




connectDB().then(()=>{
    console.log('DB connected to mongodb');
    app.listen(34567,()=>{
        console.log('server is running on port 34567....');
    })
}).catch((err)=>{
    console.log(err);
})



