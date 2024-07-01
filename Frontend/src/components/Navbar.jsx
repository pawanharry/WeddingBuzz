import React from 'react'

function Navbar() {
  return (
    <>
    <div className='max-w-screen-2xl container  mx-auto md:px:20 px-4 fixed top-0 left-0 right-0'>
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-xl font-bold-700">
         <li className='text-xl font-bold'><a>Home</a></li>
      <li className='text-xl font-bold'><a>About Us</a></li>
      <li className='text-xl font-bold'><a>Team</a></li>
      <li className='text-xl font-bold'><a>Price</a></li>
      <li className='text-xl font-bold'><a>Portfolio</a></li>
      <li className='text-xl font-bold'><a>Reviews</a></li>
      </ul>
    </div>
    <a className=" text:l md:text-3xl font-bold cursor-pointer text-orange-500">Wedding&Buzz</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className='text-xl font-bold'><a>Home</a></li>
      <li className='text-xl font-bold'><a>About Us</a></li>
      <li className='text-xl font-bold'><a>Team</a></li>
      <li className='text-xl font-bold'><a>Price</a></li>
      <li className='text-xl font-bold'><a>Portfolio</a></li>
      <li className='text-xl font-bold'><a>Reviews</a></li>
     
      
    </ul>
  </div>
  <div className="navbar-end">
  <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg  text-sm md:text-sm md:px-5 px-3 md:py-2.5 py-1.5 text-center me-1 md:me-2 md:mb-2 mb-2">Contact Us</button>
  </div>
</div>
    
    </div>
    </>
  )
}

export default Navbar