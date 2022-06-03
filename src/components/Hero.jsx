import React from 'react'
import Typed from 'react-typed';
function Hero() {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>Growing as a Buisness</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with Software</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast,Flexible Solutions for</p>
                <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' strings={['Website.','Software','Media.']} typeSpeed={120} backSpeed={140} loop/>
            </div>
            <p className='md:text=2xl font-bold text-gray-500'>Monitor your growth with brand new Software</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started!</button>
            
        </div>

    </div>
  )
}

export default Hero