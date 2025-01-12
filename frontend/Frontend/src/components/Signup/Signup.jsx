import React from 'react';

function SignupPage() {
  return (
    <div className="h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-blue-900 p-4 md:p-6 lg:p-8">
        <div className="container mx-auto flex justify-between items-center">
          <div>
          <a 
            onClick = {() => {
              window.location.href = "/login";
            }}  
            className="text-white text-2xl font-semibold md:text-3xl lg:text-4xl">Pune Institute of Computer Technology &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </a>
          <p className='text-xl'>Department of Computer Engineering</p>
            </div>

          <ul className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
            <li><a onClick = {() => {
                            window.location.href = "/login";
                    }}  
                    className="text-white hover:text-blue-300 transition duration-300">Home
                </a>
            </li>
            <li><a href="/about" className="text-white hover:text-blue-300 transition duration-300">About</a></li>
            <li><a href="/contact" className="text-white hover:text-blue-300 transition duration-300">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16 md:py-20 lg:py-24 flex-grow">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Create Your Account</h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">Join us today and get started!</p>
        </div>
      </section>

      {/* Signup Form */}
      <main className="container mx-auto py-16 px-4 md:py-20 md:px-6 lg:py-24 lg:px-8 bg-blue-100">
        <div className="bg-white p-6 md:p-8 lg:p-10 xl:p-12 rounded-lg shadow-lg w-full max-w-lg mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 text-center">Sign Up</h2>
          <form>
            <div className="mb-4">
              <label className="block text-lg md:text-xl text-gray-600 mb-2" htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                className="w-full p-4 rounded-lg border text-black bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg md:text-xl  text-gray-600 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-4 rounded-lg border text-black bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg md:text-xl text-gray-600 mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="w-full p-4 rounded-lg border text-black bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg md:text-xl text-gray-600 mb-2" htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                className="w-full p-4 rounded-lg border  text-black bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300 w-full">
              Sign Up
            </button>
          </form>
          <p className="text-lg text-gray-600 text-center mt-4">
            Already have an account? <a onClick = {() => {
                                          window.location.href = "/login";
                                        }} 
                         className="text-blue-500 hover:text-blue-700 transition duration-300">Log in</a>
          </p>
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

export default SignupPage;
