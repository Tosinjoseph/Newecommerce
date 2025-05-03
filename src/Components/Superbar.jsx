

const Superbar = ({setShowSuperbar,showSuperbar}) => {
   
  return (
    <div className={` bg-white  font-lora justify-center font-bold gap-4 ${showSuperbar? 'flex' : 'hidden'}  lg:hidden flex-col items-center mx-auto text-center  z-10 w-full overflow-hidden h-70`}>
      <a className='hover:text-red-400 cursor-pointer transition ease-in-out duration-500' href="">HOME</a>
      <a className='hover:text-red-400 cursor-pointer transition ease-in-out duration-500' href="">PAGES</a>
      <a className='hover:text-red-400 cursor-pointer transition ease-in-out duration-500' href="">PRODUCTS</a>
      <a className='hover:text-red-400 cursor-pointer transition ease-in-out duration-500' href="">BLOGS</a>
      <a className='hover:text-red-400 cursor-pointer transition ease-in-out duration-500' href="">CONTACT</a>
     <img className='object-contain w-5 filter-invert brightness-0' src="./search-icon.png" alt="" />
     <img className='object-contain w-5 filter-invert brightness-0' src="./user-icon.png" alt="" />
    
    </div>
  )
}

export default Superbar