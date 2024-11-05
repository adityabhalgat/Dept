import React from 'react';

function LandingPage() {
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
            <li><a href="about" className="text-white hover:text-blue-300 transition duration-300">About</a></li>
            <li><a href="contact" className="text-white hover:text-blue-300 transition duration-300">Contact</a></li>
            <li>
              <button onClick={() =>{
                // Redirect to login page
                window.location.href = "/login";
              }} type="button" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300 md:px-6 md:py-3 lg:px-8 lg:py-4">
                Login
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16 md:py-20 lg:py-24">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to Teacher's Data Portal</h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">Transform your data into actionable insights and drive student success.</p>
          <button type="button" onClick={() =>{
                // Redirect to login page
                window.location.href = "/signup";
              }}className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <main className="container mx-auto py-16 px-4 md:py-20 md:px-6 lg:py-24 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Interactive Data Visualizations</h3>
            <p className="text-lg text-gray-600 mb-4">
              Easily create interactive charts and graphs to help you understand your data.
            </p>
            <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              Learn More
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Simplified Data Management</h3>
            <p className="text-lg text-gray-600 mb-4">
              Easily upload, manage, and analyze your data in one place.
            </p>
            <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              Learn More
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Seamless & Easy Sharing Options</h3>
            <p className="text-lg text-gray-600 mb-4">
              Easily share your insights with colleagues and stakeholders.
            </p>
            <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              Learn More
            </button>
          </div>
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

export default LandingPage;
