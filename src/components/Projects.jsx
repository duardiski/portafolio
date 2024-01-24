import Proyecto1 from './Proyecto1';
import Proyecto2 from './Proyecto2';
import Proyecto3 from './Proyecto3';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect} from 'react';
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const controls = useAnimation();
  const gitHubLink = 'https://github.com/federico1506';

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
    <div id='projects' ref={ref} className="min-h-screen flex flex-col justify-center items-center bg-indigo-600 p-16">
      <motion.div
        className="title text-5xl text-center text-white relative"
        initial={{ opacity: 0, x: -100 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2 className="p-8 pt-16 relative">
          Proyectos
        </h2>
      </motion.div>
      <motion.div
        className="min-h-min flex flex-col items-center pb-24 justify-center"
        initial={{ opacity: 0, x: 100 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
      <div className="min-h-min flex flex-col items-center pt-10 justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Proyecto1 />
          <Proyecto2 />
          <Proyecto3 />
        </div>
      </div >
      <motion.div className='mt-6 flex'>
        <a href={gitHubLink} target="_blank" rel="noopener noreferrer" className='text-gray-900'>
          <FaGithub size={100} />
        </a>
      </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
