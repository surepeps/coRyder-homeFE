import React from 'react'
import img13 from '../../../public/images/img13.png'

function About() {
  return (
    <div className="bg-[#EDF6F4] px-5 lg:px-20 pt-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        <div className="w-full lg:w-[40%] text-center lg:text-left">
          <h3 className="text-2xl lg:text-5xl font-bold leading-[35px] lg:leading-[75px]">
            Set your own rates, choose your trips, and drive whenever you want.
          </h3>
          <div className="button pt-5">
            <button className="bg-[#36A690] text-white rounded-lg py-3 px-5 text-sm hover:bg-opacity-90 transition-colors delay-100 duration-300 w-full lg:w-[17vw]">
              Sign up as a driver
            </button>
          </div>
        </div>
        <div className="image w-full lg:w-[60%]">
          <img src={img13} alt="a driver smiling" className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  )
}

export default About;
