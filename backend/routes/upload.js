const express = require('express');
const router = express.Router();
const multer = require('multer');
const xlsx = require('xlsx');
const Student = require('../models/student'); // Import the Student model

// Multer configuration for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Upload route
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Parse the uploaded XLSX file
    const fileBuffer = req.file.buffer;
    const workbook = xlsx.read(fileBuffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0]; // Assuming first sheet
    const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    // Process each row of the Excel sheet
    const studentsData = sheetData.map(row => {
      const assignments = [];
      Object.keys(row).forEach(key => {
        if (key.includes('Assignment')) {
          assignments.push(row[key]);
        }
      });

      return {
        rollNo: row['Roll No'],
        name: row['Name'],
        assignments: assignments
      };
    });

    // Insert student data into MongoDB
    const students = await Student.insertMany(studentsData);
    res.status(200).json({ message: 'Students uploaded successfully', data: students });

  } catch (error) {
    console.error('Error during file upload:', error); // More detailed error logging
    res.status(500).json({ error: 'Failed to upload and process file' });
  }
});

module.exports = router;
