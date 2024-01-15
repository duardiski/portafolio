import { useEffect} from 'react';
import { motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Pfp from '../assets/pfp.png';
import resume from '../resume.pdf';

const About = () => {
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
    <div id='about' ref={ref} className="bg-black min-h-screen flex flex-col justify-center items-center">
      <motion.div
        className="title text-5xl font-semibold mb-8 text-center text-white relative"
        initial={{ opacity: 0, x: -100 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2>Sobre mi</h2>
      </motion.div>

      <div
      className="max-w-7xl mx-auto p-4 md:p-8 mb-10 flex flex-col md:flex-row justify-center md:justify-between items-center">
        <motion.div
        id='boxAbout'
        className="w-full md:w-1/3 flex flex-col items-center h-auto md:h-80 p-4 md:items-start"
        initial={{ opacity: 0, x: -100 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mb-4">
            <div className=" overflow-hidden w- h-full">
              <img src={Pfp} alt="Pfp" className="object-contain w-full h-full rounded-full" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-auto p-6 md:p-16 rounded-3xl shadow-lg mt-8 md:mt-0 md:ml-7 text-center"
          initial={{ opacity: 0, x: 100 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="mb-4 text-lg font-extralight text-white text-left">
            Hola! Soy{' '}
            <span className='text-indigo-500'>Analista de Sistemas</span> y entusiasta de la programación web que adora enfrentar desafíos con creatividad, trabajar colaborativamente en equipos y aprender continuamente. Con una pasión por el desarrollo web y la programación, estoy dedicado a encontrar soluciones innovadoras y mejorar las experiencias de los usuarios.
          </p>

          <div className="resume">
            <h3 className='text-yellow-100 mb-6 mt-2 underline'>Si quieres ver mi curriculum!</h3>
            <a
            href={resume}
            download='resume-PDF-document'
            target='_blank'
            rel='noreferrer'
            >
              <motion.button
                className="bg-purple-700 hover:bg-purple-600 text-white py-2 px-4 rounded-full text-sm font-semibold uppercase"
                initial={{ opacity: 0 }}
                animate={controls}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Descargar
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
