const express = require('express');
const router = express.Router();
const Student = require('../models/student');  
// @route   GET /api/students
// @desc    Get all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: 'Server error: Unable to retrieve students' });
  }
});

// @route   GET /api/students/:rollNo
// @desc    Get student by roll number
router.get('/:rollNo', async (req, res) => {
  try {
    const student = await Student.findOne({ rollNo: req.params.rollNo });
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({ message: 'Server error: Unable to retrieve the student' });
  }
});

// GET route to fetch all students with their rollNo, name, and assignments
router.get('/students', async (req, res) => {
  try {
    // Fetch all students with specific fields: rollNo, name, and assignments
    const students = await Student.find({}, { rollNo: 1, name: 1, assignments: 1 });

    // If no students found
    if (!students.length) {
      return res.status(404).json({ message: 'No students found' });
    }

    // Send the fetched students data
    res.status(200).json(students);
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error fetching students:', error);
    res.status(500).json({ message: 'Failed to fetch students' });
  }
});




// @route   POST /api/students
// @desc    Add a new student
router.post('/', async (req, res) => {
  console.log('Received request body:', req.body);  // Debugging
  const { rollNo, name, assignments } = req.body;

  if (!rollNo || !name || !Array.isArray(assignments) || assignments.length === 0) {
    return res.status(400).json({ message: 'Roll No, Name, and at least one Assignment score are required' });
  }
  
  try {
    const studentExists = await Student.findOne({ rollNo });
    if (studentExists) {
      return res.status(400).json({ message: 'Student with this roll number already exists' });
    }

    const newStudent = new Student({ rollNo, name, assignments: assignments.map(Number) });
    const savedStudent = await newStudent.save();
    console.log('Student saved:', savedStudent);  // Debugging
    res.status(201).json(savedStudent);
  } catch (err) {
    console.error('Error saving student:', err);
    res.status(500).json({ message: 'Server error: Unable to add the student' });
  }
});



const mongoose = require('mongoose');

router.put('/:id', async (req, res) => {
  const { name, assignments } = req.body;

  try {
    console.log('Updating student with ID:', req.params.id);
    console.log('Request Body:', req.body);
    
    // Check if the provided ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid student ID' });
    }

    let student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    student.name = name || student.name;
    student.assignments = assignments || student.assignments;

    const updatedStudent = await student.save();
    res.status(200).json(updatedStudent);
  } catch (err) {
    console.error('Error occurred while updating student:', err);
    res.status(500).json({ message: 'Server error: Unable to update the student' });
  }
});


// @route   DELETE /api/students/:rollNo
// @desc    Delete a student by roll number
// @route   DELETE /api/students/:rollNo
router.delete('/:id', async (req, res) => {
  console.log('Received DELETE request for ID:', req.params.id); // Log the ID for debugging
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).send('Student not found');
    }
    res.status(200).send({ message: 'Student deleted successfully' });
  } catch (error) {
    console.error('Error deleting student:', error);
    res.status(500).send({ message: 'Error deleting student' });
  }
});

module.exports = router;
