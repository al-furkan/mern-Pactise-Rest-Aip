const express = require('express');

const color = require('colors')

const router = require('./routes/goalRoutes');
const { errorHandler } = require('./middleware/errorMiddlware');
const Userouter = require('./routes/userRoutes');
const connectDB = require('./config/db');
const  dotenv = require('dotenv').config();
const port =process.env.PORT || 5000;
 connectDB();


const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false}))



app.use('/api/goals',router);
app.use('/api/user',Userouter);



app.use(errorHandler);

app.listen(port, ()=>{
    console.log (`server is running on port https//localhost: ${port}`);
    
})