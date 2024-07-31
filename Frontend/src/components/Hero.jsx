import React from 'react'
import hero from '../../src/assets/hero.jpg'
import hero2 from '../../src/assets/heroo.jpg'

function Hero() {
  return (
    <>
    <div className='md:max-w-screen-2xl container mt-20 mx-auto md:px:20 px-5'>
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
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>


    </div>
    </>
  )
}

export default Hero