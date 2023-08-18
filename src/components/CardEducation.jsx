import React from 'react'

const CardEducation = () => {
  return (
    <div>
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
        <div className="flex items-center">
            <img src="https://www.juan23.edu.ar/wp-content/uploads/2019/03/0308-incio-19-1.jpg" alt="Educación" className="w-1/4 mr-4" />
            <div>
                <h3 className="text-lg font-semibold mb-2">Título de la educación</h3>
                <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt, lectus sed interdum consequat.
                </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CardEducation
