import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataManagement = () => {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editStudent, setEditStudent] = useState(null);
  const [newStudent, setNewStudent] = useState({ rollNo: '', name: '', assignments: [] });
  const [statusMessage, setStatusMessage] = useState('');
  const [newAssignment, setNewAssignment] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDelete = async (studentId) => {
    try {
      await axios.delete(`http://localhost:5000/api/students/${studentId}`);
      setStudents(students.filter((student) => student._id !== studentId));
      setStatusMessage('Student deleted successfully!');
    } catch (error) {
      console.error('Error deleting student:', error);
      setStatusMessage('Error deleting student.');
    }
  };

  const handleEdit = (student) => {
    setEditStudent(student);
    setNewAssignment(''); // Clear newAssignment when editing a student
  };

  const handleNewStudentChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleAddStudent = async () => {
    // Validation for empty fields
    if (!newStudent.rollNo || !newStudent.name || newStudent.assignments.length === 0) {
      setStatusMessage('Roll No, Name, and at least one Assignment score are required.');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:5000/api/students', {
        rollNo: newStudent.rollNo,
        name: newStudent.name,
        assignments: newStudent.assignments.map(Number),  // Ensure assignments are numbers
      });
  
      // After successfully adding a student, update the list
      setStudents([...students, response.data]);  // Add the new student to the list
      setStatusMessage('Student added successfully!');
      
      // Clear the input fields after adding
      setNewStudent({
        rollNo: '',
        name: '',
        assignments: [],
      });
    } catch (error) {
      console.error('Error adding student:', error);
      setStatusMessage('Error adding student: ' + (error.response?.data?.message || error.message));
    }
  };
  
  
  const handleUpdateStudent = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/students/${editStudent._id}`, editStudent);
      setStudents(students.map((student) => (student._id === editStudent._id ? response.data : student)));
      setEditStudent(null);
      setStatusMessage('Student updated successfully!');
    } catch (error) {
      console.error('Error updating student:', error);
      setStatusMessage('Error updating student.');
    }
  };

  // Handle adding new assignment in the edit student form
  const handleAddAssignmentToEdit = () => {
    if (newAssignment) {
      setEditStudent((prev) => ({
        ...prev,
        assignments: [...prev.assignments, Number(newAssignment)],
      }));
      setNewAssignment(''); // Clear input field after adding
    }
  };

  // Handle adding new assignment for the new student
  const handleAddAssignmentToNewStudent = () => {
    if (newAssignment) {
      setNewStudent((prev) => ({
        ...prev,
        assignments: [...prev.assignments, Number(newAssignment)],
      }));
      setNewAssignment(''); // Clear input field after adding
    }
  };

  // Handle updating assignment for the edited student
  const handleUpdateAssignment = (index, value) => {
    const updatedAssignments = [...editStudent.assignments];
    updatedAssignments[index] = Number(value);
    setEditStudent({ ...editStudent, assignments: updatedAssignments });
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-blue-50 ">
      {/* Navigation Bar */}
      <nav className="bg-blue-900 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div>
          <a
            onClick={() => {
              window.location.href = '/';
            }}
            className="text-white text-2xl font-semibold md:text-3xl lg:text-4xl cursor-pointer"
          >
            Pune Institute of Computer Technology&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </a>
          <p className='text-xl'>Department of Computer Engineering</p>
            </div>
          <ul className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
            <li><a href="about" className="text-white hover:text-blue-300 transition duration-300">About</a></li>
            <li><a href="contact" className="text-white hover:text-blue-300 transition duration-300">Contact</a></li>
            <li>
              <button onClick={() => {
                window.location.href = '/login';
              }} type="button" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300 md:px-6 md:py-3 lg:px-8 lg:py-4">
                Login
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Data Management Section */}
      <section className="container mx-auto py-16 px-4 md:py-20 md:px-6 lg:py-24 lg:px-8">
        <h2 className="text-5xl font-bold text-blue-900 mb-6 text-center">Manage Students</h2>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search student by name..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="block w-full max-w-md mx-auto p-2 border text-black bg-white border-gray-300 rounded-lg shadow text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Status Message */}
        {statusMessage && (
          <p className={`mb-4 text-sm ${statusMessage.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
            {statusMessage}
          </p>
        )}

        {/* Student List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredStudents.map((student) => (
            <div key={student._id} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">{student.name}</h3>
              <p className="text-lg text-gray-600 mb-2">Roll No: {student.rollNo}</p>
              <p className="text-lg text-gray-600 mb-4">Assignments: {student.assignments.join(', ')}</p>
              <button
                onClick={() => handleEdit(student)}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-yellow-600 transition duration-300"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(student._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {/* Edit Student Form */}
        {editStudent && (
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Edit Student</h3>
            <input
              type="text"
              name="name"
              value={editStudent.name}
              onChange={(e) => setEditStudent({ ...editStudent, name: e.target.value })}
              className="block w-full max-w-md p-2 mb-4 border  text-black bg-white border-gray-300 rounded-lg shadow text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Student Name"
            />
            <h4 className="text-lg font-semibold">Assignments:</h4>
            {editStudent.assignments.map((assignment, index) => (
              <input
                key={index}
                type="number"
                value={assignment}
                onChange={(e) => handleUpdateAssignment(index, e.target.value)}
                className="block w-full max-w-md p-2 mb-2 border  text-black bg-white border-gray-300 rounded-lg shadow text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={`Assignment ${index + 1}`}
              />
            ))}
            <div className="flex space-x-2 mb-4">
              <input
                type="number"
                value={newAssignment}
                onChange={(e) => setNewAssignment(e.target.value)}
                className="block w-full max-w-md p-2 border  text-black bg-white border-gray-300 rounded-lg shadow text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="New Assignment Score"
              />
              <button
                onClick={handleAddAssignmentToEdit}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300"
              >
                Add
              </button>
            </div>
            <button
              onClick={handleUpdateStudent}
              className="bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600 transition duration-300"
            >
              Update Student
            </button>
          </div>
        )}

        {/* Add New Student Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-4xl font-bold text-blue-900 mb-4">Add New Student</h3>
          <input
            type="text"
            name="name"
            value={newStudent.name}
            onChange={handleNewStudentChange}
            className="block w-full max-w-md p-2 mb-4 border text-black bg-white border-gray-300 rounded-lg shadow text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Student Name"
          />
          <input
            type="text"
            name="rollNo"
            value={newStudent.rollNo}
            onChange={handleNewStudentChange}
            className="block w-full max-w-md p-2 mb-4 border text-black bg-white border-gray-300 rounded-lg shadow text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Roll No"
          />
          <h4 className="text-lg font-semibold">Assignments:</h4>
          {newStudent.assignments.map((assignment, index) => (
            <input
              key={index}
              type="number"
              value={assignment}
              className="block w-full max-w-md p-2 mb-2 border text-black bg-white border-gray-300 rounded-lg shadow text-sm"
              readOnly
            />
          ))}
          <div className="flex space-x-2 mb-4">
            <input
              type="number"
              value={newAssignment}
              onChange={(e) => setNewAssignment(e.target.value)}
              className="block w-full max-w-md p-2 border text-black bg-white border-gray-300 rounded-lg shadow text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="New Assignment Score"
            />
            <button
              onClick={handleAddAssignmentToNewStudent}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300"
            >
              Add
            </button>
          </div>
          <button
            onClick={handleAddStudent}
            className="bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600 transition duration-300"
          >
            Add Student
          </button>
        </div>
      </section>
    </div>
  );
};

export default DataManagement;
