import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../Redux/CartSlice';

const Cart = ({address,setShowAddress}) => {
  const cart = useSelector(state=> state.cart);
  const dispatch = useDispatch()
  
  return (
    <div className='font-lora flex-col relative md:flex-row lg:flex space-x-3 px-4 md:px-20 lg:px-25'>
      <div className='w-[70%]'>
      {
        cart.products.length > 0? 
        <div>
          <h2 className='font-bold'>SHOPPING CART</h2>
        {
          cart.products.map(((products)=>(
            <div key={products.id} className='flex'>
             
             <div className='mt-6 flex md:flex-col w-full'>
               <div className='flex-col md:flex-row space-y-6 lg:flex text-xs space-x-10 font-bold w-[100%] pb-1 border-b mr-auto'>
                <p className='flex-1'>PRODUCTS</p>
                <p>PRICE</p>
                <p>QUANTITY</p>
                <p>SUBTOTAL</p>
                <p>REMOVE</p>
              </div>

              <div className='md:mt-4 flex-col space-y-1 -mt-1 md:flex-row lg:flex w-[100%] space-x-18 items-center'>
                <img className='object-contain w-10 h-10' src={products.image} alt="" />
                <p className='flex-1'>Product {products.id}</p>
                <p>${products.price}</p>
                <div className='flex'>
                  <button onClick={()=>dispatch(decreaseQuantity(products.id))} className='px-1.5 border cursor-pointer'>-</button>
                  <p className='px-2'>{products.quantity}</p>
                  <button onClick={()=>dispatch(increaseQuantity(products.id))} className='px-1.5 border cursor-pointer'>+</button>
                </div>
                <p>{products.quantity * products.price}</p>
                <FaTrash onClick={()=>dispatch(removeFromCart(products.id))} className='text-red-600 cursor-pointer'/>
              </div>
             </div>
            </div>
          )))
        }
        </div> 
        : <div>NO</div>
      }
      </div>
      <div className='w-[40%] md:w-[25%] h-80 rounded-xl border'>
        <h3 className='font-bold text-xs p-4'>CART TOTAL</h3>
        <div className='flex  justify-between pb-2 border-b mx-4'>
          <p>Total item:</p>
          <p>{cart.totalQuantity}</p>
        </div>
        <p className='px-4'>Shipping:</p>
        <p className='ml-5 text-xs'>shipping to</p>
        <div className='flex-col md:flex-row lg:flex mx-4  space-x-1 pt-3 pb-4 border-b'>
          <p value={address} className='text-xs font-bold'>{address}</p>
          <button onClick={()=>setShowAddress(true)} className='text-sm text-red-400 cursor-pointer float-right'>Change Address</button>
        </div>
        <div className='flex  px-4 justify-between text-sm mt-4'>
          <p>Total price</p>
          <p>{cart.totalPrice}</p>
        </div>
        <Link to='/checkout'><button className='w-[85%] flex mx-auto justify-center mt-6 py-1 cursor-pointer text-white bg-red-500'>Proceed to checkout</button></Link>
      </div>
     </div> 
  )
}

export default Cart