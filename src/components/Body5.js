import React, { useState } from 'react';
import client from './clients';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
const Body5 = () => {
  const [index, setIndex] = useState(0);
  const { header, para, name, job, image } = client[index];

  const checkNumber = (number) => {
    if (number > client.length - 1) {
      return 0;
    }
    if (number < 0) {
      return client.length - 1;
    }
    return number;
  };

  const nextBtn = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevBtn = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <div className='bg-[#E5E5E5] h-auto md:pb-0 pb-32 md:h-screen scroll-smooth '>
      <h1 className='font-bold text-4xl flex justify-center pt-20'>
        Our Happy Clients
      </h1>
      <div className='flex px-32 pt-20'>
        <div className='hidden md:flex md:flex-1'>
          <img
            src={require('../assets/img/service1.png')}
            alt='Napkin on a car'
            className='w-[300px] h-auto'
          />
        </div>

        {/* Div for text */}

        <div className='w-[400px] md:w-0 flex flex-1 flex-col text-black justify-center space-y-5 '>
          <h1 className='text-lg md:text-2xl font-bold'>“{header}”</h1>
          <p className='text-gray-600'>{para}</p>
          <div className='flex items-center space-x-4'>
            <img
              src={image}
              alt='Clients'
              className='w-16 h-16 object-cover rounded-full'
            />
            <div className='flex flex-col'>
              <span className='font-bold'>{name}</span>
              <span className='text-gray-500'>{job}</span>
            </div>
            {/* Button container */}
            <div className='flex space-x-6 items-center'>
              <button
                type='button'
                onClick={prevBtn}
                className='w-8 h-8 border-[0.5px] border-dotted justify-center pl-[5px] rounded-full border-black hover:bg-white hover:border-none'
              >
                <FaChevronLeft />
              </button>
              <button
                type='button'
                onClick={nextBtn}
                className='w-8 h-8 border-[0.5px] border-dotted justify-center pl-[8px] rounded-full border-black hover:bg-white hover:border-none'
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body5;
