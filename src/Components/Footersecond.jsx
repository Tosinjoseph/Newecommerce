import React from 'react'

const Footersecond = () => {
  return (
    <div className='bg-[#002c3e] font-lora px-4 md:px-25 lg:px-30 backdrop-brightness-50 py-18'>
     <div   className='flex-col space-y-6 md:flex-row lg:flex space-x-40'>
        <div className='space-y-6 text-white'>
            <h3 className='text-3xl font-bold mb-7'>Reach at:</h3>
            <div className='flex items-center'><img src="./map-icon.png" className='object-contain h-5' alt="" /> <p className='ml-2 text-xl'>Location</p></div>
            <div className='flex items-center'><img src="./call-icon.png" className='object-contain h-5' alt="" /> <p className='ml-2 text-xl'>Call +2349070217736</p></div>
            <div className='flex items-center'><img src="./mail-icon.png" className='object-contain  w-4' alt="" /> <p className='ml-2 text-xl'>tosinjosephoffice2@gmail.com</p></div>
        </div>
        <div className='space-y-6 text-white'>
            <h3 className='text-3xl font-bold mb-7'>De-Answer</h3>
            <p className='w-1/3 text-xl'>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</p>
            <div className='flex gap-2'>
                <img className='p-4 rounded-full bg-white' src="" alt="" />
                <img className='p-4 rounded-full bg-white' src="" alt="" />
                <img className='p-4 rounded-full bg-white' src="" alt="" />
                <img className='p-4 rounded-full bg-white' src="" alt="" />
                <img className='p-4 rounded-full bg-white' src="" alt="" />
            </div>
        </div>
     </div>
     <div className='text-center flex-col justify-center items-center mx-auto w-[65%] border-t border-gray-100/50 text-lg text-white py-4 mt-25 pb-6'>
        <p>© 2021 All Rights Reserved By<span className='text-red-400 ml-1'>Free Html Templates</span> </p>
        <p>Coded By<span className='text-red-400 ml-1'>De Answer</span> </p>
     </div>

    </div>
  )
}

export default Footersecond