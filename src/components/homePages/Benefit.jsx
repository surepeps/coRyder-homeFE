import React from 'react'
import img5 from '../../../public/images/img5.png'
import icon1 from '../../../public/images/icon1.png'
import icon2 from '../../../public/images/icon2.png'
import icon3 from '../../../public/images/icon3.png'
import icon4 from '../../../public/images/icon4.png'


function Benefit() {
  return (
    <div className='flex items-start gap-10 lg:pl-20 rounded-lg w-full h-screen pb-10'>
        <div className="right hidden lg:block">
            <img src={img5} alt="" />
        </div>
        <div className="left bg-[#EDF6F4] lg:w-[69%] w-full py-10 h-full">
            <h2 className='font-bold lg:text-3xl text-2xl px-8'>Why Choose CoRyde</h2>
            <div className="cards grid gap-5 lg:pt-10 pt-5 px-8">
                <div className="card flex items-center gap-5">
                    <div className="right">
                        <img src={icon1} alt="" />
                    </div>
                    <div className="left">
                        <h4 className='font-bold text-[#36A690] text-lg'>Easy Ride Management</h4>
                        <p className='text-gray-700 text-sm'>Post or search for rides, book seats, and manage everything in-app.</p>
                    </div>
                </div>
                <div className="card flex items-center gap-5">
                    <div className="right">
                        <img src={icon2} alt="" />
                    </div>
                    <div className="left">
                        <h4 className='font-bold text-[#36A690] text-lg'>Real-Time Updates</h4>
                        <p className='text-gray-700 text-sm'>Get real-time notifications on trip status, from confirmation to arrival.</p>
                    </div>
                </div>
                <div className="card flex items-center gap-5">
                    <div className="right">
                        <img src={icon3} alt="" />
                    </div>
                    <div className="left">
                        <h4 className='font-bold text-[#36A690] text-lg'>Verified Users</h4>
                        <p className='text-gray-700 text-sm'>All users go through a verification process to ensure safety and trust.</p>
                    </div>
                </div>
                <div className="card flex items-center gap-5">
                    <div className="right">
                        <img src={icon4} alt="" />
                    </div>
                    <div className="left">
                        <h4 className='font-bold text-[#36A690] text-lg'>Ratings & Reviews</h4>
                        <p className='text-gray-700 text-sm'>Both Drivers and CoRyders can rate each other, helping everyone make informed decisions.</p>
                    </div>
                </div>

                <div className="button">
                    <button className='bg-[#36A690] text-white rounded-lg px-14 py-3 text-sm hover:bg-opacity-90 transition-colors delay-100 duration-300'>Get started</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Benefit