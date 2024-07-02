import React from 'react'
import p2 from '../../src/assets/p2.jpg'
import p1 from '../../src/assets/p1.jpg'
import p3 from '../../src/assets/p3.jpg'
import p4 from '../../src/assets/p4.jpg'
import p5 from '../../src/assets/p5.jpg'
import p6 from '../../src/assets/p6.jpg'
import p7 from '../../src/assets/p7.jpg'
import p8 from '../../src/assets/p8.jpg'
import p9 from '../../src/assets/p9.jpg'

function Portfolio() {
  return (
    <>
    <div className='md:max-w-screen-2xl container mt-20 mx-auto md:px:20 px-5'>
    <section class="px-4 py-24 mx-auto max-w-7xl">
  <div class="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
    <h1 class="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
      <span class="block w-full text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-orange-400 lg:inline">Here's to our crazy journey</span>
    </h1>
  </div>
</section>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
  <div>
    <img class="object-cover object-center w-full h-40 max-w-full rounded-lg"
      src={p1}
      alt="gallery-photo" />
  </div>
  <div>
    <img class="object-cover object-center w-full h-40 max-w-full rounded-lg"
      src={p2}
      alt="gallery-photo" />
  </div>
  <div>
    <img class="object-cover object-center w-full h-40 max-w-full rounded-lg"
      src={p3}
      alt="gallery-photo" />
  </div>
  <div>
    <img class="object-cover object-center w-full h-40 max-w-full rounded-lg"
      src={p4}
      alt="gallery-photo" />
  </div>
  <div>
    <img class="object-cover object-center w-full h-40 max-w-full rounded-lg"
      src={p5}
      alt="gallery-photo" />
  </div>
  <div>
    <img class="object-cover object-center w-full h-40 max-w-full rounded-lg"
      src={p6}
      alt="gallery-photo" />
  </div>
  <div>
    <img class="object-cover object-center w-full h-40 max-w-full rounded-lg"
      src={p7} />
  </div>
  <div>
    <img class="object-cover object-center w-full h-40 max-w-full rounded-lg"
      src={p8} />
  </div>
  <div>
    <img class="object-cover object-center w-full h-40 max-w-full rounded-lg"
      src={p9}
      alt="gallery-photo" />
       
    
  </div>
  

</div>

  
    </div> 


    <div className="stats grid grid-rows-1 md:grid-cols-3 gap-6 shadow-lg mt-20 md:ml-20 md:mr-20">
  <div className="p-5 bg-gradient-to-br from-pink-500 to-orange-400 text-center text-white rounded-lg">
    <div className="stat-title text-white">Successful events</div>
    <div className="stat-value">450</div>
  </div>

  <div className="p-5 bg-gradient-to-br from-pink-500 to-orange-400 text-center text-white rounded-lg">
    <div className="stat-title text-white">Happy Couples</div>
    <div className="stat-value">450</div>
  </div>

  <div className="p-5 bg-gradient-to-br from-pink-500 to-orange-400 text-center text-white rounded-lg">
    <div className="stat-title text-white">Decorations done</div>
    <div className="stat-value">450</div>
  </div>
</div>


 
    </>
  )
}

export default Portfolio