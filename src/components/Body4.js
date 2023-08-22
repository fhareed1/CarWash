import React from 'react';
import BeforeAfterSlider from './BeforeAfterSlide';

const Body4 = () => {
  return (
    <div className='bg-[#060F1C]'>
      <div className='block md:flex pt-20  '>
        <h1 className='text-white block pb-7 md:pb-0 font-semibold text-5xl justify-start md:flex text-center pl-0 md:pl-20'>
          Before & After
        </h1>
        <p className=' text-gray-400 text-center justify-end items-end pl-0 md:pl-[400px] '>
          Car highllights arent suppose to look{' '}
          <span className='block'>
            cloudy like this. Cloudy car highlights be
          </span>{' '}
          easily remedied with some car.
        </p>
      </div>

      <BeforeAfterSlider />
    </div>
  );
};

export default Body4;
