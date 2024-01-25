import proyecto1 from '../assets/proyecto1.jpg';
import proyecto1_2 from '../assets/proyecto1-2.png';
import { useState } from 'react';
import { FaReact } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiVite } from "react-icons/si";
import { useEffect } from 'react';

const Proyecto1 = () => {

  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const body = document.body;

    if (modalOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
    return () => {
      body.style.overflow = 'auto';
    };
  }, [modalOpen]);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const toggleModalClose = () => {
    setModalOpen(!modalOpen);
    setHovered(false);
  };

  const closeOnMouseLeave = () => {
    if (modalOpen) {
      setModalOpen(false);
      setHovered(false);
    }
  };

  const buttonStyle = {
    display: hovered ? 'block' : 'none',
    transition: 'display 1s ease',
  };

  const containerStyle = {
    backgroundImage: hovered ? 'none':`url(${proyecto1})` ,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transition: 'display 1s ease',
    boxShadow: hovered ? '0 10px 10px rgba(0, 0, 0, 0.5)' : '0 0 0 rgba(0, 0, 0, 0)',
  };

  return (
    <div
      className="p-6 text-center"
    >
      <div
        className="bg-white shadow-xl rounded-md p-8 h-80 w-80 flex flex-col justify-center items-center"
        style={containerStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          style={buttonStyle}
        >
          <h1 className='font-extrabold text-2xl'>Seguimiento de pacientes</h1>
          <h2 className='mt-2'>React - Taildwind - Vite</h2>
          <div className="flex justify-between h-8 m-6">
            <FaReact size={40}/>
            <BiLogoTailwindCss size={40}/>
            <SiVite size={40}/>
          </div>
          <button
            onClick={toggleModal}
            className="mt-2 bg-white hover:bg-gray-200 border border-gray-300 shadow-md text-black font-semibold py-2 px-4 rounded-md filter-none"
          >
            Ver más
          </button>

          {modalOpen && (
            <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-black bg-opacity-50" onMouseLeave={closeOnMouseLeave}>
            <div className="bg-white p-8 rounded-md w-4/5 h-3/4">
              {/* Contenido del modal */}
              <div className='flex gap-6 mb-10'>
                <div className='w-1/2'>
                  <h2 className='text-3xl font-semibold mb-4'>Seguimiento de pacientes de Kinesiologia</h2>
                  <img src={proyecto1_2} alt="proyecto1" className='w-full shadow-md' />
                </div>
                <p className='w-1/2 flex text-justify items-center text-lg'>Un proyecto web de registro de citas con React, Tailwind CSS y Vite facilita la programación y gestión de citas. Los usuarios pueden agendar, visualizar y modificar citas de manera eficiente, aprovechando una interfaz atractiva y fácil de usar para una experiencia óptima.</p>
              </div>
              <div className="mb-4 text-center">
                <a href="https://courageous-naiad-1faca1.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold underline hover:underline">Si quieres utilizarlo, haz clic aquí</a>
              </div>
              <div>
                <button onClick={toggleModalClose} className='bg-red-500 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-indigo-300'>Cerrar</button>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Proyecto1;
