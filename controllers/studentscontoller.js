const Student = require('../models/students');
const createError = require('http-errors');

module.exports = {

    getAllStudents: async(req, res, next) =>{
       try{
           const result = await Student.find()
           res.send(result)
       } catch (error){
        console.log(error.message);
       }
    },

    AddStudent: async(req,res, next)=>{
        try {
            const student = new Student(req.body)
            const result = await  student.save();
            res.send(result)

        }catch (error) {
            console.log(error.message);
            next(error)
        }

    }
}