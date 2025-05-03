import React from 'react'



const Home = ({setChangeHero,heroData,changeHero}) => {
  return (
    <div className='relative min-h-screen bg-center bg-cover font-lora   items-center mx-auto' style={{backgroundImage:"url('./slider-bg.jpg')"}}>
    
    
     <div className='px-4 w-3/5 py-35 md:px-25 lg:px-30'>
      <h1 className='text-6xl mb-2 font-bold text-red-400'>{heroData.text1}</h1>
      <h1 className='text-6xl font-bold text-gray-800'>{heroData.text2}</h1>
      <p className='py-6 text-lg text-gray-500'>{heroData.text3}</p>

      <button className='px-12 mt-3 hover:bg-transparent cursor-pointer text-white font-bold border-2 border-red-400 py-3 bg-red-400' type='submit'>Shop Now</button>
      
      <div className='flex items-center gap-2 pt-10'>
        <span onClick={()=>setChangeHero(0)} className={` ${changeHero=== 0 ? "bg-red-400 w-4 h-4": "bg-white"} w-3 cursor-pointer h-3 rounded-full`}></span>
        <span onClick={()=>setChangeHero(1)} className={` ${changeHero=== 1 ? "bg-red-400 w-4 h-4": "bg-white"} w-3 cursor-pointer h-3 rounded-full`}></span>
        <span onClick={()=>setChangeHero(2)} className={` ${changeHero=== 2 ? "bg-red-400 w-4 h-4": "bg-white"} w-3 cursor-pointer h-3 rounded-full`}></span>
      </div>

     </div>

    </div>
  )
}

export default Home