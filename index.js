const express = require('express');
const studentsroutes = require('./routes/studentsRoute');
const app = express();
require('dotenv').config();
require('./helpers/init_mongodb');

app.use(express.json());
app.use("/students",studentsroutes )

app.listen(process.env.port || 4000 , function(){
    console.log('Now Listening for request on:http://localhost:4000')
});

