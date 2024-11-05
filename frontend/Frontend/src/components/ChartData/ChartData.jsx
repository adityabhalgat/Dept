import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Registering the required chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const ChartData = () => {
  const [studentsData, setStudentsData] = useState([]);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    const fetchStudentsData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/students');
        setStudentsData(response.data);
      } catch (error) {
        console.error('Error fetching student data:', error);
        setStatusMessage('Failed to fetch student data.');
      }
    };

    fetchStudentsData();
  }, []);

  // Helper function to generate chart data for each assignment
  const generateBarChartData = () => {
    if (!studentsData.length) return {};

    // Dynamically get the maximum number of assignments
    const maxAssignments = Math.max(...studentsData.map((student) => student.assignments.length));

    // Generate labels (student names)
    const labels = studentsData.map((student) => student.name);

    // Generate datasets (each assignment will be a separate dataset)
    const datasets = Array.from({ length: maxAssignments }, (_, index) => {
      return {
        label: `Assignment ${index + 1}`,  // Label for each assignment
        data: studentsData.map((student) => student.assignments[index] || 0), // Fetch scores, default to 0 if missing
        backgroundColor: `rgba(${54 + index * 30}, 162, 235, 0.5)`,
        borderColor: `rgba(${54 + index * 30}, 162, 235, 1)`,
        borderWidth: 1,
      };
    });

    return {
      labels,
      datasets,
    };
  };

  // Helper function to generate pie chart data (total students per assignment)
  const generatePieChartData = () => {
    if (!studentsData.length) return {};

    // Dynamically get the maximum number of assignments
    const maxAssignments = Math.max(...studentsData.map((student) => student.assignments.length));

    // Count how many students have submitted each assignment
    const assignmentCounts = Array.from({ length: maxAssignments }, (_, index) => {
      return studentsData.filter((student) => student.assignments.length > index).length;
    });

    return {
      labels: Array.from({ length: maxAssignments }, (_, index) => `Assignment ${index + 1}`),
      datasets: [
        {
          label: 'Students per Assignment',
          data: assignmentCounts,
          backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(153, 102, 255, 0.5)'],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div className="min-h-screen bg-blue-100">
      {/* Navigation Bar */}
      <nav className="bg-blue-900 p-4 md:p-6 lg:p-8">
        <div className="container mx-auto flex justify-between items-center">
            <div className=''>
          <a
            onClick={() => {
              window.location.href = "/";
            }}
            className="text-white text-2xl font-semibold md:text-3xl lg:text-4xl"
          >
            Pune Institute of Computer Technology &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </a>
          <p className='text-xl'>Department of Computer Engineering</p>
            </div>
          <ul className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
            <li><a href="about" className="text-white hover:text-blue-300 transition duration-300">About</a></li>
            <li><a href="contact" className="text-white hover:text-blue-300 transition duration-300">Contact</a></li>
            <li>
              <button onClick={() => {
                window.location.href = "/login";
              }} type="button" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300 md:px-6 md:py-3 lg:px-8 lg:py-4">
                Login
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Chart Section */}
      <section className="container mx-auto py-16 px-4 md:py-20 md:px-6 lg:py-24 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Assignment Scores (Bar & Pie Charts)</h2>

        {statusMessage ? (
          <p className="text-red-500">{statusMessage}</p>
        ) : (
          <div className="w-full max-w-4xl mx-auto">
            {studentsData.length > 0 ? (
              <>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Assignment-wise Scores</h3>
                <Bar
                  data={generateBarChartData()}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        position: 'top',
                      },
                      title: {
                        display: true,
                        text: 'Student Assignment Scores (Assignment-wise)',
                      },
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  }}
                />
                <h3 className="text-xl font-semibold text-blue-800 mt-12 mb-4">Total Students per Assignment</h3>
                <Pie
                  data={generatePieChartData()}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        position: 'top',
                      },
                      title: {
                        display: true,
                        text: 'Total Students per Assignment',
                      },
                    },
                  }}
                />
              </>
            ) : (
              <p>Loading chart data...</p>
            )}
          </div>
        )}
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-lg">&copy; 2023 Teacher's Data Portal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ChartData;
