import React from 'react'
import img2 from '../../../public/images/img2.png'


function Register() {
  return (
    <div className='pt-10 lg:px-20 px-5'>
     <h2 className='font-bold lg:text-3xl text-2xl text-center'>How CoRyde Works for Travelers</h2>
        <div className="cards grid lg:flex items-start justify-center pt-10 lg:gap-10 gap-5">
            <div className="card bg-[#EDF6F4] lg:w-[24vw] p-5 grid gap-3 rounded-lg lg:h-[56.5vh] h-auto">
                <div className="top space-y-2">
                <span className='text-white bg-[#349D89] w-10 h-10 rounded-full flex items-center justify-center'>1</span>
                <h4 className='text-2xl text-[#349D89] font-semibold'>Sign Up</h4>
                <p className='text-gray-700 text-sm'>Create a traveler account and verify your identity.</p>
                </div>

                <div className="bottom space-y-2">
                <span className='text-white bg-[#349D89] w-10 h-10 rounded-full flex items-center justify-center'>2</span>
                <h4 className='text-2xl text-[#349D89] font-semibold'>Search for a Ride</h4>
                <p className='text-gray-700 text-sm'>Enter your departure and destination points to find available trips.</p>
                </div>
            </div> 

            <div className="image h-full hidden lg:block">
                <img src={img2} alt="iphone 13 pro with sign up page on screen" />
            </div> 

              <div className="card2 bg-[#EDF6F4] lg:w-[24vw] p-5 grid gap-3 rounded-lg lg:h-[56.5vh] h-auto">
                <div className="top space-y-2">
                <span className='text-white bg-[#349D89] w-10 h-10 rounded-full flex items-center justify-center'>3</span>
                <h4 className='text-2xl text-[#349D89] font-semibold'>Book Your Seat</h4>
                <p className='text-gray-700 text-sm'>Choose a traveler, review the price, and book your seat.</p>
                </div>

                <div className="bottom space-y-2">
                <span className='text-white bg-[#349D89] w-10 h-10 rounded-full flex items-center justify-center'>4</span>
                <h4 className='text-2xl text-[#349D89] font-semibold'>Travel Safely</h4>
                <p className='text-gray-700 text-sm'>Enjoy your ride and rate the experience afterward.</p>
                </div>
            </div> 
        </div>    
    </div>
  )
}

export default Register