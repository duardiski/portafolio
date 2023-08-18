import React from 'react';
import imagenBG from '../assets/imagenBG.jpg';

const Presentation = () => {
  return (
  <div className="min-h-screen flex items-center justify-center relative presentation-container">
      <img src={imagenBG} alt="imagenBG" className='absolute top-0 left-0 w-full h-full object-cover z-0"'/>
      <div className="text-center p-10 relative z-10">
        <h1 className="text-4xl text-white">Hi! My name is {' '}
          <span className="font-bold text-purple-700">Federico Pereyra</span> {' '}
          <h3 className='text-2xl font-light'>Systems Analyst and Web Programming Enthusiast</h3>
        </h1>
          <button className="mt-4 bg-purple-700 hover:bg-purple-600 text-white py-2 px-4 rounded-full text-1xl font-light">See more!</button>  
      </div>
    </div>
  );
}

export default Presentation;
