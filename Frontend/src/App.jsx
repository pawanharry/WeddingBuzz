import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import About from './components/About'
import Hero from './components/Hero'
import Price from './components/Price'
import Portfolio from './components/Portfolio'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import{ Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <><Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/Navbar' element={<Navbar/>}/>
      <Route path='/AboutUs' element={<Banner/>}/>
      <Route path='/Services' element={<About/>}/>
      <Route path='/Price' element={<Price/>}/>
      <Route path='/Portfolio' element={<Portfolio/>}/>
      <Route path='/Reviews' element={ <Reviews/>}/>
      <Route path='/Contact' element={  <Contact/>}/>
      <Route path='/Footer' element={ <Contact/>}/>
   
    
    
    
    
   
    
    <Footer/>
    </Routes>
    </>
  )
}

export default App