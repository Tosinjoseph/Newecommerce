import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


const Superbar = ({setShowSuperbar,showSuperbar}) => {
  const cart = useSelector(state =>state.cart)
   
  return (
    <div className={` bg-white  font-lora justify-center font-bold gap-4 ${showSuperbar? 'flex' : 'hidden'}  lg:hidden flex-col items-center mx-auto text-center  z-10 w-full overflow-hidden h-70`}>
      <Link to='/'><a className='hover:text-red-400 cursor-pointer transition ease-in-out duration-500' href="">HOME</a></Link>
      <Link to=''><a className='hover:text-red-400 cursor-pointer transition ease-in-out duration-500' href="">PAGES</a></Link>
      <Link to='/product'><a className='hover:text-red-400 cursor-pointer transition ease-in-out duration-500' href="">PRODUCTS</a></Link>
      <Link to='/blog'><a className='hover:text-red-400 cursor-pointer transition ease-in-out duration-500' href="">BLOGS</a></Link>
      <Link to='/contact'><a className='hover:text-red-400 cursor-pointer transition ease-in-out duration-500' href="">CONTACT</a></Link>
      <Link to='/cart'><FaShoppingCart className='object-contain relative w-5 filter-invert brightness-0' src="./search-icon.png" alt="" />
      <div className="absolute top-80 text-white bg-red-400 w-4 rounded-full h-4">{cart.products.length > 0? cart.products.length : <></>}</div>
      </Link>
      <Link><img className='object-contain w-5 filter-invert brightness-0' src="./user-icon.png" alt="" /></Link>
    
    </div>
  )
}

export default Superbar