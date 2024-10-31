import React from 'react';
import img2 from '../../../public/images/img2.png';
import img3 from '../../../public/images/img3.png';
import img4 from '../../../public/images/img4.png';

function Register() {
  return (
    <div className='py-10 w-full lg:px-20 px-5'>
      <div className="max-w-7xl mx-auto">
        <h2 className='font-bold text-3xl text-center'>How It Works</h2>
        
        <div className="cards grid gap-5 lg:grid-cols-3 items-stretch pt-10">
          
          {/* Card 1 */}
          <div className="card flex flex-col text-center rounded-xl bg-[#EDF6F4] w-full gap-y-8 px-6 pt-6">
            <div className="top flex flex-col gap-y-4">
              <h3 className='text-2xl font-semibold text-[#36A690]'>Sign Up & Verify Your Account</h3>
              <p className='text-gray-700 mx-auto w-[90%]'>Create your profile as a Driver or CoRyder. Quickly verify your identity for a safe and secure experience.</p>
            </div>
            <div className="flex-grow flex items-end">
              <img className='object-contain mx-auto w-full' src={img2} alt="Sign up page on screen" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="card flex flex-col text-center rounded-xl bg-[#EDF6F4] w-full gap-y-8 px-6 pt-6">
            <div className="top flex flex-col gap-y-4">
              <h3 className='text-2xl font-semibold text-[#36A690]'>Post or Find a Ride</h3>
              <p className='text-gray-700 mx-auto w-[90%]'>Drivers can post available seats for upcoming trips, while CoRyders can browse and find rides that fit their needs.</p>
            </div>
            <div className="flex-grow flex items-end">
              <img className='object-contain mx-auto w-full' src={img3} alt="Find a ride screen" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="card flex flex-col text-center rounded-xl bg-[#EDF6F4] w-full gap-y-8 px-6 pt-6">
            <div className="top flex flex-col gap-y-4">
              <h3 className='text-2xl font-semibold text-[#36A690]'>Share the Journey</h3>
              <p className='text-gray-700 mx-auto w-[90%]'>Once confirmed, connect with your fellow travelers, share the cost, and enjoy the ride.</p>
            </div>
            <div className="flex-grow flex items-end">
              <img className='object-contain mx-auto w-full' src={img4} alt="Share journey screen" />
            </div>
          </div>

        </div>
        
      </div>
    </div>
  );
}

export default Register;
