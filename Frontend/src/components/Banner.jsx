import React from 'react'
import banner1 from '../../src/assets/banner1.jpg'
import banner2 from '../../src/assets/banner2.jpg'

function Banner() {
  return (
    <>
   
    <div id="section1" className='md:max-w-screen-2xl container mt-10 mx-auto md:px:20 px-2 flex flex-col md:flex-row '>

    <div className="hero  min-h-screen mt-5">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="hero-content flex-col gap-0">
        <img
          src={banner1}
          className="max-w-sm rounded-lg shadow-2xl  md:ml-8 rounded-t-full" />
          
      </div>
    <div>
    <p className="py-6 text-xs md:text-m text-wrap md:text-balance ">
                  We believe that every wedding should reflect the
            personality and style of the couple. Our approach 
            is tailored, collaborative, and focused on making 
            your wedding day a true reflection of who you are.

                  </p>
    <h1 className="text:5xl md:text-8xl font-bold aign-top text-orange-500 ">LUXURY</h1>
    <h1 className=" text:5xl md:text-8xl font-bold md:text-right text-orange-500 ">WEDDING</h1>
   
                  
    
    </div>
  </div>
</div>


</div>






        
    </>
  )
}

export default Banner