import React from 'react';

const Body3 = () => {
  return (
    <div className='h-auto md:h-screen bg-[#D3D3D3]  '>
      <h1 className='flex justify-center pt-5 md:pt-28 text-4xl font-bold'>
        Our Services
      </h1>

      <div className='flex flex-col-reverse items-center   md:flex-row md:pt-20'>
        {/* Text Div */}
        <div className='md:flex-1  md:flex md:flex-col md:justify-center md:ml-32 '>
          <h1 className='text-2xl font-semibold'>Paint Protection Film</h1>
          <span className='text-gray-600 pt-4'>
            We use the clearest, best performing film in the
            <span className='block'>
              industry with unparalled install quality. From
            </span>
            <>frontend protection to fully wrapping a vehicle</>
            <span className='block'>can customize a protection package</span>
          </span>

          <div className='pt-8 pb-5 md:pb-0'>
            <button className='h-10 px-5 border-black border-[1px] text-black font-semibold text-base hover:bg-slate-600'>
              Learn More
            </button>
          </div>
        </div>

        {/* Image Div */}
        <div className=' py-10 md:py-0 md:flex-1 md:flex '>
          <img
            src={require('../assets/img/service1.png')}
            alt='Napkin on a car'
            className='w-[300px] h-auto'
          />
          <div className='flex pr-5'>
            <img
              src={require('../assets/img/service2.png')}
              alt='Napkin on a car'
              className='w-[300px] h-auto'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body3;
