import React from 'react';
import { Link } from 'react-router-dom';

function TeachersPortal() {
  return (
    <div className="min-h-screen bg-blue-100">
      {/* Navigation Bar */}
      <nav className="bg-blue-900 p-4 md:p-6 lg:p-8">
        <div className="container mx-auto flex justify-between items-center">
        <div className='flex flex-col '>
          <a 
              onClick = {() => {
                window.location.href = "/"; 
              }}
            className="text-white text-2xl font-semibold md:text-3xl lg:text-4xl">Pune Institute of Computer Technology</a>
            <p className='text-xl'>Department of Computer Engineering</p>
            </div>
          <ul className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
            <li><Link to="/" className="text-white hover:text-blue-300 transition duration-300">Home</Link></li>
            <li><Link to="/about" className="text-white hover:text-blue-300 transition duration-300">About Us</Link></li>
            <li><Link to="/contact" className="text-white hover:text-blue-300 transition duration-300">Contact</Link></li>
            <li>
              <button type="button" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300 md:px-6 md:py-3 lg:px-8 lg:py-4">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16 md:py-20 lg:py-28">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to the Teacher's Portal</h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">Access powerful tools to enhance your teaching experience.</p>
        </div>
      </section>

      {/* Features Section */}
      <main className="container mx-auto py-16 px-4 md:py-20 md:px-6 lg:py-24 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Explore Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <Link to="/uploaddata" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Upload the Student Data</h3>
            <p className="text-lg text-gray-600 mb-4">
              Upload the student data in a structured format to get good Data Analytics and visualization results.
            </p>
            <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              Explore
            </button>
          </Link>

          {/* Feature Card 2 */}
          <Link to="/data-management" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Simplified Data Management</h3>
            <p className="text-lg text-gray-600 mb-4">
              Manage your students' data in one central location.
            </p>
            <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              Explore
            </button>
          </Link>

          {/* Feature Card 3 */}
          <Link to="/chartdata" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Data Visualisation</h3>
            <p className="text-lg text-gray-600 mb-4">
              Visualize your student data in a beautiful and engaging way, all the graphs will be automatically generated.
            </p>
            <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              Explore
            </button>
          </Link>

          {/* Feature Card 4 */}
          <Link to="/attendance-tracking" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Term Work Calculator</h3>
            <p className="text-lg text-gray-600 mb-4">
              Track and calculate the Term Work of the student.
            </p>
            <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              Explore
            </button>
          </Link>

          {/* Feature Card 5 */}
          <Link to="/downloadstudentdata" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Automated Report Generation</h3>
            <p className="text-lg text-gray-600 mb-4">
              Generate detailed reports for student performance at the click of a button.
            </p>
            <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              Explore
            </button>
          </Link>

          {/* Feature Card 6 */}
          <Link to="/sharing-options" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Seamless Sharing Options</h3>
            <p className="text-lg text-gray-600 mb-4">
              Effortlessly share insights with your colleagues and stakeholders.
            </p>
            <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              Explore
            </button>
          </Link>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-blue-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-lg">&copy; 2023 Teacher's Data Portal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default TeachersPortal;
