import React, { useState } from 'react';
import img6 from '../../../public/images/img6.png';

const testimonials = [
  {
    name: 'Angela Gomes',
    feedback: 'I am so pleased with this app and the way the team handled reports if you have issues with the Driver.',
    image: img6,
    stars: 5,
  },
  {
    name: 'John Doe',
    feedback: 'Great experience! The app is user-friendly and the drivers are very professional.',
    image: img6,
    stars: 5,
  },
  {
    name: 'Maria Smith',
    feedback: 'I love using this service! It makes my travels so much easier and affordable.',
    image: img6,
    stars: 5,
  },
  {
    name: 'Alex Johnson',
    feedback: 'Fantastic service! Highly recommend to anyone looking for a reliable ride.',
    image: img6,
    stars: 5,
  },
  {
    name: 'Emily Clark',
    feedback: 'The team is very responsive and made my booking experience seamless.',
    image: img6,
    stars: 5,
  },
];

function Testimony() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Default items to show on extra large screens

  // Adjust items per page based on screen size
  const adjustItemsPerPage = () => {
    if (window.innerWidth < 640) return 1;  // Small screens
    if (window.innerWidth < 768) return 2;  // Medium screens
    if (window.innerWidth < 1024) return 3;  // Large screens
    return 4;  // Extra large screens
  };

  const handleResize = () => {
    const newItemsPerPage = adjustItemsPerPage();
    if (newItemsPerPage !== itemsPerPage) {
      setCurrentIndex(0);  // Reset index when resizing
    }
  };

  // Add event listener for window resize
  window.addEventListener('resize', handleResize);

  // Calculate the current testimonials to display
  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + adjustItemsPerPage());

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.max(testimonials.length - adjustItemsPerPage(), 0) : prevIndex - adjustItemsPerPage()));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + adjustItemsPerPage() >= testimonials.length ? 0 : prevIndex + adjustItemsPerPage()));
  };

  return (
    <div className="w-full px-5 lg:px-20 py-5">
      <div className='max-w-7xl mx-auto'>
        <h2 className='font-bold lg:text-3xl text-2xl text-center'>What people are saying about us</h2>
        <div className="cards lg:pt-10 pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {currentTestimonials.map((testimonial, index) => (
            <div key={index} className="card h-72 rounded-lg p-4 bg-[#EDF6F4] space-y-2 shadow-md flex flex-col">
              <div className="image">
                <img className="object-cover rounded-full w-16 h-16 mx-auto" src={testimonial.image} alt={`${testimonial.name} profile`} />
              </div>
              <div className="text space-y-2 text-center">
                <h4 className='font-bold text-lg'>{testimonial.name}</h4>
                <h6 className='font-semibold text-sm'>{testimonial.feedback}</h6>
              </div>
              <div className="star flex justify-center">
                {Array.from({ length: testimonial.stars }).map((_, starIndex) => (
                  <i key={starIndex} className="fa-solid fa-star text-[#D7A912]"></i>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="slideshow flex items-center justify-center pt-5 gap-5">
          <button onClick={handlePrev} className="p-2 rounded-full hover:bg-[#D7D7D7] transition duration-300">
            <i className="fa-solid fa-left-long"></i>
          </button>
          <span className='flex items-center gap-1'>
            {Array.from({ length: Math.ceil(testimonials.length / adjustItemsPerPage()) }).map((_, index) => (
              <p key={index} className={`h-3 w-3 rounded-full ${currentIndex / adjustItemsPerPage() === index ? 'bg-[#349D89]' : 'bg-[#C7CACA]'}`}></p>
            ))}
          </span>
          <button onClick={handleNext} className="p-2 rounded-full hover:bg-[#D7D7D7] transition duration-300">
            <i className="fa-solid fa-right-long"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimony;
