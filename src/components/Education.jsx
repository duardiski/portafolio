import CardEducation1 from './CardEducation1';
import CardEducation2 from './CardEducation2';
import CardEducation3 from './CardEducation3';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Education = () => {
  const controls = useAnimation();
  const urlGif = 'https://res.cloudinary.com/clever-ideas/image/upload/v1664550860/educacion_1_a0a09665ff.gif';
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [controls, inView]);

  return (
    <div id='education' ref={ref} className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-yellow-100">
      <motion.div
        className='mt-6 w-full md:w-1/2'
        initial={{ opacity: 0, x: -100 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.3 }}>
        <div className='flex flex-col items-center'>
          <h2 className="title text-5xl text-center text-black relative p-12 pt-24 mb-6">Educación</h2>
          <img
            src={urlGif}
            alt="Educación"
            className="w-2/4 rounded-full"
          />
        </div>
      </motion.div>
      <motion.div
        className='mr-10 mt-10 flex flex-col items-center md:w-1/2 mb-10'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <CardEducation1/>
        <CardEducation2 />
        <CardEducation3 />
      </motion.div>
    </div>
  );
}

export default Education;
