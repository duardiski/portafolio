import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const CardEducation2 = ({ customLink }) => {
  const linkTo = customLink || 'https://www.uns.edu.ar/escuelas/comercio';

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0, transition: { delay: 0.3 } });
    }
  }, [controls, inView]);

  return (
    <a href={linkTo} ref={ref}>
      <motion.div
        whileHover={{ scale: 1 }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={controls}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-lg shadow-md md:p-6 p-10 mt-6 cursor-pointer"
      >
        <div className="flex items-center">
          <img
            src="https://universidadesemprendedoras.tecnocampus.cat/wp-content/uploads/sites/16/2019/03/Logo-UNS-OK.jpg"
            alt="Educación"
            className="w-1/4 mr-4 rounded-lg"
          />
          <div>
            <h3 className="text-lg font-semibold mb-2 uppercase">Escuela Superior de Comercio</h3>
            <p className="text-gray-700 items-center">
            Bachiller en Economía y Administración
            </p>
          </div>
        </div>
      </motion.div>
    </a>
  );
};

export default CardEducation2;
