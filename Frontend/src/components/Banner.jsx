import React from 'react'
import Pic1 from '../../public/Pic1.png'

function Banner() {
  return (
    <>
    <div className='max-w-screen-2xl container mt-20 mx-auto md:px:20 px-4 flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2'>
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
  
    
    <div>
      <h1 className="text:7xl md:text-9xl font-bold">LUXURY</h1>
      <p className="py-6">
      We believe that every wedding should reflect the
 personality and style of the couple. Our approach 
is tailored, collaborative, and focused on making 
your wedding day a true reflection of who you are.

      </p>
      
    </div>
  </div>
</div>
        </div>
        <div className='w-full md:w-1/2'>
        <div className="hero bg-base-200 min-h-screen mb-1">
            <div >
                    <div className="hero-content flex-col lg:flex-row">
                        <img
                        src={Pic1}
                        className="max-w-sm rounded-lg shadow-2xl" />
                                <div>
                                
                                            <p className="py-8">
                                            Your best companion for
                                        wedding from start to
                                        finish. From intimate gatherings to
                                        grand celebrations,
                                        we embrace diversity and 
                                        work closely with you to
                                        craft a personalized and
                                        enchanting event that 
                                        exceeds your expectations.

                                            </p>
                                
                                </div>
                        
                    </div>
                   
                    <h1 className=" text:7xl md:text-9xl font-bold md:text-right ">WEDDING</h1>
                    </div>
                    
                </div>
                
                
        </div>
      
    </div>
    </>
  )
}

export default Banner