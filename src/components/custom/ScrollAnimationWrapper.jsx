"use client";

import { useInView } from 'react-intersection-observer';

const ScrollAnimationWrapper = ({ children, className, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`${className} ${inView ? 'fade-in' : 'fade-in-hidden'}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;
