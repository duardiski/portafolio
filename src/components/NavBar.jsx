import React from 'react';
import Logo from '../assets/logo.jpg';

const NavBar = () => {
  return (
    <nav className="bg-black p-4 font-light">
      <div className="max-w-7xl mx-auto text-white text-1xl ">
        <div className="flex items-left justify-between">
          <div>
            <img src={Logo} alt="imagenBG" className='h-10 w-10 rounded-full'/>
          </div>
          <div className="space-x-4 ">
            <a href="#" className=" hover:text-purple-500">About me</a>
            <a href="#" className=" hover:text-purple-500">Proyects</a>
            <a href="#" className=" hover:text-purple-500">Education</a>
            <a href="#" className=" hover:text-purple-500">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
