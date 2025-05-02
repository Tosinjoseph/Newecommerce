import React from 'react'

const Arrival = () => {
  return (
    <div className='w-full font-lora justify-center items-centermx-auto relative bg-center bg-cover py-6 bg-no-repeat h-150 md:h-100' style={{backgroundImage: "url('./arrival-bg.jpg')"}}>
        <div className='w-[42%] absolute right-30 top-20'>
        <h1 className='font-bold text-5xl text-red-400'>#New Arrival</h1>
        <p className='  '>Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
        <button className='absolute px-12 mt-3 hover:bg-transparent cursor-pointer text-white font-bold border-2 border-red-400 py-3 bg-red-400' type='submit'>Shop Now</button>
        </div>
    </div>
  )
}

export default Arrival