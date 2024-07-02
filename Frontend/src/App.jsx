import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import About from './components/About'
import Hero from './components/Hero'
import Price from './components/Price'
import Portfolio from './components/Portfolio'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Banner/>
    <About/>
    <Price/>
    <Portfolio/>
    <Footer/>
    </>
  )
}

export default App