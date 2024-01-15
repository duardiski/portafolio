import { useState } from 'react';
import proyecto1 from '../assets/proyecto2.png';
import javascript from '../assets/javascript.svg';
import php from '../assets/php.svg';
import css from '../assets/css.svg';

const Proyecto1 = () => {

  const [hovered, setHovered] = useState(false);

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
            <img src={javascript} alt="javascript"/>
            <img src={php} alt="php"/>
            <img src={css} alt="css"/>
          </div>

          <button
            className="mt-2 bg-white hover:bg-gray-200 border border-gray-300 shadow-md text-black font-semibold py-2 px-4 rounded-md filter-none"
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};

export default Proyecto1;
