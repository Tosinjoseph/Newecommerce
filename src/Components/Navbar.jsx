import React from 'react'
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'


const Navbar = ({setShowSuperbar, showSuperbar}) => {
   const Navigate = useNavigate();
   const products = useSelector(state=> state.cart.products);
  return (
     
    <div className='flex justify-between font-lora bg-white py-7 gap-6 items-center px-4 md:px-30 lg:px-35'>
        <div className=' font-bold text-3xl pb-2 whitespace-nowrap '>
          De<span className='text-red-400 text-4xl '>-A</span>nswer
        </div>
        
        <div className='relative lg:flex gap-10 hidden font-bold'>
    
          <a onClick={()=>Navigate('/')} className='hover:text-red-400 transition ease-in-out duration-500' href="">HOME</a>
          <div className='relative group pb-1'>
          <a className='hover:text-red-400 transition  ease-in-out duration-500' href="">PAGES</a>
          <div className='w-40 h-20 mt-1 p-2 text-lg bg-white transition-transform duration-500 absolute group-hover:translate-y-0 -translate-y-70 border z-100 '>
            <Link to='/blog'><p className='hover:text-red-400 cursor-pointer'>About</p></Link>
            <Link to='/testimonial'><p className='hover:text-red-400 cursor-pointer'>Testimonial</p></Link>
          </div>
          </div>
         <Link to='/product' onClick={()=>Navigate('/product')} ><a className='hover:text-red-400 transition ease-in-out duration-500' href="">PRODUCTS</a></Link>
         <Link to='/blog'><a className='hover:text-red-400 transition ease-in-out duration-500' href="">BLOG</a></Link>
          <Link to='/contact'><a className='hover:text-red-400 transition ease-in-out duration-500' href="">CONTACT</a></Link>
        
          <FaSearch className='mt-1'/>
          <Link to='/cart' ><FaShoppingCart className='mt-1 relative cursor pointer'/>
          <span className='text-white absolute text-sm right-0.5 top-1.5 w-4 h-4 text-center rounded-full bg-red-400 '>{products.length > 0? products.length : <></>}</span></Link>
        </div>
      {showSuperbar? <><img onClick={()=>Navigate('/')} onClick={()=>setShowSuperbar(false)} className='absolute z-100 block lg:hidden cursor-pointer filter-invert brightness-0 w-7 right-12' src="./cross_icon.svg" alt="" /></> : <> <img onClick={()=>setShowSuperbar(true)} src="./toggle-icon.png" className='absolute block lg:hidden cursor-pointer filter-invert brightness-0 w-7 right-12' alt="" /></>   }
        
    </div>
    
  
  )
}

export default Navbar