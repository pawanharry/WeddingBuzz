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
import { Route, Routes } from 'react-router-dom'



const App = () => {
  return (
    <>
    <Routes>
            <Route path='/' element={<Hero />}/>
            <Route path='/about' element={ <Banner/>}/>
            <Route path='/services' element={<About/>}/>
            <Route path='/Price' element={ <Price/>}/>
            <Route path='/portfolio' element={ <Portfolio/>}/>
            <Route path='/reviews' element={<Reviews/>} />
            <Route path='/contact' element={<Contact/>} />

    </Routes>
   
    
    
    
    
    
    
    <Footer/>
    </>
  )
}

export default App