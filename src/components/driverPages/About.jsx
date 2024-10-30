import React from 'react'
import img13 from '../../../public/images/img13.png'


function About() {
  return (
    <div className='bg-[#EDF6F4] flex items-center lg:justify-end lg:flex-row justify-center flex-col gap-20 lg:mt-8 pt-5 lg:pt-0 -mt-[6.6vh]'>
        <div className=" lg:w-2/5 px-5 lg:px-0">
            <h3 className='text-4xl font-bold leading-[55px]'>Set your own rates, choose your trips, and drive whenever you want.</h3>
            <div className="button pt-5">
                    <button className='bg-[#36A690] text-white rounded-lg py-3 text-sm hover:bg-opacity-90 transition-colors delay-100 duration-300 lg:w-[17vw] w-full'>Sign up as a driver</button>
            </div>
        </div>
        <div className="image" >
            <img src={img13} alt='a driver smilling' />
        </div>
    </div>
  )
}

export default About