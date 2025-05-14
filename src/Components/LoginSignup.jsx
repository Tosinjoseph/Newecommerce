import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

const LoginSignup = ({loginShow,setLoginShow}) => {
  const[sign, switchSign] = useState('Sign Up')
  return (
    <div className={`absolute ${loginShow? 'block' : 'hidden'} px-4 py-4  inset-0 bg-black/90`}>
         <FaTimes onClick={()=>setLoginShow(false)} className='text-white cursor-pointer flex float-right '/>


<div className='px-4 md:px-25 w-2/3 py-6 md:w-3/5 bg-white mt-30 lg:px-30 justify-center items-center mx-auto'>
<h2 className='pb-6 text-2xl font-bold font-lora'>{sign}</h2>
{ sign=== 'Login' ? <></> : <><div className='mb-4'>
  <p className='text-gray-500'>Name</p>
  <input type="text"  className='w-[90%] rounded-xs border px-2 py-2' />
</div></>

}
<div className='mb-4'>
  <p className='text-gray-500'>Email</p>
  <input type="email" className='w-[90%] rounded-xs border px-2 py-2' />
</div>
<div className='mb-4'>
  <p className='text-gray-500'>Password</p>
  <input type="password" className='w-[90%] rounded-xs border px-2 py-2' />
</div>
{sign=== 'Login'? <>
<div className='flex w-[90%] justify-between items-center'>
  <span className='flex py-2 items-center'><input type='checkbox'/><p className='ml-2'>Remember Me</p></span>
  <a href="" className='hover:text-blue-500'>Forgot password ?</a>
</div>
</> : <></>}
<button className='w-[90%] bg-red-400 cursor-pointer font-semibold rounded-xs mt-2 text-white py-2'>{sign==='Sign Up'? <>Sign Up</> : <>Login</>}</button>
{ sign=== 'Sign Up'? <><p className='text-center mt-4'>Already have an account? <a onClick={()=>switchSign('Login')} className='text-red-400 cursor-pointer'>Login</a></p></> : <><p className='text-center mt-4'>Already have an account? <a onClick={()=>switchSign('Sign Up')} className='text-red-400 cursor-pointer'>Sign Up</a></p></>}

</div>

    </div>
  )
}

export default LoginSignup