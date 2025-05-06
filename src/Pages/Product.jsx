import React from 'react'
import { useSelector } from 'react-redux'



const Product = () => {
    const products = useSelector(state=> state.product.products)
   
  return (
    <div className='font-lora flex flex-col pb-16 mx-auto w-full justify-center'>
      <div className='bg-red-400 text-center text-5xl font-bold text-white w-full py-10'> Product Grid</div>
        <div className='w-full relative text-center gap-3 py-10 justify-center items-center mx-auto flex'>
            <h1 className='text-5xl font-bold'>Our</h1>
            <h1 className='text-red-500 text-5xl font-bold'>products</h1>
        <div className='absolute top-20 h-1 mt-4  bg-red-500 w-15 flex mx-auto justify-center'></div>
       </div>
        <div className='grid w-full relative pt-6 px-4 gap-3 md:px-25 lg:px-30 overflow-hidden container justify-center items-center mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          products.map(((products)=>(
            <div className='border-b-2 shadow-lg border-gray-100 pr-2 pb-2 border-r-2'>
            <div key={products.id} className='w-full relative group p-6 brightness-100  bg-gray-100 h-80'>
            <img className=' flex justify-center mx-auto w-30 h-50 object-contain'  src={products.image} alt="" />
            <div className='flex justify-between pt-6 font-bold'>
                <h3>{products.name}</h3>
              <h3>{products.price}</h3>
              </div>
              <div className='absolute inset-0 hidden bg-white/50 group-hover:block'></div>
              <button className='bg-red-400 whitespace-nowrap border hover:bg-transparent cursor-pointer hover:text-red-400 border-red-400 hidden group-hover:block top-32 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute text-white font-extralight px-8 py-2 rounded-full'>Add to Cart</button>
              <button className='bg-black whitespace-nowrap border border-black cursor-pointer   hidden group-hover:block hover:bg-transparent top-45 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute text-white font-extralight px-10 py-2 rounded-full'>Buy Now</button>
              
            </div>
            </div>
            
          )))
        }
        </div>
        <div className='flex w-full py-8 mx-auto text-center items-center justify-center'>
          <button className='bg-red-400 cursor-pointer border hover:text-red-400 border-red-400 hover:bg-transparent text-white py-4 px-12'>View More Products</button>
        </div>
    </div>
  )
}

export default Product