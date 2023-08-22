import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='md:h-[500px] w-full h-auto bg-[#060F1C] pb-7 md:pb-0 overflow-hidden'>
      <div className='text-white pt-20 text-4xl md:text-5xl font-bold space-y-5 text-center'>
        <h1>Ready to care for</h1>
        <h1>Your Car?</h1>
        <button className='h-10 px-5 bg-blue-600 border-white border-[1px font-semibold text-base hover:bg-slate-600'>
          Request A Quote
        </button>
      </div>
      <div>
        <div className='md:flex md:text-justify pt-10 text-white space-y-5 md:space-y-0 md:space-x-28 block text-center  '>
          <div className='flex justify-center pr-28 md:pr-0 '>
            <img
              src={require('../assets/img/fillo-logo-white.png')}
              alt='logo'
              className='w-max h-[70px] drop-shadow-2xl ml-16 to-white'
            />
            <span className='text-white  font-bold pt-5  text-2xl '>
              filllo
            </span>
          </div>
          <div className='flex flex-col space-y-2 '>
            <h1>Home</h1>
            <span className='text-gray-400 '>Hours & Location</span>
            <span className='text-gray-400'>Filllo Car Wash Services</span>
          </div>
          <div className='flex flex-col space-y-2'>
            <h1>About Us</h1>
            <span className='text-gray-400 '>Privacy Policy</span>
            <span className='text-gray-400'>Membership</span>
            <span className='text-gray-400'>Contact</span>
          </div>
          <div className='w-auto space-y-4 flex flex-col items-center md:w-[300px]   md:items-baseline md:flex-none md:text-justify'>
            <span className='text-gray-400 '>
              Our concept is called a car wash service. This is a concept that
              allows us to offer all the Services neded for a car
            </span>
            <div className='flex space-x-6'>
              <button className=' flex justify-center items-center h-8 w-8 bg-gray-600 rounded-full hover:bg-white hover:text-black  hover:to-black '>
                <FaFacebook style={{ height: '20px', width: '20px' }} />
              </button>
              <button className=' flex justify-center items-center h-8 w-8 bg-gray-600 rounded-full  hover:bg-white  hover:text-black '>
                <FaInstagram
                  style={{
                    height: '20px',
                    width: '20px',
                    
                  }}
                />
              </button>
              <button className=' flex justify-center items-center h-8 w-8 bg-gray-600 rounded-full hover:bg-white hover:text-black hover:rounded-full  '>
                <FaTwitter style={{ height: '20px', width: '20px' }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
