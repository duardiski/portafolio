import { useState } from 'react';
import proyecto1 from '../assets/proyecto2.png';
import ecommerce1 from '../assets/ecommerce1.jpg';
import ecommerce2 from '../assets/ecommerce2.jpg';
import ecommerce4 from '../assets/ecommerce4.jpg';
import ecommerce5 from '../assets/ecommerce5.jpg';
import ecommerce6 from '../assets/ecommerce6.jpg';
import ecommerce7 from '../assets/ecommerce7.jpg';
import ecommerce8 from '../assets/ecommerce8.jpg';
import { IoLogoJavascript } from "react-icons/io5";
import { FaPhp, FaCss3Alt  } from "react-icons/fa";
import { useEffect } from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Proyecto2 = () => {
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
          <h1 className='font-extrabold text-2xl'>Ecommerce Tienda Natural</h1>
          <h2 className='mt-2'>JavaScript - PHP - CSS </h2>
          <div className="flex justify-between h-8 m-6">
            <IoLogoJavascript size={40}/>
            <FaPhp size={40}/>
            <FaCss3Alt size={40}/>
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
                  <h2 className='text-3xl font-semibold mb-6'>Ecommerce tienda natural</h2>
                  <Slider {...settings} className='shadow-lg'>
                  <div>
                    <img src={ecommerce1} alt="proyecto1" className='w-fit h-64 ' />
                  </div>
                  <div>
                    <img src={ecommerce2} alt="proyecto1" className='w-fit h-64' />
                  </div>
                  <div>
                    <img src={ecommerce8} alt="proyecto1" className='w-fit h-64' />
                  </div>
                  <div>
                    <img src={ecommerce4} alt="proyecto1" className='w-fit h-64' />
                  </div>
                  <div>
                    <img src={ecommerce5} alt="proyecto1" className='w-fit h-64 ' />
                  </div>
                  <div>
                    <img src={ecommerce6} alt="proyecto1" className='w-fit h-64' />
                  </div>
                  <div>
                    <img src={ecommerce7} alt="proyecto1" className='w-fit h-64' />
                  </div>
                  <div>
                    <img src={ecommerce8} alt="proyecto1" className='w-fit h-64' />
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

export default Proyecto2;
