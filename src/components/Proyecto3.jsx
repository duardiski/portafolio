import { useState } from 'react';
import panto3 from '../assets/panto3.png';
import { FaReact } from "react-icons/fa";
import { SiChakraui, SiFlask } from "react-icons/si";
import { useEffect } from 'react';

const Proyecto3 = () => {

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
    backgroundImage: hovered ? 'none':`url(${panto3})` ,
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
        className="bg-white shadow-2xl rounded-md p-8 h-80 w-80 flex flex-col justify-center items-center"
        style={containerStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          style={buttonStyle}
        >
          <h1 className='font-extrabold text-2xl'>Diagnóstico remoto de radiografías
          panorámicas</h1>
          <h2 className='mt-2'>React - ChakraUI - Flask </h2>
          <div className="flex justify-between h-8 m-6">
            <FaReact size={40}/>
            <SiChakraui size={40}/>
            <SiFlask size={40}/>
          </div>

          <button
            onClick={toggleModal}
            className="mt-2 bg-white hover:bg-gray-200 border border-gray-300 shadow-md text-black font-semibold py-2 px-4 rounded-md filter-none"
          >
            Ver más
          </button>

          {modalOpen && (
          <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-black bg-opacity-50" onMouseLeave={closeOnMouseLeave}>
            <div className="bg-white p-8 rounded-md">
              {/* Contenido del modal */}
              <h2>Contenido del modal</h2>
              <button onClick={toggleModal} >Cerrar modal</button>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Proyecto3;
