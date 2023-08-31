import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Body2 = () => {
  return (
    <div className='bg-[#060F1C] h-auto md:h-screen pt-0  md:pt-20 scroll-smooth'>
      <h1 className='text-white text-5xl font-bold flex flex-col pl-20 md:pl-0 justify-center pt-3 md:pt-0 md:flex-row '>
        Based On <span className='text-blue-700 md:ml-3'> Experience</span>{' '}
      </h1>

      <div className='flex flex-col md:flex-row justify-center'>
        {/* Div with only the man */}
        <div className='pt-5 flex justify-center md:flex-none'>
          <img
            src={require('../assets/img/dribble-1.png')}
            alt='Man with a smoother'
            className='w-[300px] h-auto'
          />
        </div>

        {/* Div with the remaining two pictures */}
        <div className='flex pt-5 '>
          <div class='pl-20'>
            <img
              src={require('../assets/img/dribble-2.png')}
              alt='Napkin on a car'
              className=' hidden md:block md:w-[300px] md:h-auto'
            />
            <h1 className='text-white pt-0 md:pt-3 text-2xl'>Our Statistics</h1>

            <div className='text-white pt-2 flex '>
              <span className='pt-2'>
                <FaCheckCircle style={{ fontSize: '12px' }} />
              </span>

              <span className='pl-2'>
                We have more 10+ years of Car Services
              </span>
            </div>
            <div className='text-white pt-2 flex '>
              <span className='pt-2'>
                <FaCheckCircle style={{ fontSize: '12px' }} />
              </span>

              <span className='pl-2'>We have more 1.5k+ Vehicles Serviced</span>
            </div>
            <div className='pt-8 pb-5 md:pb-0'>
              <button className='h-10 px-3 border-white border-[1px] text-white text-base hover:bg-slate-600'>
                Learn More
              </button>
            </div>
          </div>
          {/* The second image */}
          <div className='pl-20'>
            <img
              src={require('../assets/img/dribble-3.png')}
              alt='Napkin on a car'
              className='hidden md:block md:w-[300px] md:h-auto'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body2;
