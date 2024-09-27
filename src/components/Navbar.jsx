import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className='bg-gray-900 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <a href='/' className='text-white text-lg font-bold'>Footing</a>
        <div className='hidden md:flex space-x-8'>
          <a href='#' className='text-gray-300 hover:text-white'>Team</a>
          <a href='#' className='text-gray-300 hover:text-white'>News</a>
          <a href='#' className='text-gray-300 hover:text-white'>New signings</a>
          <a href='/player' className='text-gray-300 hover:text-white'>Players</a>
          <a href='#' className='text-gray-300 hover:text-white'>Shop</a>
          <a href='#' className='text-gray-300 hover:text-white'>Gallery</a>
          <a href='#' className='text-gray-300 hover:text-white'>Contact Us</a>
        </div>

        <div className='hidden md:block'>
          <a href='#' className='bg-orange-900 text-white px-4 py-2 rounded hover:bg-orange-600'>Log in</a>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMobileMenu} className='text-white focus:outline-none'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      <div className={`md:hidden mt-4 space-y-2 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <a href='#' className='block text-gray-300 hover:text-white'>Team</a>
        <a href='#' className='text-gray-300 hover:text-white'>About</a>
        <a href='#' className='text-gray-300 hover:text-white'>Footing</a>
        <a href='#' className='text-gray-300 hover:text-white'>Royal</a>
        <a href='#' className='text-gray-300 hover:text-white'>Shop</a>
        <a href='#' className='text-gray-300 hover:text-white'>Gallery</a>
        <a href='#' className='text-gray-300 hover:text-white'>Contact Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
