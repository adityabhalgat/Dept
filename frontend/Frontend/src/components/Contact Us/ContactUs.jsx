import React from 'react';

const ContactUs = () => {
  return (
    <section className="min-h-screen bg-blue-100">
        {/* Navigation Bar */}
        <nav className="bg-blue-900 p-4 md:p-6 lg:p-8">
            <div className="container mx-auto flex justify-between items-center">
              <div>
            <a onClick = {() => {
                  window.location.href = "/"; // Replace with actual login page URL
            }}className="text-white text-2xl font-semibold md:text-3xl lg:text-4xl">Pune Institute of Computer Technology</a>
            <p className='text-xl'>Department of Computer Engineering</p>
            </div>
            <ul className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
                <li>
                    <a onClick = {() => {
                        window.location.href = "/"; // Replace with actual login page URL
                    }} 
                className="text-white hover:text-blue-300 transition duration-300">Home</a></li>
                <li><a href="about" className="text-white hover:text-blue-300 transition duration-300">About</a></li>
                <li>
                <button onClick = {() => {
                            window.location.href = "/login";
                        }} 
                        type="button" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300 md:px-6 md:py-3 lg:px-8 lg:py-4">
                    Login
                </button>
                </li>
            </ul>
            </div>
        </nav>

      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16 md:py-20 lg:py-24 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl lg:text-2xl">We'd love to hear from you!</p>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8 py-12 px-4 md:px-6 lg:px-8">
        
        {/* Contact Information Section */}
        <div className="w-full md:w-1/2 bg-blue-900 text-white p-10 rounded-md shadow-lg">
          <h2 className="text-5xl font-extrabold mb-6">Contact Information</h2>
          <div className="flex items-start mb-4">

            <div>
              <p>📞&nbsp;&nbsp;ABCD: (+91) XXXXX XXXXX</p>
              <p>📞&nbsp;&nbsp;EFGH: (+91) XXXXX XXXXX</p>
            </div>
          </div>

          <div className="flex items-start mb-4">

            <p>📧&nbsp;&nbsp;ABCD@gmail.com</p>
          </div>

          <div className="flex items-start mb-4">

            <p>
            📍&nbsp;&nbsp;Pune Institute of Computer Technology, Behind Bharati &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vidyapeeth, Dhankawadi, Pune, Maharashtra, 411043
            </p>
          </div>

            <div className="flex justify-center z-50">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.576077647539!2d73.8482586737186!3d18.45754717109928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sSCTR&#39;S%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1723792742131!5m2!1sen!2sin"
                width="100%"
                height="223"
                className="rounded-lg sm:w-3/4 lg:w-2/3"
                allowFullScreen
                loading="lazy"
                ></iframe>
            </div>
        </div>

        {/* Send a Message Form Section */}
        <div className="w-full md:w-1/2 bg-white p-8 rounded-md shadow-lg">
          <h2 className="text-5xl text-blue-900 mb-6 font-extrabold">Send a Message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium mb-2 text-blue-900">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-transparent border text-black border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium mb-2 text-blue-900">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-transparent border text-black border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg font-medium mb-2 text-blue-900">Message</label>
              <textarea
                id="message"
                className="w-full px-4 py-2 bg-transparent text-black border border-gray-300 rounded-md focus:outline-none"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-lg">&copy; 2023 Teacher's Data Portal. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default ContactUs;
