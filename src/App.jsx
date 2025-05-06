
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


let heroData=[
  {text1: 'Sale 20% Off', text2:'On Everything' , text3:'Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.'},
  {text1: 'Sale 30% Off', text2: 'On All Sales', text3:'Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.'},
  {text1: 'Sale 50% Off', text2: 'On All Purchases', text3:'Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.'}
  
]

function App() {
  const[changeHero, setChangeHero]= useState(0)
  const[showSuperbar, setShowSuperbar]= useState(false)

  return (
    <Router>
      
      <Routes>
        <Route path='/' element={<><Navbar showSuperbar={showSuperbar} setShowSuperbar={setShowSuperbar}/>
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
        <Navbar/>
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
      </Routes>
    </Router>

    
  )
}

export default App
