import React from 'react'
import img6 from '../../../public/images/img6.png'

function Testimony() {
  return (
    <div className='lg:px-20 mt-10'>
         <h2 className='font-bold lg:text-3xl text-2xl text-center'>What drivers are saying</h2>
         <div className="cards lg:pt-10 pt-5 pl-10 flex items-center gap-10 overflow-hidden">
            <div className="card lg:w-80 w-[60vw] h-72 rounded-lg p-4 bg-[#EDF6F4] space-y-2 shadow-md flex-shrink-0">
                <div className="image">
                    <img className="object-cover" src={img6} alt="User profile image" />
                </div>
                <div className="text space-y-2">
                    <h4 className='font-bold text-lg'>Angela Gomes</h4>
                    <h6 className='font-semibold text-sm'>I am so pleased with this app and they way the team handed report if you have issue with the Driver</h6>
                </div>
                <div className="star">
                <i className="fa-solid fa-star text-[#D7A912]"></i>
                <i className="fa-solid fa-star text-[#D7A912]"></i>
                <i className="fa-solid fa-star text-[#D7A912]"></i>
                <i className="fa-solid fa-star text-[#D7A912]"></i>
                <i className="fa-solid fa-star text-[#D7A912]"></i>
                </div>
            </div>

            <div className="card w-80 h-72 rounded-lg p-4 bg-[#EDF6F4] space-y-2 shadow-md flex-shrink-0">
                <div className="image">
                    <img className="object-cover" src={img6} alt="User profile image" />
                </div>
                <div className="text space-y-2">
                    <h4 className='font-bold text-lg'>Angela Gomes</h4>
                    <h6 className='font-semibold text-sm'>I am so pleased with this app and they way the team handed report if you have issue with the Driver</h6>
                </div>
                <div className="star">
                <i className="fa-solid fa-star text-[#D7A912]"></i>
                <i className="fa-solid fa-star text-[#D7A912]"></i>
                <i className="fa-solid fa-star text-[#D7A912]"></i>
                <i className="fa-solid fa-star text-[#D7A912]"></i>
                <i className="fa-solid fa-star text-[#D7A912]"></i>
                </div>
            </div>

            <div className="card w-80 h-72 rounded-lg p-4 bg-[#EDF6F4] space-y-2 shadow-md flex-shrink-0">
                <div className="image">
                    <img className="object-cover" src={img6} alt="User profile image" />
                </div>
                <div className="text space-y-2">
                    <h4 className='font-bold text-lg'>Angela Gomes</h4>
                    <h6 className='font-semibold text-sm'>I am so pleased with this app and they way the team handed report if you have issue with the Driver</h6>
                </div>
                <div className="star">
                <i className="fa-solid fa-star text-[#D7A912]"></i>
                <i className="fa-solid fa-star text-[#D7A912]"></i>
                <i className="fa-solid fa-star text-[#D7A912]"></i>
                <i className="fa-solid fa-star text-[#D7A912]"></i>
                <i className="fa-solid fa-star text-[#D7A912]"></i>
                </div>
            </div>
         </div>
         <div className="slideshow hidden lg:flex items-center justify-center pt-5 gap-5">
         <i className="fa-solid fa-left-long"></i>
         <span className='flex items-center gap-1'>
            <p className='h-3 w-3 rounded-full bg-[#C7CACA]'></p>
            <p className='h-3 w-3 rounded-full bg-[#C7CACA]'></p>
            <p className='h-3 w-3 rounded-full bg-[#C7CACA]'></p>
            <p className='h-3 w-3 rounded-full bg-[#C7CACA]'></p>
            <p className='h-3 w-3 rounded-full bg-[#C7CACA]'></p>
            <p className='h-3 w-3 rounded-full bg-[#C7CACA]'></p>
            <p className='h-3 w-3 rounded-full bg-[#349D89]'></p>
         </span>
         <i className="fa-solid fa-right-long"></i>
         </div>
    </div>
  )
}

export default Testimony