const student = require('../models/students');
const students = require('../models/students');

module.exports = {

    AddStudent: async(req,res, next)=>{
        try {
            const student = new student(req.body)
            const result = await  student.save();
            res.send(result)

        }catch (error) {
            console.log(error.message);
            next(error)
        }

    }
}