import React from 'react'
import videoBG from '../assets/videoBG.mp4'

const Presentation = () => {
  return (
    <div>
      <div className="h-screen bg-cover">
        <div className='text-center p-10'>
            <h1 className='font-serif text-6xl text-gray-800'>Hola! Mi nombre es {''}
            <span className='font-semibold text-gray-800'>Federico Pereyra</span></h1>
            <button>Ver más!</button>
        </div>
      </div>
    </div>
  )
}

export default Presentation;
