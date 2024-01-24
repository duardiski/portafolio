import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const CardEducation3 = ({ customLink }) => {
  const linkTo = customLink || 'http://www.ceut.frbb.utn.edu.ar/noticias/pages/home-noticias.php?id=HMImOx8DFmaWdI6jKB92r1hKywbbsJuDr48njTqKhlI';

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
            src="https://ceut.frbb.utn.edu.ar/web/img/logoUTNheader.png"
            alt="Educación"
            className="w-1/4 mr-4 rounded-lg"
          />
          <div>
            <h3 className="text-lg font-semibold mb-2 uppercase">Universidad tecnologica nacional</h3>
            <p className="text-gray-700 items-center">
            Extensión universitaria, Curso Idioma Inglés 5th Teens
            </p>
          </div>
        </div>
      </motion.div>
    </a>
  );
};

export default CardEducation3;
