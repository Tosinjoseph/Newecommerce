import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';
import { useSelector } from 'react-redux'

const Cart = () => {
  const cart = useSelector(state=> state.cart);
  return (
    <div className='font-lora flex-col md:flex-row lg:flex space-x-3 px-4 md:px-20 lg:px-25'>
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
                  <button className='px-1.5 border cursor-pointer'>-</button>
                  <p className='px-2'>{products.quantity}</p>
                  <button className='px-1.5 border cursor-pointer'>+</button>
                </div>
                <p>{products.quantity * products.price}</p>
                <FaTrash className='text-red-600 cursor-pointer'/>
              </div>
             </div>
            </div>
          )))
        }
        </div> 
        : <div>NO</div>
      }
      </div>
      <div className='w-[20%] border'>

      </div>
     </div> 
  )
}

export default Cart