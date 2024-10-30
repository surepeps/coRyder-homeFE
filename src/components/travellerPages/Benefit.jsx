import React from 'react'
import img18 from '../../../public/images/img18.png'
import icon2 from '../../../public/images/icon2.png'
import icon5 from '../../../public/images/icon5.png'
import icon6 from '../../../public/images/icon6.png'
import icon7 from '../../../public/images/icon7.png'

function Benefit() {
  return (
    <div className='flex lg:items-start flex-col-reverse lg:flex-row gap-10 lg:pl-20 rounded-lg w-full mt-10'>
        <div className="right">
            <img src={img18} alt="driver interacting with traveller" />
        </div>
        <div className="left lg:w-[69%] w-full h-full">
            <h2 className='font-bold lg:text-3xl text-2xl px-8'>Why Choose CoRyde</h2>
            <div className="cards grid gap-5 lg:pt-10 pt-5 px-8">
                <div className="card flex items-center gap-5">
                    <div className="right">
                        <img src={icon5} alt="" />
                    </div>
                    <div className="left">
                        <h4 className='font-bold text-[#36A690] text-lg'>Set Your Own Price</h4>
                        <p className='text-gray-700 lg:text-sm text-base'>You have full control over your trip pricing.</p>
                    </div>
                </div>
                <div className="card flex items-center gap-5">
                    <div className="right">
                        <img src={icon2} alt="" />
                    </div>
                    <div className="left">
                        <h4 className='font-bold text-[#36A690] text-lg'>Flexible Hours</h4>
                        <p className='text-gray-700 lg:text-sm text-base'>Drive on your own schedule—no commitment.</p>
                    </div>
                </div>
                <div className="card flex items-center gap-5">
                    <div className="right">
                        <img src={icon6} alt="" />
                    </div>
                    <div className="left">
                        <h4 className='font-bold text-[#36A690] text-lg'>Low Service Fees</h4>
                        <p className='text-gray-700 lg:text-sm text-base'>We ensure you keep most of what you earn.</p>
                    </div>
                </div>
                <div className="card flex items-center gap-5">
                    <div className="right">
                        <img src={icon7} alt="" />
                    </div>
                    <div className="left">
                        <h4 className='font-bold text-[#36A690] text-lg'>In-App Support</h4>
                        <p className='text-gray-700 lg:text-sm text-base'>Get help when you need it through our live chat.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Benefit