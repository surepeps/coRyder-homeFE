import React from 'react'
import icon10 from '../../../public/images/icon10.png'

function Content() {
  return (
    <div className='grid lg:flex items-start lg:justify-center lg:gap-10 gap-5 lg:mt-10 mt-5 px-10'>
        <div className="right">
            <h3 className='font-semibold text-3xl pb-5'>Get in Touch </h3>
            <div className="info w-[90%] grid gap-5 text-gray-700">
                <div>
                <span className='flex gap-1 text-[#36A690]'>
                    <img src={icon10} alt="icon for location" className='h-5'/>
                    <h5 >Location</h5>
                </span>
                <p className='text-sm'>77 lagos ,ikorodu express way ikotun high school.</p>
                </div>

                <div>
                <span className='flex gap-1 text-[#36A690]'>
                <i className="fa-solid fa-phone"></i>
                 <h5>Phone number</h5>
                </span>
                <p className='text-sm'>+234904749030</p>
                <p className='text-sm'>+234904749030</p>
                </div>

                <div>
                <span className='flex gap-1 text-[#36A690]'>
                <i className="fa-solid fa-envelope"></i>
                    <h5>Email support</h5>
                </span>
                <p className='text-sm'>Example @email.com</p>
                <p className='text-sm'>Example @email.com</p>
                <p className='text-sm'>Example @email.com</p>
                </div>

                <div>
                    <h5 className='text-[#36A690]'>Our social</h5>
                    <span className='flex gap-3 items-center'>
                    <i className="text-sm fa-brands fa-x-twitter"></i>
                    <i className="text-sm fa-brands fa-instagram"></i>
                    <i className="text-sm fa-brands fa-linkedin"></i>
                    </span>
                </div>
            </div>
        </div>
        <form className="left lg:w-[55%]">
            <h3 className='font-semibold text-3xl pb-5'>Message us</h3>
            <div className='grid lg:grid-cols-2 lg:gap-8 gap-5'>
                <input type="text" name="firstname" id="firstname" placeholder='First name' className='outline-none border border-gray-400 py-2 text-sm px-2 w-full rounded-md focus:border-[#36A690]'/>
                <input type="text" name="lastname" id="lastname" placeholder='Last name' className='outline-none border border-gray-400 py-2 text-sm px-2 w-full rounded-md focus:border-[#36A690]' />
                <input type="email" name="email" id="email" placeholder='Email address' className='outline-none border border-gray-400 py-2 text-sm px-2 w-full rounded-md focus:border-[#36A690]' />
                <input type="number" name="mobile" id="mobile" placeholder='Phone number' className='outline-none border border-gray-400 py-2 text-sm px-2 w-full rounded-md focus:border-[#36A690]' />
            </div>
            <input type="text" placeholder='Subject' className='outline-none border border-gray-400 py-2 text-sm px-2 w-full rounded-md focus:border-[#36A690] lg:my-8 my-5'/>
            <textarea placeholder='How can we help you' className='outline-none border border-gray-400 py-2 text-sm px-2 w-full rounded-md focus:border-[#36A690]'></textarea>
            <div className="button">
                    <button className='bg-[#36A690] text-white rounded-lg px-14 py-3 text-sm hover:bg-opacity-90 transition-colors delay-100 duration-300 mt-3'>Send message</button>
                </div>
        </form>
    </div>
  )
}

export default Content