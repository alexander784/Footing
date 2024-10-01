import React from 'react';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
    <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center h-75">
    <div className="flex flex-col mb-6 lg:mb-0 lg:w-1/3">
        <p className="text-xl font-bold">Black Stars</p>
        <h2>Pardmore Road</h2>
        <h2>Pard Bridge</h2>
    </div>

    <div className="flex flex-col lg:flex-row lg:space-x-8 text-center lg:text-left mb-6 lg:mb-0 lg:w-1/3">
        <a href="#about" className="mb-2 lg:mb-0 hover:text-gray-400">About Us</a>
        <a href="#services" className="mb-2 lg:mb-0 hover:text-gray-400">Services</a>
        <a href="#contact" className="mb-2 lg:mb-0 hover:text-gray-400">Contact</a>
        <a href="#privacy" className="hover:text-gray-400">Privacy Policy</a>
    </div>

    {/* Right Column: Social Media Icons */}
    {/* <div className="flex space-x-6 lg:w-1/3 justify-center lg:justify-end">
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

      <div className="text-center text-white mt-6">
        <p>&copy; {new Date().getFullYear()} Black stars. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
