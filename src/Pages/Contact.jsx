import React from 'react'

const Contact = () => {
  return (
    <div className='font-lora w-full py-12'>
        <div className='bg-red-400 text-center text-5xl font-bold text-white w-full py-10'> Contact Us</div>
        <div className='w-full space-y-4 py-20  justify-center mx-auto'>
            <input type="text" placeholder='Enter Your Full Name' className='py-4 p-4 mx-auto  block border-gray-300  border bg-white w-[50%]' />
            <input type="email" placeholder='Enter Your Email Address'className='py-4 p-4 mx-auto block border-gray-300 border bg-white w-[50%]' />
            <input type="text" placeholder='Enter The Subject' className='py-4 p-4 mx-auto border border-gray-300 block bg-white w-[50%]' />
            <textarea type="text" placeholder='Enter Subject'  className='py-4 p-4 h-20 mx-auto border border-gray-300 block bg-white w-[50%]' />
            <button className='flex mx-auto mt-9 font-bold cursor-pointer bg-black/85 text-lg hover:bg-red-400 text-white px-12 py-3'>Submit</button>
        </div>
    </div>
  )
}

export default Contact