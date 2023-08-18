import React from 'react';
import CardEducation from './CardEducation'

const Education = () => {
  return (
      <div className="max-w-7xl mx-auto mt-8 p-8">
        <h2 className="text-3xl font-bold mb-8">Educación</h2>
        <CardEducation/>
        <CardEducation/>
        <CardEducation/>
      </div>
  );
}

export default Education;
