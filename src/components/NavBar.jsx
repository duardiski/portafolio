import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-gray-300 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-gray-800 font-bold text-xl">
            Logo
          </div>
          <div className="space-x-4">
            <a href="#" className="text-gray-800 hover:scale-110">Inicio</a>
            <a href="#" className="text-gray-800 hover:underline">Acerca de</a>
            <a href="#" className="text-gray-800 hover:underline">Servicios</a>
            <a href="#" className="text-gray-800 hover:underline">Contacto</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
