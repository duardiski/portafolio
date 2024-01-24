import { useEffect} from 'react';
import { motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Skills from './Skills';
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
      <div
      className="max-w-7xl mx-auto p-4 md:p-8  flex flex-col md:flex-row justify-center md:justify-between items-center my-24">
        <motion.div
        id='boxAbout'
        className="w-full md:w-1/3 flex flex-col items-center h-auto md:h-80 p-4 md:items-start"
        initial={{ opacity: 0, x: -100 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center md:mb-4 md:mt-0 mt-12">
            <div className=" overflow-hidden w- h-full">
              <img src={Pfp} alt="Pfp" className="object-contain w-full h-full rounded-full" />
            </div>
          </div>
        </motion.div>
        <motion.div
          className="w-full md:w-auto p-6 md:p-16 rounded-3xl shadow-lg  md:mt-0 md:ml-7 text-center"
          initial={{ opacity: 0, x: 100 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className='title text-4xl text-left text-white relative mb-10 mt-24'>Acerca de mi..</h2>
          <p className="mb-4 text-xl font-extralight text-white text-justify">
            Hola! Soy{' '}
            <span className='text-indigo-500'>Analista de Sistemas</span> y entusiasta de la programación web que adora enfrentar desafíos con creatividad, trabajar colaborativamente en equipos y aprender continuamente. Con una pasión por el desarrollo web y la programación, estoy dedicado a encontrar soluciones innovadoras y mejorar las experiencias de los usuarios.
          </p>

          <div className="resume mb-3">
            <h3 className='text-yellow-100 mb-4 mt-2 underline'>Si quieres ver mi curriculum!</h3>
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

      <motion.div
      className='grid md:grid-cols-2 md:gap-4 grid-cols-1 gap-1 mb-20 mt-12' ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.8, delay: 0.9 }}
      >
        <div className='flex md:mb-16 items-center flex-col'>
          <h1 className='title text-4xl text-center text-white mt-14 mb-6'>Habilidades</h1>
          <div className='p-4'>
              <Skills/>
          </div>
        </div>
        <div className='mt-16 mb-16'>
          <div className='p-12 md:mt-10 mr-20'>
            <div className='flex items-center mb-4'>
              <span className='text-green-500 text-4xl mr-4'>&#10003;</span>
              <div>
                <p className='text-white font-bold text-xl'>Disciplina</p>
                <p className='text-gray-300 text-justify text-xl'>
                  Capacidad para mantener <span className='text-indigo-600'>resiliencia y determinación</span> en cada tarea.
                </p>
              </div>
            </div>

            <div className='flex items-center mb-4'>
              <span className='text-green-500 text-4xl mr-4'>&#10003;</span>
              <div>
                <p className='text-white font-bold text-xl'>Creatividad</p>
                <p className='text-gray-300 text-justify text-xl'>
                  Habilidad para generar ideas innovadoras y <span className='text-indigo-600'>soluciones creativas</span>.
                </p>
              </div>
            </div>

            <div className='flex items-center mb-4'>
              <span className='text-green-500 text-4xl mr-4'>&#10003;</span>
              <div>
                <p className='text-white font-bold text-xl'>Colaboracion</p>
                <p className='text-gray-300 text-justify text-xl'>
                  Trabajo efectivo en <span className='text-indigo-600'>equipo y cooperación </span>para alcanzar objetivos comunes.
                </p>
              </div>
            </div>

            <div className='flex items-center mb-4'>
              <span className='text-green-500 text-4xl mr-4'>&#10003;</span>
              <div>
                <p className='text-white font-bold text-xl'>Adaptabilidad</p>
                <p className='text-gray-300 text-xl'>
                  <span className='text-indigo-600'>Flexibilidad </span>para ajustarse a cambios y enfrentar nuevos desafíos con facilidad.
                </p>
              </div>
            </div>
          </div>
        </div>
    </motion.div>
    </div>
  );
}

export default About;
