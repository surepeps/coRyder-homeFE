import React from 'react'
import img2 from '../../../public/images/img2.png'

function Register() {
  return (
    <div className="pt-10 w-full py-10 lg:px-20 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bold lg:text-3xl text-2xl text-center">What people are saying about us</h2>
        
        <div className="cards grid lg:flex items-start justify-center pt-10 gap-5">
          
          <div className="card bg-[#EDF6F4] lg:w-[24vw] p-5 grid gap-3 rounded-lg lg:h-[56.5vh] h-auto flex-grow">
            <div className="top space-y-2">
              <span className="text-white bg-[#349D89] w-10 h-10 rounded-full flex items-center justify-center">1</span>
              <h4 className="text-2xl text-[#349D89] font-semibold">Sign Up</h4>
              <p className="text-gray-700 text-sm">Create an account and complete your driver profile.</p>
            </div>
            <div className="bottom space-y-2">
              <span className="text-white bg-[#349D89] w-10 h-10 rounded-full flex items-center justify-center">2</span>
              <h4 className="text-2xl text-[#349D89] font-semibold">Add Your Vehicle</h4>
              <p className="text-gray-700 text-sm">Submit your vehicle details and get it verified.</p>
            </div>
          </div> 

          <div className="image lg:h-[56.5vh] w-full lg:w-auto hidden lg:block flex-grow">
            <img src={img2} alt="iphone 13 pro with sign up page on screen" className="w-full h-full object-cover rounded-lg" />
          </div> 

          <div className="card2 bg-[#EDF6F4] lg:w-[24vw] p-5 grid gap-3 rounded-lg lg:h-[56.5vh] h-auto flex-grow">
            <div className="top space-y-2">
              <span className="text-white bg-[#349D89] w-10 h-10 rounded-full flex items-center justify-center">3</span>
              <h4 className="text-2xl text-[#349D89] font-semibold">Set Your Rates & Accept Trips</h4>
              <p className="text-gray-700 text-sm">Select your preferred routes, set seat prices, and accept trip requests from CoTravelers.</p>
            </div>
            <div className="bottom space-y-2">
              <span className="text-white bg-[#349D89] w-10 h-10 rounded-full flex items-center justify-center">4</span>
              <h4 className="text-2xl text-[#349D89] font-semibold">Add Your Vehicle</h4>
              <p className="text-gray-700 text-sm">Submit your vehicle details and get it verified.</p>
            </div>
          </div> 
        </div> 
      </div>   
    </div>
  )
}

export default Register
