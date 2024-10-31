import React from 'react';
import img5 from '../../../public/images/img5.png';
import icon1 from '../../../public/images/icon1.png';
import icon2 from '../../../public/images/icon2.png';
import icon3 from '../../../public/images/icon3.png';
import icon4 from '../../../public/images/icon4.png';
import { useModal } from '../context/ModalService';
import WaitList from '../modal/WaitList';



function Benefit() {
    const { openModal } = useModal();

    const openModalPopUp = () => {
        openModal(<WaitList />, {
            modalSize: 'max-w-4xl',
        });
    }
  return (
    <div className="w-full px-5 lg:px-20">
        <div className='flex flex-col lg:flex-row py-12 max-w-7xl mx-auto gap-5'>
      
            <div className="leftC w-full lg:w-[30%] flex justify-center lg:justify-start">
                <div className="right hidden lg:block">
                <img src={img5} alt="Benefit visual" className="object-contain" />
                </div>
            </div>

            <div className="rightC bg-[#EDF6F4] p-8 lg:p-20 w-full lg:w-[80%] flex flex-col justify-between">
                <h2 className='font-bold lg:text-3xl text-2xl'>Why Choose CoRyde</h2>
                <div className="cards grid gap-5 lg:pt-10 pt-5">
                <div className="card flex items-center gap-5">
                    <div className="right">
                    <img src={icon1} alt="Easy Ride Management" />
                    </div>
                    <div className="left">
                    <h4 className='font-bold text-[#36A690] text-lg'>Easy Ride Management</h4>
                    <p className='text-gray-700 text-sm'>Post or search for rides, book seats, and manage everything in-app.</p>
                    </div>
                </div>
                <div className="card flex items-center gap-5">
                    <div className="right">
                    <img src={icon2} alt="Real-Time Updates" />
                    </div>
                    <div className="left">
                    <h4 className='font-bold text-[#36A690] text-lg'>Real-Time Updates</h4>
                    <p className='text-gray-700 text-sm'>Get real-time notifications on trip status, from confirmation to arrival.</p>
                    </div>
                </div>
                <div className="card flex items-center gap-5">
                    <div className="right">
                    <img src={icon3} alt="Verified Users" />
                    </div>
                    <div className="left">
                    <h4 className='font-bold text-[#36A690] text-lg'>Verified Users</h4>
                    <p className='text-gray-700 text-sm'>All users go through a verification process to ensure safety and trust.</p>
                    </div>
                </div>
                <div className="card flex items-center gap-5">
                    <div className="right">
                    <img src={icon4} alt="Ratings & Reviews" />
                    </div>
                    <div className="left">
                    <h4 className='font-bold text-[#36A690] text-lg'>Ratings & Reviews</h4>
                    <p className='text-gray-700 text-sm'>Both Drivers and CoRyders can rate each other, helping everyone make informed decisions.</p>
                    </div>
                </div>
                </div>

                <div className="button flex justify-center mt-5">
                <button onClick={openModalPopUp} className='bg-[#36A690] text-white rounded-lg px-14 py-3 text-sm hover:bg-opacity-90 transition-colors delay-100 duration-300'>
                    Get started
                </button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Benefit;
