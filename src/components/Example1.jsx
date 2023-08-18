import React, { useEffect, useState } from 'react';
import mountainef from '../assets/mountainef.png';
import moonpng from '../assets/moonpng.png';
import starspng from '../assets/starspng.jpg';


const Example = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    const handleButtonClick = () => {
      // Para hacer despues 
    };


  return (
    <div className='bg-black h-screen relative overflow-hidden'>
      <img
        src={starspng}
        alt="stars"
        className='w-full absolute bottom-0 z-0'
        style={{
          top: `-${scrollY * 0.1}%`, 
          height: 'auto',
          transition: 'top 0.1s',
        }}
      />

      <img
        src={mountainef}
        alt="mountain"
        className='w-full object-cover absolute bottom-0 z-10'
      />

      <div className='text-center absolute top-0 left-0 w-full z-10'>
        <h1 className='text-5xl text-white pt-10'>Hi! My name is <span className='text-indigo-500'>Federico Pereyra</span></h1>
        <button
          className='text-white bg-none px-4 py-2 mt-4 rounded hover:bg-indigo-600 focus:outline-none'
        >
          Next Section
        </button>
      </div>
      <img
        src={moonpng}
        alt="moon"
        className='parallax-moon absolute inset-x-1/2 transform -translate-x-1/2 z-0 w-1/4 md:w-1/3'
        style={{
          top: `${36 + scrollY * 0.1}%`,
          transition: 'top 0.1s ease-out',
        }}
      />
    </div>
  );
}

export default Example;
