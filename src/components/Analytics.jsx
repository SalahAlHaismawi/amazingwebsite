import React from 'react'
import Laptop from '../assets/laptop.jpg';
function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="Laptop" />
            <div className='flex flex-col justify-center'>
              <p className='text-[#00df9a] font-bold'>Growth Is a life</p>  
              <h1 className=
              'md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
               Manage your website
              </h1>
              {/*  testtt*/}
              <p>Growth start from the understanding of your surroundings, and data is the main pillar to build strong financial decisions. <b>excel as a Business. Get Started!</b> </p>
            </div>
        </div>
    </div>
  )
}

export default Analytics