const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  rollNo: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  assignments: {
    type: [Number], // Array to hold multiple assignment scores
    required: true
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
