import React, { useState, useEffect, useRef } from 'react';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        localStorage.setItem('user', JSON.stringify(currentUser));
      } else {
        setUser(null);
        localStorage.removeItem('user');
      }
    });

    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isDropdownOpen]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear(); 
        setUser(null);
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  return (
    <nav className='bg-black p-4 flex h-30'>
      <div className='container mx-auto flex justify-between items-center'>
        <a href='/' className='text-white text-lg font-bold'>Black Stars</a>
        <div className='hidden md:flex space-x-8'>
          <a href='/Display' className='text-white hover:text-gray-300'>Team</a>
          <a href='/signings' className='text-white hover:text-gray-300'>New signings</a>
          {
            user && (
            <a href='/player' className='text-white hover:text-gray-300'>Players Info</a>
          )}
          <a href='#' className='text-white hover:text-gray-300'>Shop</a>
          {
            user && (
            <a href='/gallery' className='text-white hover:text-gray-300'>Gallery</a>
            )}
            <a href='/showroom' className='text-white hover:text-gray-300'>Showroom</a>

        </div>

        <div className='hidden md:block relative'>
          {
           user ? (
            <div ref={dropdownRef}>
              <button onClick={toggleDropdown} 
               className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600">
                {user.displayName || user.email}
              </button>
              {
                isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                    <a href='/profile' className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>Profile</a>
                    <button
                      onClick={handleSignOut}
                      className='block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100'
                    >
                      Log out
                    </button>
                  </div>
                )}
            </div>
          ) : (
            <a href='/signin' className='bg-orange-900 text-white px-4 py-2 rounded hover:bg-orange-600'>Log in</a>
          )}
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
