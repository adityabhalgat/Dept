const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import the upload and student routes
const uploadRoutes = require('./routes/upload');
const studentRoutes = require('./routes/students');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());  // For parsing JSON request bodies

// Use routes
app.use('/api', uploadRoutes);  // For file uploads
app.use('/api/students', studentRoutes);  // For student CRUD operations


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
