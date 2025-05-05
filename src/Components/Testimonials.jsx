import React from 'react'
import { Swiper,useSwiper,SwiperSlide } from 'swiper/react'
import 'swiper/css'
import testdata from '../Slider.json'

const Testimonials = () => {
  return (
    <div className='font-lora py-6'>
         <div className='w-full px-4 md:px-25  relative text-center gap-3 py-6 justify-center items-center mx-auto flex'>
            <h1 className='text-5xl font-bold'>Customers'</h1>
            <h1 className='text-red-500 text-5xl font-bold'>Testimonials</h1>
         <div className='absolute top-20 h-1  bg-red-500 w-15 flex mx-auto justify-center'></div>
        </div>
        <Swiper 
        spaceBetween={40}
        breakpoints={{
         640: {
           slidesPerView: 1,
         },
         768: {
           slidesPerView: 1,
         },
         1024: {
           slidesPerView: 1,
         },
       }}
        >
         {
          testdata.map((item, i)=>(
         <SwiperSlide key={i} className='justify-center text-center items-center mx-auto'>
          <div>
            
            <img className='w-38 mt-8 border border-transparent flex mx-auto rounded-full overflow-hidden' src={item.image} alt="" />
        
            <h3 className='mt-4 text-2xl font-semibold'>{item.name}</h3>
            <p className='text-lg text-gray-500'>{item.id}</p>
            <p className='w-1/2 mt-2 text-lg mx-auto'>{item.words}</p>
          </div>
         </SwiperSlide>
          ))
         }
        </Swiper>
    </div>
  )
}

export default Testimonials