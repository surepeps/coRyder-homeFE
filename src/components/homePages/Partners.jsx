import React from 'react'
import img7 from '../../../public/images/img7.png'
import img8 from '../../../public/images/img8.png'
import img9 from '../../../public/images/img9.png'
import img10 from '../../../public/images/img10.png'
import img11 from '../../../public/images/img11.png'
import img12 from '../../../public/images/img12.png'


function Partners() {
  return (
    <div className='lg:px-20 px-10 py-5'>
     <h2 className='font-bold lg:text-3xl text-2xl text-center'>Our Trusted partners</h2>
     <div className="cards grid grid-cols-2 place-items-center lg:flex items-center justify-between lg:pt-10 pt-5">
        <div className="img">
            <img className='object-cover' src={img7} alt="paypal logo" />
        </div>
        <div className="img">
            <img className='object-cover' src={img8} alt="paypal logo" />
        </div>
        <div className="img hidden lg:block">
            <img className='object-cover' src={img9} alt="paypal logo" />
        </div>
        <div className="img hidden lg:block">
            <img className='object-cover' src={img10} alt="paypal logo" />
        </div>
        <div className="img hidden lg:block">
            <img className='object-cover' src={img11} alt="paypal logo" />
        </div>
        <div className="img hidden lg:block">
            <img className='object-cover' src={img12} alt="paypal logo" />
        </div>
     </div>

    </div>
  )
}

export default Partners