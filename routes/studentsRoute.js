const express = require('express');
const studentscontoller = require('../controllers/studentscontoller');
const router = express.Router();

//  GET all students
 router.get('/getAllStudent',studentscontoller.getAllStudents);


 router.post('/Addstudent',studentscontoller.AddStudent);

 router.put('/updatestudent/:id',studentscontoller.updateStudent);


 router.delete('/:id',studentscontoller.deleteStudent);


//  PUT - Update a student by ID
router.put('/students/:id', (req, res) => {
    res.send({ type: 'Update Request' });
});

// DELETE - Delete a student by ID
router.delete('/students/:id', (req, res) => {
    res.send({ type: 'Delete Request' });
});

module.exports = router;
