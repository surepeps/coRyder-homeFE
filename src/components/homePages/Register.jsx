import React from 'react'
import img2 from '../../../public/images/img2.png'
import img3 from '../../../public/images/img3.png'
import img4 from '../../../public/images/img4.png'


function Register() {
  return (
    <div className='py-10 lg:px-20 px-10'>
        <h2 className='font-bold text-3xl text-center'>How It Works</h2>
        <div className="cards grid gap-5 lg:flex items-start pt-10">
            <div className="card px-3 lg:w-[25vw] h-[83vh] grid gap-2 text-center rounded-xl bg-[#EDF6F4] space-y-1 pt-4">
                <div className="top">
                <h3 className='text-2xl font-semibold text-[#36A690]'>Sign Up & Verify Your Account</h3>
                <p className='text-gray-700'>Create your profile as a Driver or CoRyder. Quickly verify your identity for a safe and secure experience.</p>
                </div>
                <img className='object-contain mx-auto' src={img2} alt="iphone 13 with sign up page on screen"/>
            </div>
            <div className="card px-3 lg:w-[25vw] h-[83vh] grid gap-3 text-center rounded-xl bg-[#EDF6F4] space-y-3 pt-4">
                <div className="top">
                <h3 className='text-2xl font-semibold text-[#36A690] pb-3'>Post or Find a Ride</h3>
                <p className='text-gray-700'>Drivers can post available seats for upcoming trips, while CoRyders can browse and find rides that fit their needs</p>
                </div>
                <img className='mx-auto' src={img3} alt="iphone 13 with sign up page on screen"/>
            </div>
            <div className="card px-3 lg:w-[25vw] h-[83vh] grid gap-2 text-center rounded-xl bg-[#EDF6F4] space-y-3 pt-4">
                <div className="top h-[20vh] space-y-1">
                <h3 className='text-2xl font-semibold text-[#36A690] pb-3'>Share the Journey</h3>
                <p className='text-gray-700 px-4'>Once confirmed, connect with your fellow travelers, share the cost, and enjoy the ride.</p>
                </div>
                <img className='object-contain mx-auto pt-2' src={img4} alt="iphone 13 with sign up page on screen"/>
            </div>
        </div>
    </div>
  )
}

export default Register