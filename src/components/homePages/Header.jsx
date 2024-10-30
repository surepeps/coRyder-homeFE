import React from 'react'
import logo from '../../../public/images/logo.png'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
     <header className='lg:flex items-center justify-between lg:px-20 px-5 py-3 fixed top-0 w-full bg-white z-50 hidden'>
        <div className="logo">
            <img src={logo} alt="co traveller logo" />
        </div>
        <div className="menu">
            <ul className='flex items-center justify-center gap-5 font-semibold text-sm'>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'text-[#349D89]' : 'hover:text-[#349D89] duration-300 delay-100 transition-color')}> Home </NavLink>
                </li>
                <li>
                    <NavLink to="/driver" className={({ isActive }) => (isActive ? 'text-[#349D89]' : 'hover:text-[#349D89] duration-300 delay-100 transition-color')}> Driver </NavLink>
                </li>
                <li>
                    <NavLink to="/traveller" className={({ isActive }) => (isActive ? 'text-[#349D89]' : 'hover:text-[#349D89] duration-300 delay-100 transition-color')}> Traveller </NavLink>
                </li>
                <li>
                    <NavLink  to="/contact" 
                        className={({ isActive }) => (isActive ? 'text-[#349D89]' : 'hover:text-[#349D89] duration-300 delay-100 transition-color')}> Contact </NavLink>
                </li>
                <li>
                    <NavLink to="/terms" 
                        className={({ isActive }) => (isActive ? 'text-[#349D89]' : 'hover:text-[#349D89] duration-300 delay-100 transition-color')}> Terms & Condition </NavLink>
                </li>
            </ul>

        </div>
        <div className="socials flex items-center justify-center gap-3">
            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
        </div>
    </header>

    <header className='py-3 px-10 lg:hidden block'>
        <div className='flex items-center justify-between'>
        <div className="logo">
            <img className='h-10' src={logo} alt="co traveller logo" />
        </div>

        <div className="left">
        <i className="fa-solid fa-bars text-xl"></i>
        </div>
        </div>

        {/* MENU FOR SMALL SCREEN STARTS */}
        <div className="menu pt-10 hidden">
        <div className="menu">
         <ul className='grid gap-5 font-semibold text-sm'>
            <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'text-[#349D89]' : 'hover:text-[#349D89] duration-300 delay-100 transition-color')}> Home </NavLink>
            </li>
            <li>
                <NavLink to="/driver" className={({ isActive }) => (isActive ? 'text-[#349D89]' : 'hover:text-[#349D89] duration-300 delay-100 transition-color')}> Driver </NavLink>
            </li>
            <li>
                <NavLink to="/traveller" className={({ isActive }) => (isActive ? 'text-[#349D89]' : 'hover:text-[#349D89] duration-300 delay-100 transition-color')}> Traveller </NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-[#349D89]' : 'hover:text-[#349D89] duration-300 delay-100 transition-color')}> Contact </NavLink>
            </li>
            <li>
                <NavLink to="/terms" className={({ isActive }) => (isActive ? 'text-[#349D89]' : 'hover:text-[#349D89] duration-300 delay-100 transition-color')}> Terms & Condition </NavLink>
            </li>
         </ul>
         </div>
        </div>
        {/* MENU FOR SMALL SCREEN STOPS */}
    </header>
    </div>
  )
}

export default Header