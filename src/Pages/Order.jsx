import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Order = ({order}) => {
    const cart = useSelector(state => state.cart)
    const Navigate = useNavigate()

  return (
    <div className='px-4 font-lora md:px-30 lg:px-35 py-20'>
     <h3 className='font-bold text-xl'>Thanks for placing your Order</h3>
     <p className='pt-2 text-gray-500 text-lg'>Your order has been placed succesfully and you will receive an email shortly</p>

     <div className='w-full space-y-3 border mt-6 p-4 rounded-sm bg-gray-200'>
       <h3 className='font-bold'>Order Summary</h3>
       <p>Order Number: {order.orderNumber}</p>
       <h3 className='font-bold'>Shipping Information</h3>
       <p></p>
       <p></p>
       <p></p>
       <h3  className='font-bold'>Product Ordered</h3>
        {
         cart.products.map(((products)=>(
            <div className='' key={products.id}>
            <div className='flex justify-between'>
                <p>Product {products.id} x {products.quantity}</p>
                <p>${products.price} * {products.quantity}</p>
            </div>
            </div>
         )))
        }
        <div className='flex justify-between'>
            <p>Total Price:</p>
            <p>${cart.totalPrice}</p>
        </div>
        <div className='flex gap-4'>
            <button className='bg-green-500 hover:bg-green-300 cursor-pointer text-white py-1 px-2.5 rounded-xs'>Order Tracking</button>
            <button onClick={()=>Navigate('/')} className='bg-red-400 hover:bg-red-300 cursor-pointer text-white py-1 px-2.5 rounded-xs'>Continue Shopping</button>
        </div>
     </div>
    </div>
  )
}

export default Order