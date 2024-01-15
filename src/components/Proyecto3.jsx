//import { useState } from 'react';

const Proyecto1 = () => {

  //const [hovered, setHovered] = useState(false);

  const buttonStyle = {
    //display: hovered ? 'block' : 'none',
    transition: 'display 1s ease',
  };

  const containerStyle = {
    //backgroundImage: hovered ? 'none':`url(${proyecto1})` ,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transition: 'display 1s ease',
    //boxShadow: hovered ? '0 10px 10px rgba(0, 0, 0, 0.5)' : '0 0 0 rgba(0, 0, 0, 0)',
  };

  return (
    <div
      className="p-6 text-center"
    >
      <div
        className="bg-white shadow-xl rounded-md p-8 h-80 w-80 flex flex-col justify-center items-center"
        style={containerStyle}
        //onMouseEnter={() => setHovered(false)}
        //onMouseLeave={() => setHovered(true)}
      >
        <div
          style={buttonStyle}
        >
          <h1 className='font-extrabold text-2xl'>Pronto!..</h1>
          <div className="flex justify-between h-8 m-6">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyecto1;
