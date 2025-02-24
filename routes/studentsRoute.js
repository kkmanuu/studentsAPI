const express = require('express');
const routes = express.Router();

routes.get('/students', (req,res)=>{
    res.send({type:'Get Request'});
});

routes.post('/AddStudents', (req,res)=>{
    res.send({type:'Post Request'});
});

routes.put('/students/:id', (req,res)=>{
    res.send({type:'Update Request'});
});

routes.delete('/students:/id', (req,res)=>{
    res.send({type:'Delete Request'});
});

module.exports = routes;
