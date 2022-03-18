import React from 'react';
import Recycle from '../images/recycle.jpg';
function Navbar() {
  return (
    <div className='w-full bg-gray-300 h-32 flex items-stretch drop-shadow-lg'>
        <img className='w-32 h-32' src={Recycle} alt="Image of a stick figure recycling" />
        <h1 className='text-xl pt-10 mx-auto'> Environmental house project</h1>
    </div>
  )
}

export default Navbar