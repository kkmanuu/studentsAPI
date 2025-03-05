const express = require('express');
const studentsroutes = require('./routes/studentsRoute');
const lecturersroutes = require('./routes/lecturersRoute');
const authroutes = require('./routes/authRoute');
const createError = require('http-errors');
const helmet  = require('helmet');
const rateLimit = require('express-rate-limit');
const app = express();
require('dotenv').config();
require('./helpers/init_mongodb');

app.use(express.json());
app.use("/students",studentsroutes )
app.use("/lecturers" , lecturersroutes)
app.use("/api/auth",authroutes)

app.use(helmet());

const limiter = rateLimit({
    max: 2,
    windowMs: 10 * 1000,
    message: 'Too many requests from this IP, please try again in an hour',
});
app.use("/api", limiter);

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

