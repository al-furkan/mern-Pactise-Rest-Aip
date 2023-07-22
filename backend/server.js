const express = require('express');
const router = require('./routes/goalRoutes');
const { errorHandaler } = require('./middleware/errorMiddlware');
const  dotenv = require('dotenv').config();
const port =process.env.PORT || 5000;



const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false}))



app.use('/api/goals',router);


app.use(errorHandaler);

app.listen(port, ()=>{
    console.log (`server is running on port https//localhost: ${port}`);
})