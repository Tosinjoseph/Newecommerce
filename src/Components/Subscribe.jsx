import React from 'react'

const Subscribe = () => {
  return (
    <div className='bg-[#d4ced0] font-lora py-20 text-center'>
        <h2 className='text-gray-800 text-5xl font-bold'>Subscribe To Get</h2>
        <h2 className='text-gray-800 text-5xl mt-2 font-bold'>Discount Offers !</h2>
        <p className='text-lg w-1/2 justify-center mx-auto text-gray-500 mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        <input type="text" className='bg-white px-3 rounded-full mt-12 h-14 w-1/2 md:w-1/3' placeholder='Enter your email'/>
        <button className='block justify-center mx-auto mt-10 text-white bg-red-400 px-12 py-3 rounded-full'>Subscribe</button>
    </div>
  )
}

export default Subscribe