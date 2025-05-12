import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Checkout = () => {
  const[billing, setBilling] = useState(false)
  const[shipping, setShipping] = useState(false)
  const[payment, setPayment] = useState(false)
  const[paymentMethod, setPaymentMethod] = useState('cod')
  const cart = useSelector(state=> state.cart)
  return (
    <div className='px-4 font-lora md:px-30 lg:px-35 pb-40 py-6 w-full'>
      <h3 className='font-semibold text-lg mb-3'>CHECKOUT PAGE</h3>

    <div className='flex gap-8 '>
      <div className='w-[65%] space-y-8'>
      <div className='border p-2'>
       <span className='flex justify-between'>
        <h3 className='font-semibold'>Billing Information</h3>{billing? <FaAngleUp className='cursor-pointer' onClick={()=>setBilling(false)}/> :<FaAngleDown className='cursor-pointer' onClick={()=>setBilling(true)}/>}
       </span>
  <div className={`${billing? "block": "hidden"}`}>
  <div className='mb-4 mt-4'>
  <p className='text-gray-500'>Name</p>
  <input type="text" placeholder='Input Name'  className='w-full px-2 rounded-xs border py-2' />
</div>
<div className='mb-4'>
  <p className='text-gray-500'>Email</p>
  <input type="email" placeholder='Input Email' className='w-full px-2 rounded-xs border py-2' />
</div>
<div className='mb-4'>
  <p className='text-gray-500'>Phone</p>
  <input type="number" placeholder='Input Phone No' className='w-full px-2 rounded-xs border py-2' />
</div>
       </div>
       </div>

       <div className='border p-2'>
       <span className='flex justify-between'>
        <h3 className='font-semibold'>Shipping Information</h3>{shipping? <FaAngleUp className='cursor-pointer' onClick={()=>setShipping(false)}/> :<FaAngleDown className='cursor-pointer' onClick={()=>setShipping(true)}/>}
       </span>

       <div className={`${shipping? "block": "hidden"}`}>
  <div className='mb-4 mt-4'>
  <p className='text-gray-500'>Address</p>
  <input type="text" placeholder='Input Address'  className='w-full px-2 rounded-xs border py-2' />
</div>
<div className='mb-4'>
  <p className='text-gray-500'>City</p>
  <input type="email" placeholder='Enter City Name' className='w-full px-2 rounded-xs border py-2' />
</div>
<div className='mb-4'>
  <p className='text-gray-500'>Zip Code</p>
  <input type="text" placeholder='Input Zip Code' className='w-full px-2 rounded-xs border py-2' />
</div>
       </div>
       </div>

       <div className='border p-2'>
       <span className='flex justify-between'>
        <h3 className='font-semibold'>Payment Information</h3>{payment? <FaAngleUp className='cursor-pointer' onClick={()=>setPayment(false)}/> :<FaAngleDown className='cursor-pointer' onClick={()=>setPayment(true)}/>}
       </span>
       <div className={`${payment? "block": "hidden"}`}>
        <span className='flex gap-2 mt-4'><input type="radio" checked={paymentMethod==='cod' } onChange={()=>setPaymentMethod('cod')} /> <p>Cash on Delivery</p></span>
        <span className='flex gap-2 '><input type="radio" checked={paymentMethod==='dc' } onChange={()=>setPaymentMethod('dc')} /> <p>Debit Card</p></span>
       </div>
       </div>

       {paymentMethod==="dc" && (
        <div className='bg-gray-200 p-4'>
          <h3 className='font-bold'>Debit Card Information</h3>

          <div className='mb-4 mt-4'>
  <p className='text-gray-500'>Card Number</p>
  <input type='text' placeholder='Enter Card Number'  className='w-full px-2 rounded-xs bg-white py-2' />
</div>
<div className='mb-4'>
  <p className='text-gray-500'>Card Holder Name</p>
  <input type="email" placeholder='Enter Holder Name' className='w-full px-2 rounded-xs bg-white py-2' />
</div>
 <div className='flex-col md:flex-row lg:flex justify-between'>
  <div className='mb-4 w-full'>
  <p className='text-gray-500'>Expiry Date</p>
  <input type="text" placeholder='DD/MM/YYYY' className='w-full md:w-[95%] px-2 rounded-xs bg-white py-2' />
</div>
<div className='mb-4'>
  <p className='text-gray-500'>CVV</p>
  <input type="text" placeholder='CVV' className=' px-2 rounded-xs bg-white py-2' />
</div>
 </div>
        </div>
       )}
      </div>

      <div className='w-[35%]'>
        <div className='w-full border p-4 rounded-lg'>
          <h3 className='font-bold'>Order Summary</h3>
          {
            cart.products.map(((products)=>(
              <div key={products.id}>
                <div className='pt-2'>
                  <img className='object-contain w-8' src={products.image} alt="image" />
                  <div>
                    <p>Product {products.id}</p>
                    <p>${products.price}</p>
                  </div>
                </div>
                
              </div>
            )))
          }

        </div>

      </div>
    </div>
    
    </div>
  )
}

export default Checkout