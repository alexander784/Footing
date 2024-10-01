import React from 'react';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
        <div className="flex items-center mb-6 lg:mb-0">
          <img
            src="https://via.placeholder.com/150x50"
            alt="Logo"
            className="w-36 h-auto"
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-8 text-center lg:text-left mb-6 lg:mb-0">
          <a href="#about" className="mb-2 lg:mb-0 hover:text-gray-400">About Us</a>
          <a href="#services" className="mb-2 lg:mb-0 hover:text-gray-400">Services</a>
          <a href="#contact" className="mb-2 lg:mb-0 hover:text-gray-400">Contact</a>
          <a href="#privacy" className="hover:text-gray-400">Privacy Policy</a>
        </div>

        {/* Right Side - Social Media Icons */}
        {/* <div className="flex space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedinIn />
          </a>
        </div> */}
      </div>
      <hr className='bg-gray-100 font-bold'/>

      {/* Copyright Section */}
      <div className="text-center text-white mt-6">
        <p>&copy; {new Date().getFullYear()} Black stars. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
