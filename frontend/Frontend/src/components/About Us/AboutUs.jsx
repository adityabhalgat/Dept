import React from 'react';

function AboutUs() {
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
            <li><a href="/" className="text-white hover:text-blue-300 transition duration-300">Home</a></li>
            <li><a href="/contact" className="text-white hover:text-blue-300 transition duration-300">Contact</a></li>
            <li>
              <button type="button" onClick={()=>{
                // Redirect to login page
                window.location.href = "/login";
              }} className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300 md:px-6 md:py-3 lg:px-8 lg:py-4">
                Login
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16 md:py-20 lg:py-24">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">Learn more about our mission, vision, and team dedicated to transforming education through technology.</p>
        </div>
      </section>

      {/* About Section */}
      <main className="container mx-auto py-16 px-4 md:py-20 md:px-6 lg:py-24 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Mission</h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          At Teacher's Data Portal, our mission is to empower educators by providing tools that simplify data management and drive student success through actionable insights.
        </p>

        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

          {/* Team Member 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Aditya Bhalgat</h3>
            <p className="text-lg text-gray-600 mb-4"></p>
            <p className="text-gray-500">
              ABCDE
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Daniel Mathew</h3>
            <p className="text-lg text-gray-600 mb-4"></p>
            <p className="text-gray-500">
            PQRST
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Aditi Raje</h3>
            <p className="text-lg text-gray-600 mb-4"></p>
            <p className="text-gray-500">
                Hello!!!
            </p>
          </div>

           {/* Team Member 4 */}
           <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Aryan Nage</h3>
            <p className="text-lg text-gray-600 mb-4"></p>
            <p className="text-gray-500">
                WORLD!!!
            </p>
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

export default AboutUs;
