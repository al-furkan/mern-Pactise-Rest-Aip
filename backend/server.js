const path = require('path');
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

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
      )
    );
  } else {
    app.get('/', (req, res) => res.send('Please set to production'));
  }

app.use(errorHandler);

app.listen(port, ()=>{
    console.log (`server is running on port https//localhost: ${port}`);
    
})