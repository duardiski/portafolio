import React from 'react';
import proyecto1Image from "../assets/proyecto1.png";

const Proyecto1 = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-6 text-center m-12 mt-2">
          <h3 className="text-lg font-semibold mb-4">Appointments React</h3>
          <img src={proyecto1Image} alt="Appointments React Project" className="mb-4 max-w-full h-auto" />
          <p className="text-gray-700 mb-4 font-light text-sm">
              Simple scheduled appointments project that fulfills CRUD requirements.
          </p>
          <button className="bg-purple-700 hover:bg-purple-600 text-white py-2 px-4 rounded-full text-sm font-semibold">
              Explore
          </button>
      </div>
    </div>

  )
}

export default Proyecto1
