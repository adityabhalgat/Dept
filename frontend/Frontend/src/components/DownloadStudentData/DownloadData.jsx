import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Document, Page, Text, View, Image, PDFDownloadLink, StyleSheet } from '@react-pdf/renderer';
import Chart from 'chart.js/auto';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  table: {
    display: 'table',
    width: 'auto',
    marginBottom: 20,
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableCol: {
    width: '25%',
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
  },
  chartContainer: {
    marginBottom: 20,
    textAlign: 'center',
  },
  chartTitle: {
    marginBottom: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

const DownloadStudentData = () => {
  const [studentsData, setStudentsData] = useState([]);
  const [statusMessage, setStatusMessage] = useState('');
  const [chartImages, setChartImages] = useState([]);
  const [rollNumber, setRollNumber] = useState('');

  useEffect(() => {
    const fetchStudentsData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/students');
        setStudentsData(response.data);
        generateCharts(response.data);
      } catch (error) {
        console.error('Error fetching student data:', error);
        setStatusMessage('Failed to fetch student data.');
      }
    };

    fetchStudentsData();
  }, []);

  const generateCharts = async (data) => {
    const images = await Promise.all(
      data.map(async (student) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const chartData = {
          labels: student.assignments.map((_, index) => `Assignment ${index + 1}`),
          datasets: [
            {
              label: 'Assignment Scores',
              data: student.assignments,
              backgroundColor: 'rgba(54, 162, 235, 0.5)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
          ],
        };

        new Chart(ctx, {
          type: 'bar',
          data: chartData,
          options: {
            responsive: false,
            plugins: {
              legend: { display: false },
              title: { display: true, text: `Scores for ${student.name}` },
            },
          },
        });

        return new Promise((resolve) => {
          setTimeout(() => {
            const image = canvas.toDataURL('image/png');
            resolve(image);
          }, 100);
        });
      })
    );
    setChartImages(images);
  };

  const PDFDocument = () => {
    // Filter data based on roll number, ensuring case insensitivity and trimming whitespace
    const filteredData = rollNumber
      ? studentsData.filter((student) => student.rollNo.toString().trim() === rollNumber.trim())
      : studentsData;

    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <Text style={{ fontSize: 22, textAlign: 'center', marginBottom: 20 }}>Student Data Report</Text>

          <View style={styles.section}>
            <Text style={{ fontSize: 18 }}>Student List:</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableCol}>Roll Number</Text>
                <Text style={styles.tableCol}>Name</Text>
                <Text style={styles.tableCol}>Assignment Scores</Text>
              </View>
              {filteredData.length > 0 ? (
                filteredData.map((student) => (
                  <View style={styles.tableRow} key={student.rollNo}>
                    <Text style={styles.tableCol}>{student.rollNo}</Text>
                    <Text style={styles.tableCol}>{student.name}</Text>
                    <Text style={styles.tableCol}>{student.assignments.join(', ')}</Text>
                  </View>
                ))
              ) : (
                <Text style={styles.tableCol}>No data found for the specified roll number.</Text>
              )}
            </View>
          </View>

          {filteredData.map((student, index) => (
            <View style={styles.chartContainer} key={student.rollNo}>
              <Text style={styles.chartTitle}>Assignment Scores for {student.name}</Text>
              {chartImages[index] && <Image src={chartImages[index]} style={{ width: '100%', height: 200 }} />}
            </View>
          ))}
        </Page>
      </Document>
    );
  };

  return (
    <div className="min-h-screen bg-blue-100 w-[131%] ">
      {/* Navigation Bar */}
      <nav className="bg-blue-900 p-4 md:p-6 lg:p-8">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <a
              onClick={() => {
                window.location.href = '/login';
              }}
              className="text-white text-2xl font-semibold md:text-3xl lg:text-4xl"
            >
              Pune Institute of Computer Technology
            </a>
            <p className="text-xl">Department of Computer Engineering</p>
          </div>
          <ul className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
            <li>
              <a href="about" className="text-white hover:text-blue-300 transition duration-300">
                About
              </a>
            </li>
            <li>
              <a href="contact" className="text-white hover:text-blue-300 transition duration-300">
                Contact
              </a>
            </li>
            <li>
              <button
                onClick={() => {
                  window.location.href = '/login';
                }}
                type="button"
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300 md:px-6 md:py-3 lg:px-8 lg:py-4"
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Download PDF Section */}
      <section className="container mx-auto py-16 px-4 md:py-20 md:px-6 lg:py-24 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Download Student Data</h2>

        <input
          type="text"
          placeholder="Enter Roll Number (optional)"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
          className="border border-gray-300 p-2 mb-4 rounded"
        />

        {statusMessage ? (
          <p className="text-red-500">{statusMessage}</p>
        ) : chartImages.length === studentsData.length ? (
          <div className="mb-8">
            <PDFDownloadLink document={<PDFDocument />} fileName="student_data_report.pdf">
              {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
            </PDFDownloadLink>
          </div>
        ) : (
          <p>Generating charts, please wait...</p>
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

export default DownloadStudentData;
