const { default: mongoose } = require('mongoose');
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

    },

    

    deleteStudent: async(req, res, next) =>{
        const id = req.params.id
    try{
        const student = await student.findByIdAndRemove(id)
        if(!student){
            throw(createError(404, "student does not exist"))
        }
        res.send(student);
    } catch (error) {
        console.log(error.message)
        if(error instanceof mongoose.CastError){
            next(createError(400, "Invalid student id"));
        }
    }

},

updateStudent: async (req, res, next) => {
    const id = req.params.id;
    try {
        const updatedStudent = await Student.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!updatedStudent) {
            throw createError(404, "Student does not exist");
        }
        res.send(updatedStudent);
    } catch (error) {
        console.log(error.message);
        if (error instanceof mongoose.CastError) {
            next(createError(400, "Invalid student ID"));
            return;
        }
        next(error);
    }
}
}