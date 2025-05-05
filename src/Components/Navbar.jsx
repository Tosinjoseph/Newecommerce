import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = ({setShowSuperbar, showSuperbar}) => {
   const Navigate = useNavigate();
  return (
    
    <div className='flex justify-between font-lora bg-white py-6 gap-6 items-center px-4 md:px-30 lg:px-35'>
        <div className=' font-bold text-3xl whitespace-nowrap '>
          De<span className='text-red-400 text-4xl '>-A</span>nswer
        </div>
        
        <div className='relative lg:flex gap-10 hidden font-bold'>
    
          <a onClick={()=>Navigate('/')} className='hover:text-red-400 transition ease-in-out duration-500' href="">HOME</a>
          <a className='hover:text-red-400 transition ease-in-out duration-500' href="">PAGES</a>
         <Link to='/product'> <a className='hover:text-red-400 transition ease-in-out duration-500' href="">PRODUCTS</a></Link>
          <a className='hover:text-red-400 transition ease-in-out duration-500' href="">BLOG</a>
          <a className='hover:text-red-400 transition ease-in-out duration-500' href="">CONTACT</a>
          <img className='object-contain w-5 filter-invert brightness-0' src="./search-icon.png" alt="" />
          <img className='object-contain w-5 filter-invert brightness-0' src="./user-icon.png" alt="" />
          
        </div>
      {showSuperbar? <><img onClick={()=>setShowSuperbar(false)} className='absolute block lg:hidden cursor-pointer filter-invert brightness-0 w-7 right-12' src="./cross_icon.svg" alt="" /></> : <> <img onClick={()=>setShowSuperbar(true)} src="./toggle-icon.png" className='absolute block lg:hidden cursor-pointer filter-invert brightness-0 w-7 right-12' alt="" /></>   }
        
    </div>
    
  
  )
}

export default Navbar