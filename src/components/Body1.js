import React from 'react';
import { FaArrowRight, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Body1 = () => {
  return (
    <div className='bg-[#E5E5E5] w-full h-full  overflow-hidden pt-[50px] md:pt-[80px] space-y-5 md:space-y-0   '>
      <div className='flex flex-col justify-center md:flex-row   md:justify-between items-center space-y-10 md:space-y-0 md:h-auto  h-[400px]  '>
        {/* The First Writing here */}
        <div className=' flex md:pl-20 align-middle'>
          <h1 className='text-5xl md:text-7xl  font-bold md:font-semibold leading-none text-center flex flex-col '>
            Keep Your
            <span className='md:text-7xl py-5 md:py-0  md:font-semibold flex text-blue-700'>
              Car Clean
            </span>
            Always
          </h1>
        </div>
        {/* Text Above a car div */}
        <div className='flex flex-col items-center md:block  pr-0 md:pr-80 space-y-5 md:space-y-0 '>
          <p className='flex flex-col md:block text-sm text-gray-500 font-semibold  '>
            Filllo car wash is a brand which is literally going
            <span className='flex '>
              to change the people think car cleaning
            </span>
          </p>
          <p className='flex items-center pt-5 text-blue-700'>
            <span className='pr-2 font-semibold'>Book A Wash</span>{' '}
            <FaArrowRight />
          </p>
        </div>
      </div>

      {/* Image here then the rest within */}
      <div className=' flex align-bottom  justify-center pb-2 md:pb-0 md:pl-96  '>
        <img
          src={require('../assets/img/porche.png')}
          alt='logo'
          className='w-[300px]    md:w-auto'
        />
      </div>

      {/* Body 1 footer */}
      <div className='bg-[#D9D9D9] h-16 flex justify-start text-center '>
        {/*Contact Div  */}
        <div className='flex items-center  pl-20 '>
          <FaPhone />
          <div className='font-sans pl-4 '>
            <span className='font-light text-xs block'>CALL US NOW AT:</span>
            <span className='font-medium text-sm'>+2347035712516</span>
          </div>
        </div>
        {/* Horizontal line */}
        <div class='border-l border-black h-[50px] ml-4 mt-2'></div>
        {/* Location Div */}
        <div className='flex items-center pl-6'>
          <FaMapMarkerAlt />
          <div className='font-sans pl-4 '>
            <span className='font-light text-xs block'>Our Location</span>
            <span className='font-medium text-sm'>Lagos, Nigeria</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body1;
