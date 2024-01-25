import { useState } from 'react';
import panto1 from '../assets/panto1.png';
import panto2 from '../assets/panto2.png';
import panto3 from '../assets/panto3.png';
import panto4 from '../assets/panto4.png';
import panto5 from '../assets/panto5.png';
import { FaReact } from "react-icons/fa";
import { SiChakraui, SiFlask } from "react-icons/si";
import { useEffect } from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Proyecto3 = () => {

  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1600,
    prevArrow: <button className="slick-prev">Previous</button>,
    nextArrow: <button className="slick-next">Next</button>,
    appendDots: (dots) => (
      <div style={{ textAlign: 'center' }}>
        <ul style={{ display: 'inline-block' }}>{dots}</ul>
      </div>
    ),
  }

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
            <div className="bg-white p-8 rounded-md w-4/5 h-3/4">
              {/* Contenido del modal */}
              <div className='flex gap-6 mb-10'>
                <div className='w-1/2'>
                  <h2 className='text-3xl font-semibold mb-6'>Diagnostico remoto de radiografias panoramicas</h2>
                  <Slider {...settings} className='shadow-lg'>
                  <div>
                    <img src={panto1} alt="proyecto1" className='w-auto' />
                  </div>
                  <div>
                    <img src={panto4} alt="proyecto1" className='w-auto' />
                  </div>
                  <div>
                    <img src={panto2} alt="proyecto1" className='w-auto' />
                  </div>
                  <div>
                    <img src={panto5} alt="proyecto1" className='w-auto' />
                  </div>
                  </Slider>
                </div>
                <p className='w-1/2 flex text-justify items-center text-lg'> Un proyecto web odontológico con React, Chakra UI y Flask permite a los dentistas cargar pantomamografías, aplicar cambios de color y enviarlas a una IA. La IA genera un informe PDF junto con un diagnóstico para mejorar la eficiencia en el análisis radiográfico. (aun en desarrollo)</p>
              </div>
              <div className="mb-4 text-center">
                <span className="text-blue-600 font-semibold underline hover:underline">No disponible (aun en desarrollo)</span>
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

export default Proyecto3;
