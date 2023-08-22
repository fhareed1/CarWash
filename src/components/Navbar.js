import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Toggle the hamburger
  const changeburger = () => {
    setIsNavOpen(!isNavOpen);
  };

  const buttonClick = () => {
    console.log('Click Works');
  };

  return (
    <nav className='bg-[#E5E5E5] h-[80px] w-full fixed top-0 left-0 z-50 flex justify-between items-center border-b border-black overflow-hidden'>
      {/* This div z*/}
      <div className='flex'>
        <img
          src={require('../assets/img/filo-logo.png')}
          alt='logo'
          className='w-max h-[50px] drop-shadow-2xl to-black'
        />
        <span className='text-black font-bold pt-2 text-2xl '>filllo</span>
      </div>

      {/* Middle Nav links */}

      <div className='z-50'>
        <ul className='hidden md:flex  space-x-7'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/service'>Service</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </div>

      {/* For button */}
      <div className='hidden md:block md:mr-[100px] '>
        <button
          className='h-10 px-3 bg-[#E5E5E5] border-black border-[1px] text-base lg:hover:bg-slate-600 '
          onClick={buttonClick}
        >
          Request A Quote
        </button>
      </div>

      {/* Hamburger menu */}
      <div className='mr-4  md:hidden flex items-center'>
        <button
          type='button'
          onClick={changeburger}
          className='inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
        >
          <span className='sr-only'>Open Main Menu</span>
          {isNavOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isNavOpen ? (
        <div className={`md:hidden ${isNavOpen ? 'block' : 'hidden'} fixed top-[80px] left-0 text-center opacity-[0.97]  z-50 h-screen overflow-hidden bg-[#E5E5E5] w-full`}>
        <ul className='space-y-40 pt-14'>
          <li className='text-black hover:bg-gray-500 block px-3 py-2 rounded-md text-base font-medium'>
            <a href='/'>Home</a>
          </li>
          <li className='text-black hover:bg-gray-500 block px-3 py-2 rounded-md text-base font-medium'>
            <a href='/service'>Service</a>
          </li>
          <li className='text-black hover:bg-gray-500 block px-3 py-2 rounded-md text-base font-medium'>
            <a href='/about'>About</a>
          </li>
          <li className='text-black hover:bg-gray-500 block px-3 py-2 rounded-md text-base font-medium'>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </div>
      
      ) : null}
    </nav>
  );
};

export default Navbar;
