import React, { useState, useEffect, useRef, useContext } from 'react';
import logo from '../../../public/images/logo.png';
import { NavLink } from 'react-router-dom';
import { LoadingContext } from '../context/LoadingContext';
import OverlaySpinner from '../resources/OverlaySpinner';
import { useModal } from '../context/ModalService';
import WaitList from '../modal/WaitList';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const { isRequestLoading } = useContext(LoadingContext);

  const { openModal } = useModal();

    const openModalPopUp = () => {
        openModal(<WaitList />, {
            modalSize: 'max-w-4xl',
        });
        setIsMenuOpen(false);
    }

  return (
    <header className="lg:px-20 px-5 py-4 fixed top-0 w-full bg-white z-50 shadow-md">
      {isRequestLoading && <OverlaySpinner />}
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <div className="logo">
          <img src={logo} alt="Co Traveller Logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex menu">
          <ul className="flex items-center gap-10 font-semibold text-sm">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#349D89]'
                    : 'hover:text-[#349D89] transition-colors duration-300'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/driver"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#349D89]'
                    : 'hover:text-[#349D89] transition-colors duration-300'
                }
              >
                Driver
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/traveller"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#349D89]'
                    : 'hover:text-[#349D89] transition-colors duration-300'
                }
              >
                Traveller
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#349D89]'
                    : 'hover:text-[#349D89] transition-colors duration-300'
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/terms"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#349D89]'
                    : 'hover:text-[#349D89] transition-colors duration-300'
                }
              >
                Terms & Conditions
              </NavLink>
            </li>
            <li>
              <button
                onClick={openModalPopUp}
                className="bg-[#349D89] text-white px-4 py-2 rounded transition duration-300 hover:bg-[#297d6a]"
              >
                Join Waitlist
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-[#349D89] focus:outline-none"
          >
            <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'} fa-lg`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className={`lg:hidden fixed top-0 right-0 w-2/3 h-full bg-white shadow-lg transform transition-transform duration-300 ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <ul className="flex flex-col items-center gap-6 mt-20 font-semibold text-lg">
              <li>
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-[#349D89]'
                      : 'hover:text-[#349D89] transition-colors duration-300'
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/driver"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-[#349D89]'
                      : 'hover:text-[#349D89] transition-colors duration-300'
                  }
                >
                  Driver
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/traveller"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-[#349D89]'
                      : 'hover:text-[#349D89] transition-colors duration-300'
                  }
                >
                  Traveller
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-[#349D89]'
                      : 'hover:text-[#349D89] transition-colors duration-300'
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/terms"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-[#349D89]'
                      : 'hover:text-[#349D89] transition-colors duration-300'
                  }
                >
                  Terms & Conditions
                </NavLink>
              </li>
              <li>
                <button
                  onClick={openModalPopUp}
                  className="bg-[#349D89] text-white px-4 py-2 rounded transition duration-300 hover:bg-[#297d6a]"
                >
                  Join Waitlist
                </button>
              </li>
            </ul>
          </div>
        )}

        {/* Socials */}
        <div className="hidden lg:flex socials items-center gap-6">
          <a href="#">
            <i className="fa-brands fa-twitter text-[#349D89] text-xl hover:scale-110 transition-transform"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram text-[#349D89] text-xl hover:scale-110 transition-transform"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-linkedin text-[#349D89] text-xl hover:scale-110 transition-transform"></i>
          </a>
        </div>

      </div>
    </header>
  );
}

export default Header;
