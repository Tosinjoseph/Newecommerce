import React from 'react'
import Testimonials from './Testimonials'

const Footer = () => {
  return (
    <div className='bg-[#f8f8f8] overflow-x-hidden  pt-20 font-lora  justify-center items-center mx-auto'>
     <div className='flex-col px-4 md:px-25 md:flex-row lg:px-30 lg:flex space-y-4 gap-10 justify-between'>
        <div className='gap-5 flex-col flex'>
        <div className=' font-bold text-3xl whitespace-nowrap '>
          De<span className='text-red-400 text-4xl '>-A</span>nswer
        </div>
        <div className='font-bold text-lg'>
            ADDRESS: <span className='text-lg font-light'>28 White tower, Street Name New York City, USA</span>
        </div>
        <div className='font-bold text-lg'>
            TELEPHONE: <span className='text-lg font-light'>+91 987 654 3210</span>
        </div>
        <div className='font-bold text-lg'>
            EMAIL: <span className='text-lg font-light'>tosinjosephoffice2@gmail.com</span>
        </div>
        </div>
        <div className='flex-col text-lg flex '>
            <h3 className='text-lg font-bold mb-2'>MENU</h3>
            <p>Home</p>
            <p>About</p>
            <p>Service</p>
            <p>Testimonial</p>
            <p>Blog</p>
            <p>Contact</p>
        </div>
        <div className='flex-col text-lg flex '>
        <h3 className='text-lg font-bold mb-2'>ACCOUNT</h3>
            <p>Account</p>
            <p>Login</p>
            <p>Widget</p>
            <p>Shopping</p>
            <p>Register</p>
            <p>Checkout</p>  
        </div>
        <div>
        <h3 className='text-lg font-bold mb-2'>NEWSLETTER</h3>
        <p className='text-lg'>Subscribe by our newsletter and get update protidin.</p> 
        <div className='mt-6 flex'>
          <input type='email' className='w-50 px-3 py-2 border border-gray-500 bg-transparent' placeholder='Enter Your Mail'/><button className='bg-red-400 cursor-pointer text-white font-semibold py-2.5 px-8'>Subscribe</button> 
        </div> 
        </div>
     </div>
     <div className='text-center text-lg text-white py-4 bg-black/85 mt-25 pb-6'>
        <p>© 2021 All Rights Reserved By<span className='text-red-400 ml-1'>Free Html Templates</span> </p>
        <p>Coded By<span className='text-red-400 ml-1'>Tosin Joseph</span> </p>
     </div>
    </div>
  )
}

export default Footer