import React from 'react';
import {useNavigate} from 'react-router-dom';


function Navbar () {

  const navigate=useNavigate();
  return(
    <nav className='flex justify-between items-center bg-gray-900 text-white p-5'>
      <div>
        <h1 className='text-green-800 text-4xl font-bold'>Portfolio</h1>
      </div>
      <div className='flex list-none gap-5 items-center'>
        <button onClick={() => navigate("/")} className='hover:text-blue-700 font-bold'>Home</button>
        <button onClick={() => navigate("/About")} className='hover:text-blue-700 font-bold'>About</button>
        <button onClick={() => navigate("/Services")} className='hover:text-blue-700 font-bold'>Services</button>
        <button onClick={() => navigate("/Form")} className='bg-blue-600 h-7 w-20 text-center rounded-md font-semibold'>Login</button>
      </div>
    </nav>

  )
}
export default Navbar