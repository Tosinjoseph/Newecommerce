import React from 'react'
import {FaTimes } from 'react-icons/fa'


const LoginSignup = ({setShowAddress,showAddress}) => {
  return (
    <div className={`absolute ${showAddress? 'block' : 'hidden'} px-4 py-2 inset-0 bg-black/90`}>
      <FaTimes onClick={()=>setShowAddress(false)} className='text-white cursor-pointer flex float-right '/>

        <div className='w-[45%] h-40  justify-center mx-auto my-60 bg-white'>
          <input type="text" className='border py-2' />

          <div className='flex '>
            <buttton>Cancel</buttton>
            <buttton>Change Address</buttton>
          </div>
        </div>
    </div>
  )
}

export default LoginSignup