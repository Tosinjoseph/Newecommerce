import React from 'react'
import {FaTimes } from 'react-icons/fa'


const Address = ({address, setAddress, setShowAddress,showAddress}) => {
  return (
    <div className={`absolute ${showAddress? 'block' : 'hidden'} px-4 py-2 inset-0 bg-black/90`}>
      <FaTimes onClick={()=>setShowAddress(false)} className='text-white cursor-pointer flex float-right '/>

        <div className='w-[90%] md:w-[45%] h-40 rounded-lg  justify-center py-6 mx-auto my-60 bg-white'>
          <input value={address} onChange={(e)=>setAddress(e.target.value)} type="text" className='border rounded-xs w-[90%] flex mx-auto py-1 mt-3' />

          <div className='flex space-x-2 text-white font-semibold py-3 float-right pr-7'>
            <buttton className='px-4 py-0.5 cursor-pointer hover:scale-102 rounded-xs bg-gray-700'>Cancel</buttton>
            <buttton onClick={()=>setShowAddress(false)} className='px-4 py-0.5  cursor-pointer hover:scale-102 rounded-xs bg-blue-600'>Save Address</buttton>
          </div>
        </div>
    </div>
  )
}

export default Address