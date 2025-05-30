
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Pages/Home.jsx'
import { useState } from 'react'
import Subhero from './Components/Subhero.jsx'
import Arrival from './Components/Arrival.jsx'
import Navbar from './Components/Navbar.jsx'
import Superbar from './Components/Superbar.jsx'
import Stores from './Components/Stores.jsx'
import Subscribe from './Components/Subscribe.jsx'
import Testimonials from './Components/Testimonials.jsx'
import Footer from './Components/Footer.jsx'
import Product from './Pages/product.jsx'
import Footersecond from './Components/Footersecond.jsx'
import Blog from './Pages/Blog.jsx'
import Contact from './Pages/Contact.jsx'
import Testimonialpage from './Pages/Testimonialpage.jsx'
import Cart from './Pages/Cart.jsx'
import Address from './Components/Address.jsx'
import LoginSignup from './Components/LoginSignup.jsx'
import Checkout from './Pages/Checkout.jsx'
import Order from './Pages/Order.jsx'


let heroData=[
  {text1: 'Sale 20% Off', text2:'On Everything' , text3:'Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.'},
  {text1: 'Sale 30% Off', text2: 'On All Sales', text3:'Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.'},
  {text1: 'Sale 50% Off', text2: 'On All Purchases', text3:'Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.'}
  
]

function App() {
  const[changeHero, setChangeHero]= useState(0)
  const[showSuperbar, setShowSuperbar]= useState(false)
  const[showAddress, setShowAddress] = useState(false)
  const[address, setAddress] = useState('Okeola powerline')
  const[loginShow, setLoginShow] = useState(false)
  const[order, setOrder] = useState(null)

  return (
    <Router>
      
      <Routes>
        <Route path='/' element={<><Navbar  loginShow={loginShow} setLoginShow={setLoginShow} showSuperbar={showSuperbar} setShowSuperbar={setShowSuperbar}/>
        <Superbar showSuperbar={showSuperbar} setShowSuperbar={setShowSuperbar}/>
        <Home heroData={heroData[changeHero]} setChangeHero={setChangeHero} changeHero={changeHero}/>
        <Subhero/>
        <Arrival/>
        <Stores/>
        <Subscribe/>
        <Testimonials/>
        <Footer/>
        </>}/>

        <Route path='/product' element={<>
        <Navbar  loginShow={loginShow} setLoginShow={setLoginShow}/>
        <Product/>
        <Footersecond/>
        </>}/>
        
        <Route path='/blog' element={<>
        <Navbar/>
        <Blog/>
        <Subhero/>
        <Footersecond/>
        </>}/>

        <Route path='/contact' element={<>
        <Navbar/>
        <Contact/>
        <Arrival/>
        <Footersecond/>
        </>}/>
        <Route path='/testimonial' element={<>
         <Navbar/>
         <Testimonialpage/>
         <Testimonials/>
         <Footersecond/>
        </>}/>
        <Route path='/cart' element={<>
        <Navbar loginShow={loginShow} setLoginShow={setLoginShow}/>
        <Cart address={address} setAddress={setAddress} setShowAddress={setShowAddress} showAddress={showAddress}/>
        <Address address={address} setAddress={setAddress} setShowAddress={setShowAddress} showAddress={showAddress}/>
        
        </>}/>
        <Route path='/checkout' element={<>
        <Navbar/>
        <Checkout order={order} setOrder={setOrder}/>
        <Footersecond/>
        </>}/>
        <Route path='/order' element={<>
        <Navbar/>
        <Order order={order} setOrder={setOrder}/>
        <Footersecond/>
        </>}/>
      </Routes>
      <LoginSignup loginShow={loginShow} setLoginShow={setLoginShow}/>
    </Router>

    
  )
}

export default App
