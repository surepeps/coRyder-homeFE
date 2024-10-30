import React from 'react'

function Subscribe() {
  return (
    <div className='flex items-center justify-center flex-col my-5 py-10 space-y-8 bg-[#EDF6F4] px-10 lg:px-0'>
        <h2 className='text-[#349D89] font-bold text-3xl'>Subscribe</h2>
        <p className='font-semibold lg:w-[30vw] text-center'>Subscribe to stay tuned for new web design and latest updates. Let's do it! </p>
        <form className="flex items-center justify-center w-full">
        <input type="email" placeholder="Enter your email Address" className="focus:border-2 focus:border-[#349D89] delay-100 duration-300 transition-colors ease-in-out py-3 px-3 outline-none rounded-tl-lg rounded-bl-lg text-sm lg:w-[35vw] w-[70%]" />
        <button type="submit" className="bg-[#349D89] text-white py-3 rounded-tr-lg rounded-br-lg hover:bg-opacity-90 delay-100 duration-300 transition-colors lg:px-10 px-5 lg:w-auto w-[30%]"> Subscribe </button>
        </form>
    </div>
  )
}

export default Subscribe