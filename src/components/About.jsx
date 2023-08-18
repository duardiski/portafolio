import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-min">
      <div className="max-w-7xl mx-auto mt-8 p-8 flex justify-between items-start">
        <div className="w-2/3 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Acerca de mí</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ipsum ac ligula congue, ut imperdiet ex auctor. Nullam tincidunt, lectus sed interdum consequat, justo orci venenatis ex, vel volutpat justo enim vel ante.
          </p>
          <div className="flex space-x-4 mb-4">
            <img src="tecnologia1.png" alt="Tecnología 1" className="w-16 h-16" />
            <img src="tecnologia2.png" alt="Tecnología 2" className="w-16 h-16" />
            {/* ... (otros logos de tecnologías) */}
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Descargar
          </button>
        </div>
        <div className="w-1/3 flex flex-col items-center">
          <div className="bg-blue-500 w-20 h-20 rounded-full flex items-center justify-center text-white">
            F
          </div>
          <h3 className="mt-2 text-lg font-semibold">Federico Pereyra</h3>
        </div>
      </div>
    </div>
  );
}

export default About;
