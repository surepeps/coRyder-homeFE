import React from 'react';
import img7 from '../../../public/images/img7.png';
import img8 from '../../../public/images/img8.png';
import img9 from '../../../public/images/img9.png';
import img10 from '../../../public/images/img10.png';
import img11 from '../../../public/images/img11.png';
import img12 from '../../../public/images/img12.png';

function Partners() {
  return (
    <div className="w-full px-5 lg:px-20 py-5">
      <div className='max-w-7xl mx-auto'>
        <h2 className='font-bold lg:text-3xl text-2xl text-center'>Our Trusted Partners</h2>
        <div className="cards grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 place-items-center lg:pt-10 pt-5 gap-5">
          <div className="img">
            <img className='object-cover w-full h-16 md:h-20 lg:h-24' src={img7} alt="Partner Logo" />
          </div>
          <div className="img">
            <img className='object-cover w-full h-16 md:h-20 lg:h-24' src={img8} alt="Partner Logo" />
          </div>
          <div className="img">
            <img className='object-cover w-full h-16 md:h-20 lg:h-24' src={img9} alt="Partner Logo" />
          </div>
          <div className="img">
            <img className='object-cover w-full h-16 md:h-20 lg:h-24' src={img10} alt="Partner Logo" />
          </div>
          <div className="img">
            <img className='object-cover w-full h-16 md:h-20 lg:h-24' src={img11} alt="Partner Logo" />
          </div>
          <div className="img">
            <img className='object-cover w-full h-16 md:h-20 lg:h-24' src={img12} alt="Partner Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
