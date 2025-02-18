const express = require('express');
const routes = require('./routes/api');
const app = express();

app.listen(process.env.port || 4000 , function(){
    console.log('Now Listening for request on:http://localhost:4000')
});


app.use(routes);