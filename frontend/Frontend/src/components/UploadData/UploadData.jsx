import React, { useState } from 'react';
import axios from 'axios';

const UploadData = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Handle file selection
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setUploadStatus('');
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    setIsLoading(true);
    setUploadStatus('');

    try {
      // Make the API request to the backend
      const response = await axios.post('http://localhost:5000/api/upload', formData, {
        Body: {
          'file': 'multipart/form-data',
        },
      });

      // Handle success response
      setUploadStatus('File uploaded successfully!');
      console.log('Uploaded data:', response.data);

      // You can now process the response data, e.g., generate charts
    } catch (error) {
      // Handle error response
      console.error('Error uploading file:', error);

      // Check if the server responded with an error
      if (error.response) {
        if (error.response.status === 500) {
          setUploadStatus('Server error. Please try again later.');
        } else if (error.response.status === 400) {
          setUploadStatus('Bad Request: ' + error.response.data.error);
        } else {
          setUploadStatus('Error uploading file: ' + error.message);
        }
      } else {
        setUploadStatus('Network error or server is unreachable.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-100">
      {/* Navigation Bar */}
      <nav className="bg-blue-900 p-4 md:p-6 lg:p-8">
        <div className="container mx-auto flex justify-between items-center">
          <a 
            onClick={() => {
              window.location.href = "/";
            }}
            className="text-white text-2xl font-semibold md:text-3xl lg:text-4xl"
          >
            Pune Institute of Computer Technology &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </a>
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

      {/* Upload Section */}
      <section className="container mx-auto py-16 px-4 md:py-20 md:px-6 lg:py-24 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Upload Excel File for Data Visualization</h2>

        <div className="mb-6">
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={handleFileChange}
            className="block w-full max-w-sm mx-auto text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 p-2 mb-4 shadow"
          />
        </div>

        <button
          onClick={handleUpload}
          className={`bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600 transition duration-300'}`}
          disabled={isLoading}
        >
          {isLoading ? 'Uploading...' : 'Upload File'}
        </button>

        {uploadStatus && (
          <p className={`mt-4 text-sm ${uploadStatus.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
            {uploadStatus}
          </p>
        )}
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-900  text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-lg">&copy; 2023 Teacher's Data Portal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default UploadData;
