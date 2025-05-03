import React from 'react'

const Arrival = () => {
  return (
    <div className='w-full font-lora justify-center items-center mx-auto relative bg-center bg-cover py-10 bg-no-repeat h-200 md:h-130' style={{backgroundImage: "url('./arrival-bg.jpg')"}}>
        <div className='w-[42%] absolute right-30 top-29'>
        <h1 className='font-bold text-5xl text-gray-800'>#New Arrival</h1>
        <p className=' text-lg text-gray-500 mt-4 mb-6 '>Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
        <button className='absolute whitespace-nowrap px-12 mt-3 hover:bg-transparent cursor-pointer text-white font-bold border-2 border-red-400 py-3 bg-red-400' type='submit'>Shop Now</button>
        </div>
    </div>
  )
}

export default Arrival