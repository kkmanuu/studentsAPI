const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstname:{
        type:String,
        require:[true, 'Firstname is required']
    },
    lastname:{
        type:String,
        require:[true, 'Lastname is required']
    },
    gender:{
        type: String
    }
});


const student = mongoose.model('student', studentSchema);
module.exports = student;