import React from 'react';
import { useNavigate } from 'react-router-dom';
import exampleImage from '../assets/example.jpg'

function Home(){
    const navigate=useNavigate();
    return(
        <div className='flex flex-row justify-center min-h-screen p-8 bg-gray-700 text-white items-center'>
            <div className='w-1/2 p-6 justify-center items-center text-center'>
                <p className='text-yellow-700 font-semibold'>I'AM KOSICK PAUL</p>
                <h1 className='text-red-600 text-5xl font-bold'>FULL STACK WEB DEVLOPER WITH AI</h1>
                <p className='text-white'>I am Good At Knowledge And Problem Solving </p>
                <button onClick={() => navigate("/Form")} className='bg-blue-600 h-7 w-20 text-center rounded-md font-semibold'>Click Me</button >      
            </div>
            <div className='w-1/2 p-6'>
                <img
                src={exampleImage}
                alt="Portfolio"
                className='rounded-3xl shadow-lg w-full'
                />
                

            </div>

        </div>

    )
}
export default Home;