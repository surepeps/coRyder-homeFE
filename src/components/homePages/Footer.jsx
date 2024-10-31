import React from 'react'
import logolarge from '../../../public/images/logolarge.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='flex flex-col items-center justify-center gap-5 py-10'>
        <div className="top flex flex-col lg;flex-row items-center gap-5">
            <div className="menu">
              <ul className='flex items-center gap-5 text-sm font-semibold'>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/driver">Driver</Link></li>
                  <li><Link to="/traveller">Traveller</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="#">About us</Link></li>
              </ul>
            </div>
            <p className='h-4 w-[1.3px] bg-gray-700 hidden lg:block'></p>
            <div className="socials flex gap-3">
            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
        <div className="bottom">
            <img src={logolarge} alt="co traveller logo" />
        </div>
    </div>
  )
}

export default Footer