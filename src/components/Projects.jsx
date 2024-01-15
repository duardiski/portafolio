import Proyecto1 from './Proyecto1';
import Proyecto2 from './Proyecto2';
import Proyecto3 from './Proyecto3';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect} from 'react';

const Projects = () => {
  const controls = useAnimation();

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
        className="title text-5xl font-semibold text-center text-white relative"
        initial={{ opacity: 0, x: -100 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2 className="p-12 pt-16 mb-6 relative">
          Proyectos
        </h2>
      </motion.div>
      <motion.div
        className="min-h-min flex flex-col items-center pb-64 justify-center"
        initial={{ opacity: 0, x: 100 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
      <div className="min-h-min flex flex-col items-center pt-10 pb-64 justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Proyecto1 />
          <Proyecto2 />
          <Proyecto3 />
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export default Projects;
