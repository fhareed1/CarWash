import React, { useState } from 'react';

const BeforeAfterSlider = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const dirtyOpacity = 1 - sliderValue / 100;
  const cleanOpacity = sliderValue / 100;

  return (
    <div className=' relative h-screen flex flex-col items-center justify-center overflow-hidden'>
      <div className='relative w-full text-center'>
        <div className='relative inline-block'>
          <img
            src={require('../assets/img/clean1.png')}
            alt='Clean Car'
            className='block w-auto h-auto transition-opacity duration-300 ease-in-out mx-auto'
            style={{ opacity: cleanOpacity }}
          />
          <input
            type='range'
            min='0'
            max='100'
            value={sliderValue}
            onChange={handleSliderChange}
            className='w-full mt-2 justify-center border border-gray-300 rounded-md bg-gray-200 focus:border-blue-500 focus:bg-white cursor-pointer'
            style={{ top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}
          />

          <img
            src={require('../assets/img/dirty2.png')}
            alt='Dirty Car'
            className='absolute top-0 left-0 w-full h-auto transition-opacity duration-300 ease-in-out'
            style={{ opacity: dirtyOpacity, zIndex: 0 }}
          />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
