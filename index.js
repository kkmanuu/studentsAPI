const express = require('express');
const studentsroutes = require('./routes/studentsRoute');
const app = express();
require('dotenv').config();
require('./helpers/init_mongodb');

app.use(express.json());
app.use("/students",studentsroutes )


//handling errors

app.use(async (req, res, next) =>{
    next(createError.NotFound());
});

//Error handler
app.use((err,req, res, next) =>{
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message:err.message,
        },
    });
});

app.listen(process.env.port || 4000 , function(){
    console.log('Now Listening for request on:http://localhost:4000')
});

