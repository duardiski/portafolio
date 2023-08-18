import React from 'react';
import Proyecto1 from './Proyecto1';

const Projects = () => {
  return (
      <div className="max-w-10xl mx-auto mt-8 p-8 bg-gray-200">
        <h2 className="text-3xl font-semibold text-center mb-8 text-black">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Proyecto1 />
        </div>
      </div>
  );
}

export default Projects;
