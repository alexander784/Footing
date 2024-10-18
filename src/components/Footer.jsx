import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import image from '../assets/image 3.png';


const Footer = () => {
  return (
    <footer className="bg-green-950 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-center items-center h-full">
        
        <div className="flex flex-col mb-6 lg:mb-0 lg:w-1/2 text-center">
          <p className="text-xl font-bold mb-4">Socials</p>
          
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mb-2 hover:text-gray-400 flex items-center justify-center">
            <FaFacebook className="mr-2" /> Facebook
          </a>
          
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mb-2 hover:text-gray-400 flex items-center justify-center">
            <FaXTwitter className="mr-2" /> Twitter
          </a>
          
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mb-2 hover:text-gray-400 flex items-center justify-center">
            <FaInstagram className="mr-2" /> Instagram
          </a>
        </div>

        <div className="flex flex-col lg:w-1/2 text-center lg:text-left">
          <p className="text-xl font-bold mb-4">Contact</p>
          <p>Pardmore Road</p>
          <p>Pard Bridge</p>
          <p>Email: info@blackstars.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>
      <div className='flex items-center justify-center mt-6'>
      <img src={image} alt='logo' className=''/>
      </div>
 

      <div className="text-center text-white mt-6">
        <p>&copy; {new Date().getFullYear()} Black Stars. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
