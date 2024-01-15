import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import mountainef from '../assets/mountainef.png';
import moonpng from '../assets/moonpng.png';

const Presentation = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();


  const handleButtonClick = () => {
    const targetElement = document.getElementById('navbar');
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        delay: 0.4 });
    }
    };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({ opacity: 1, x: 0 });
  }, [controls]);

  return (
    <div id='presentation'className='bg-black h-screen relative overflow-hidden'>
      <motion.img
        src={mountainef}
        alt="mountain"
        className='w-full object-cover absolute bottom-0 z-10'
        initial={{ opacity: 0, x: -100 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      <motion.img
        src={moonpng}
        alt="moon"
        className='parallax-moon absolute inset-x-1/2 transform -translate-x-1/2 z-0 w-1/4 md:w-1/3'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, delay: 0.6 }}
        style={{
          top: `${36 + scrollY * 0.1}%`,
          transition: 'top 0.1s ease-out',
        }}
      />

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={controls}
        transition={{ duration: 0.8 , delay: 0.3 }}
        className='text-center absolute top-0 left-0 w-full z-10'
      >
        <h1 className='text-5xl text-white pt-10'>
          Hola, mi nombre es <span className='text-indigo-500'>Federico Pereyra!</span>
        </h1>
        <h2 className=''></h2>
        <button
          className='text-white bg-none px-4 py-2 mt-4 rounded hover:bg-indigo-600 focus:outline-none'
          onClick={handleButtonClick}
        >
          Siguiente sección
        </button>
      </motion.div>
    </div>
  );
};

export default Presentation;