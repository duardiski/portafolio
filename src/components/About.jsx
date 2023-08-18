import React from 'react';
import Pfp from '../assets/pfp.jpg';

const About = () => {
  return (
  <div className="bg-gray-100 min-h-min">
    <div className="max-w-7xl mx-auto mt-8 p-8 flex flex-col md:flex-row justify-between items-center">

      <div className="w-2/3 md:w-1/3 flex flex-col items-center h-80 p-4 md:items-start">
        <div className="w-64 h-64 rounded-full flex items-center justify-center mb-4">
          <img src={Pfp} alt="Pfp" className="rounded-full object-cover w-64 h-64" />
        </div>
      </div>

      <div className="w-2/3 md:w-auto p-6 bg-white rounded-3xl shadow-lg mt-8 md:mt-0 md:ml-7">
        <h2 className="text-2xl font-semibold mb-4">About me</h2>
        <p className="mb-4 text-lg font-light">
          I'm a Systems Analyst and Web Programming Enthusiast who loves tackling challenges with creativity, working collaboratively in teams, and continually learning. With a passion for web development and programming, I'm dedicated to finding innovative solutions and enhancing user experiences.
        </p>
        <div className="mb-8 mt-4 md:mt-10 sm:grid sm:grid-cols-5 sm:gap-4 md:w-4/5 md:mx-auto">
          <img src="https://cdn-icons-png.flaticon.com/128/721/721671.png" alt="Tecnología 1" className="w-12 h-12 mx-auto md:mx-0" />
          <img src="https://cdn-icons-png.flaticon.com/128/73/73607.png" alt="Tecnología 2" className="w-12 h-12 mx-auto md:mx-0" />
          <img src="https://cdn-icons-png.flaticon.com/128/274/274439.png" alt="Tecnología 3" className="w-12 h-12 mx-auto md:mx-0" />
          <img src="https://cdn-icons-png.flaticon.com/128/732/732007.png" alt="Tecnología 4" className="w-12 h-12 mx-auto md:mx-0" />
          <img src="https://cdn-icons-png.flaticon.com/128/10933/10933980.png" alt="Tecnología 5" className="w-12 h-12 mx-auto md:mx-0" />
        </div>

        <button className="bg-purple-700 hover:bg-purple-600 text-white py-2 px-4 rounded-full text-sm font-semibold">
          Download
        </button>
      </div>
    </div>
  </div>
  );
}

export default About;
