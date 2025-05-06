import { Link } from "react-router-dom"


const Superbar = ({setShowSuperbar,showSuperbar}) => {
   
  return (
    <div className={` bg-white  font-lora justify-center font-bold gap-4 ${showSuperbar? 'flex' : 'hidden'}  lg:hidden flex-col items-center mx-auto text-center  z-10 w-full overflow-hidden h-70`}>
      <Link to='/'><a className='hover:text-red-400 cursor-pointer transition ease-in-out duration-500' href="">HOME</a></Link>
      <Link to=''><a className='hover:text-red-400 cursor-pointer transition ease-in-out duration-500' href="">PAGES</a></Link>
      <Link to='/product'><a className='hover:text-red-400 cursor-pointer transition ease-in-out duration-500' href="">PRODUCTS</a></Link>
      <Link to='/blog'><a className='hover:text-red-400 cursor-pointer transition ease-in-out duration-500' href="">BLOGS</a></Link>
      <Link to='/contact'><a className='hover:text-red-400 cursor-pointer transition ease-in-out duration-500' href="">CONTACT</a></Link>
      <Link to='/cart'><img className='object-contain w-5 filter-invert brightness-0' src="./search-icon.png" alt="" /></Link>
      <Link><img className='object-contain w-5 filter-invert brightness-0' src="./user-icon.png" alt="" /></Link>
    
    </div>
  )
}

export default Superbar