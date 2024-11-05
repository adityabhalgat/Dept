import React from 'react';
import LandingPage from '../src/components/Homepage/Homepage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login/Login';
import SignupPage from './components/Signup/Signup';
import ContactUs from './components/Contact Us/ContactUs';
import AboutUs from './components/About Us/AboutUs';
import TeachersPortal from './components/TeachersPortal/TeachersPortal';
import UploadData from './components/UploadData/UploadData';
import DataManagement from './components/DataManagement/DataMangement';
import ChartData from './components/ChartData/ChartData';
import DownloadStudentData from './components/DownloadStudentData/DownloadData';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/teachersportal" element={<TeachersPortal />} />
        <Route path="/uploaddata" element={<UploadData />} />  
        <Route path="/data-management" element={<DataManagement />} />  
        <Route path="/chartdata" element={<ChartData />} />  
        <Route path="/downloadstudentdata" element={<DownloadStudentData />} />

      </Routes>
    </Router>
  );
};

export default App;

