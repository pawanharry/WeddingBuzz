import React from 'react'
import hero from '../../src/assets/hero.jpg'
import hero2 from '../../src/assets/heroo.jpg'

function Hero() {
  return (
    <>
    <div id="section7" className='md:max-w-screen-2xl container mt-20 mx-auto md:px:20 px-5'>
    <div
  className="hero min-h-screen ">
  <img src={hero} alt='hero'/>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-3xl font-bold">WEDDING PLANNER</h1>
      <p className="mb-5">
        MAKE TOUR DREAM WEDDING PERFECT AND HASSELFREE
      </p>
      <a href="#section6" type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg  text-sm md:text-sm md:px-5 px-3 md:py-2.5 py-1.5 text-center me-1 md:me-2 md:mb-2 mb-2">Contact Us</a>
    </div>
  </div>
</div>


    </div>
    </>
  )
}

export default Hero