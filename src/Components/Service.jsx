import React from 'react';
import {useState} from 'react';

function Services(){
    const [count,setCount] = useState(0);

    return(
        <div className='bg-gray-700 min-h-screen'>
            <h1 className='text-white text-5xl items-center text-center'>{count}</h1>
            <div className='flex justify-center gap-5 items-center p-6'>
            <button onClick={() => setCount(count + 1)} className='bg-blue-600 h-7 w-20 text-center rounded-md font-semibold'>Increment</button>
            <button onClick={() => setCount(count - 1)} className='bg-blue-600 h-7 w-20 text-center rounded-md font-semibold'>Decrement</button>
            <button onClick={() => setCount(0)} className='bg-blue-600 h-7 w-20 text-center rounded-md font-semibold'>Reset</button>
            </div>
        </div>

    )
}
export default Services;