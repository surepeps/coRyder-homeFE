import React from 'react'
import appstore from '../../../public/images/appstore.png'
import googleplay from '../../../public/images/googleplay.png'
import img1 from '../../../public/images/img1.png'



function About() {
  return (
    <div className='w-full bg-[#349D8917] pt-8 lg:px-20 px-5'> 
      <div className="max-w-7xl mx-auto lg:flex items-center justify-between lg:mt-8 mt-12 relative overflow-hidden">
        <div className="right space-y-6 lg:w-2/5">
            <p className='text-[#36A690] text-lg font-semibold'>Travel with comfort</p>
            <h3 className='font-bold text-4xl leading-10'>Find Rides. Share journeys. Save Money With <span className='text-[#36A690] underline underline-offset-8'>CoRyde.</span></h3>
            <p className='text-gray-700 text-xl lg:pr-6'>Whether you're driving or looking for a ride, CoRyde connects you with reliable travel partners for cost-effective, eco-friendly journeys.</p>
            <div className="logo flex items-center gap-5">
            <img src={appstore} alt="apple store logo" />
            <img src={googleplay} alt="google play store logo" />
            </div>
        </div>
        <div className="left w-full lg:w-2/5 z-10 pt-5 lg:pt-0">
            <img className='z-10 object-fit' src={img1} alt="Female hand holding iPhone with app on screen" />
        </div>
        <div className="hidden lg:block bg light absolute -bottom-[30vh] -right-[10vw] z-0">
            <div className="bg-[#349D8917] w-[100vh] h-[100vh] rounded-full border border-[#36A690] z-0">
            <div className="main w-[85vh] h-[85vh] bg-[#36A690] rounded-full bottom-0 right-0 absolute z-0"></div>
            </div>
        </div>

      </div>
        
    </div>
  )
}



export default About