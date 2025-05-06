import React from 'react'
import { FaStar } from 'react-icons/fa'

import { FaShip, FaTruckFast } from 'react-icons/fa6'

const Subhero = () => {
  return (
    <div className='px-6 font-lora md:px-25 lg:px-30 mx-auto items-center justify-center py-15'>
        <h1 className='font-bold text-5xl pt-3 text-center'>Why Shop With Us?</h1>
        <div className='flex justify-center items-center mx-auto w-20 h-1 mt-3 bg-red-500'></div>
        
        <div className='w-full  flex-column justify-center mx-auto md:flex lg:flex-row gap-8  pt-17'>
            <div className=' rounded w-full  transition ease-in-out hover:scale-105 duration-500 md:w-1/3 mb-4    px-6 py-12 bg-[#002c3e]'>
            <FaTruckFast className='flex mx-auto mb-6 w-10 h-8 text-white'/>
            <h3 className='font-bold text-2xl text-center text-white mt-3'>Fast Delivery</h3>
            <p className='text-white text-lg text-center mt-1.5'>variations of passages of Lorem Ipsum available</p>
            </div>
            <div  className='rounded w-full  transition ease-in-out duration-500 md:w-1/3 px-6 mb-4 hover:scale-105  py-10 bg-[#002c3e]'>
            <FaShip className='w-10 flex mx-auto h-8 mb-6 text-white'/>
            <h3  className='font-bold text-2xl text-center text-white mt-3'>Free Shiping</h3>
            <p className='text-white text-lg text-center mt-1.5'>variations of passages of Lorem Ipsum reuseable</p>
            </div>
            <div  className='rounded w-full  transition ease-in-out duration-300 md:w-1/3 hover:scale-105 px-6 mb-4 py-10 bg-[#002c3e]'>
            <FaStar className='w-10 flex mx-auto h-8 mb-6 text-white'/>
            <h3  className='font-bold text-2xl text-center text-white mt-3'>Best Quality</h3>
            <p className='text-white text-lg text-center mt-1.5'>variations of passages of Lorem Ipsum reutilized</p>
            </div>
        </div>
    </div>
  )
}

export default Subhero