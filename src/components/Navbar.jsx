import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 p-4'>
        <div className='container mx-auto flex justify-between items-center'>
            <a href='/' className='text-white text-lg font-bold'>Footing</a>
            <div className='hidden md:flex space-x-8'>
                <a href='#' className='text-gray-300 hover:text-white'>Team</a>
                <a href='#' className='text-gray-300 hover:text-white'>About</a>
                <a href='#' className='text-gray-300 hover:text-white'>Footing</a>
                <a href='#' className='text-gray-300 hover:text-white'>Royal</a>
                <a href='#' className='text-gray-300 hover:text-white'>Shop</a>
                <a href='#' className='text-gray-300 hover:text-white'>Gallery</a>
                <a href='#' className='text-gray-300 hover:text-white'>Contact  US</a>

            </div>

            <div className='hidden md:block'>
                <a href='#' className='bg-orange-900 text-white px-4 py-2 rounded hover:bg-orange-600'>Log in</a>

            </div>
        </div>


    </nav>
  )
}

export default Navbar;