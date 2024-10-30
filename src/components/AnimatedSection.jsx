import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`opacity-0 transform translate-y-10 transition-all duration-1000 ease-in-out delay-[300ms] ${
        inView ? 'opacity-100 translate-y-0' : ''
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;