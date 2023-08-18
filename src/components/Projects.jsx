import React from 'react';
import CardProject from './CardProject';

const Projects = () => {
  return (
      <div className="max-w-7xl mx-auto mt-8 p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CardProject />
          <CardProject />
          <CardProject />
        </div>
      </div>
  );
}

export default Projects;
