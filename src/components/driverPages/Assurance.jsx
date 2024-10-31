import React from 'react'
import img15 from '../../../public/images/img15.png'
import img16 from '../../../public/images/img16.png'
import icon3 from '../../../public/images/icon3.png'
import icon7 from '../../../public/images/icon7.png'
import icon8 from '../../../public/images/icon8.png'
import icon9 from '../../../public/images/icon9.png'


function Assurance() {
  return (
    <div className="w-full px-5 lg:px-20 py-10">

        <div className='flex items-start gap-5 rounded-lg max-w-7xl mx-auto'>
            <div className="relative hidden lg:block">
                <img src={img15} alt="" className="w-full h-full object-cover" />

                <img src={img16} alt="" className="absolute top-[43.7vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                <img src={icon9} alt="" className="absolute top-[50vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
            </div>

            <div className="lef lg:w-[59%] w-full py-10">
                <h2 className='font-bold lg:text-4xl text-3xl px-8 leading-relaxed'>Your Safety Is Our Priority,We make sure both drivers and riders feel safe.</h2>
                <div className="cards grid gap-8 pt-5 px-8 lg:w-[60%]">
                    <div className="card flex items-center gap-5">
                        <div className="right">
                            <img src={icon3} alt="" />
                        </div>
                        <div className="left">
                            <h4 className='font-bold text-[#36A690] text-lg'>Verified Users</h4>
                            <p className='text-gray-700 text-sm'>All traveler undergo ID verification for security.</p>
                        </div>
                    </div>
                    <div className="card flex items-center gap-5">
                        <div className="right">
                            <img src={icon8} alt="" />
                        </div>
                        <div className="left">
                            <h4 className='font-bold text-[#36A690] text-lg'>Live Trip Tracking</h4>
                            <p className='text-gray-700 text-sm'>Track your trip and share it with your loved ones</p>
                        </div>
                    </div>
                    <div className="card flex items-center gap-5">
                        <div className="right">
                            <img src={icon7} alt="" />
                        </div>
                        <div className="left">
                            <h4 className='font-bold text-[#36A690] text-lg'>In-App Support</h4>
                            <p className='text-gray-700 text-sm'>Get real-time notifications on trip status, from confirmation to arrival.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Assurance