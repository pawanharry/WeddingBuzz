import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import planning from '../../src/assets/planning.jpg'
import venue from '../../src/assets/venue.jpg'
import music from '../../src/assets/music.jpg'
import invite from '../../src/assets/invite.jpg'
import food from '../../src/assets/food.jpg'
import reherse from '../../src/assets/reherse.jpg'
import wed from '../../src/assets/wed.jpg'
import memory from '../../src/assets/memory.jpg'

function About() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    
    <>
    <div className='mt-10  '>
        <h3 className='text-center mt-10'>The best thing to hold onto in life is each other</h3>
        <h1  className='text-center text-bold-700 text-orange-500 text-2xl'>WELCOME TO WEDDING PLANNING SERVICE</h1>
        <div>
        <div className="slider-container">
      <Slider {...settings}>


        <div className='1'>
                    <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                src={planning}
                alt="planning"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
            <h2 className="card-title">Planning</h2>
            <ul>
        <li>Discuss and decide on the style and theme for wedding</li>
        <li>Set a Budget</li>
        </ul>
               
         </div>
        </div>
        </div>


        <div className='2'>
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                src={venue}
                alt="venue"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
            <h2 className="card-title">Research and Venue Selection</h2>
            <ul>
        <li>Research Venues</li>
        <li>Compare Options</li>
        <li>Book the Venue</li>
        </ul>
               
         </div>
        </div>
        </div>



        <div className='3'>
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                src={music}
                alt="music"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
            <h2 className="card-title">Vendor Selection and Booking</h2>
            <ul>
        <li>Research Vendors</li>
        <li>Review Portfolios and References</li>
        <li>Negotiate Contracts</li>
        </ul>
               
         </div>
        </div>
        </div>



        <div className='4'>
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                src={invite}
                alt="invite"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
            <h2 className="card-title">Design and Details</h2>
            <ul>
        <li>Theme and Décor</li>
        <li>Create a Timeline</li>
        <li>Order Invitations</li>
        </ul>
               
         </div>
        </div>
        </div>



        <div className='5'>
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                src={food}
                alt="food"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
            <h2 className="card-title"> Guest Management</h2>
            <ul>
        <li>Compile Guest List</li>
        <li>Seating Arrangements</li>
        <li>Accommodations</li>
        </ul>
               
         </div>
        </div>
        </div>



        <div className='6'> 
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                src={reherse}
                alt="reherse"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
            <h2 className="card-title"> Final Preparations</h2>
            <ul>
        <li>Finalize Details</li>
        <li>Attend Rehearsal</li>
        <li>Confirm Details with Venue</li>
        </ul>
               
         </div>
        </div>
        </div>


        <div className='7'>
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                src={wed}
                alt="wed"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
            <h2 className="card-title"> Wedding Day</h2>
            <ul>
        <li>Get Ready</li>
        <li>Ceremony</li>
        <li>Reception</li>
        <li>Coordinate</li>   

        </ul>
               
         </div>
        </div>
        </div>



        <div className='8'>
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                src={memory}
                alt="memory"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
            <h2 className="card-title">  Post-Wedding Tasks</h2>
            <ul>
        <li>Thank You Notes</li>
        <li>Vendor Payments</li>
        <li>Preserve Memories</li>
           

        </ul>
               
         </div>
        </div>
        </div>
      </Slider>
    </div>



      
                    </div>
                </div>
    </>
  )
}

export default About