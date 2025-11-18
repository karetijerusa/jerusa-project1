import React from 'react';
import {useEffect,useState} from 'react';

function Navbar(){
  const[time,setTime]=useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    },1000);
 
   return () => clearInterval(interval);
  }, []);

  const formatTime = (num) => (num < 10 ? "0" + num : num);

  return(
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className='text-center'>
        <h1 className='text-5xl text-cyan-400 font-bold mb-4'>Digital Clock</h1>
        <div className='bg-gray-900 text-green-400 p-6 rounded-xl shadow-2xl text-6xl font-mono tracking-widest'>
          {formatTime(time.getHours())}:
          {formatTime(time.getMinutes())}:
          {formatTime(time.getSeconds())}
        </div>
      </div>
    </div>
  )
}
export default Navbar;