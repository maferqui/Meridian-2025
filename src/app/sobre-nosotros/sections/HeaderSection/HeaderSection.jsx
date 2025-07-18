"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import ScrollAnimationWrapper from "../../../../components/custom/ScrollAnimationWrapper";

export const HeaderSection = () => {
  const [fontSize, setFontSize] = useState({
    h2: '1.75rem', // Default for mobile
    p: '1rem'      // Default for mobile
  });

  useEffect(() => {
    // This function runs only on the client side
    const updateFontSizes = () => {
      const newSizes = {
        h2: '1.75rem', // Default for mobile
        p: '1rem'      // Default for mobile
      };

      if (window.innerWidth >= 640) newSizes.h2 = '2.25rem'; // sm
      if (window.innerWidth >= 768) {
        newSizes.h2 = '2.75rem'; // md
        newSizes.p = '1.125rem';
      }
      if (window.innerWidth >= 1024) newSizes.h2 = '3.25rem'; // lg
      
      setFontSize(newSizes);
    };

    // Set initial values
    updateFontSizes();

    // Add event listener for window resize
    window.addEventListener('resize', updateFontSizes);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateFontSizes);
  }, []);
  // Image data for easier maintenance
  const images = [
    {
      className: "w-full md:w-[80%] lg:w-[939px] h-auto md:h-[626px] mx-auto object-contain",
      alt: "Placeholder image",
      src: "https://c.animaapp.com/md86hf3y5QgV1L/img/placeholder-image.png",
    },
    {
      className: "absolute w-[30%] md:w-[35%] lg:w-[438px] h-auto md:h-[292px] bottom-0 left-0 hidden sm:block",
      alt: "Placeholder image",
      src: "https://c.animaapp.com/md86hf3y5QgV1L/img/placeholder-image-12.svg",
    },
    {
      className: "absolute w-[30%] md:w-[35%] lg:w-[438px] h-auto md:h-[438px] bottom-0 right-0 hidden sm:block",
      alt: "Placeholder image",
      src: "https://c.animaapp.com/md86hf3y5QgV1L/img/placeholder-image-13.svg",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-28 px-4 md:px-8 lg:px-16 bg-[#0e2828] flex justify-center">
      <div className="max-w-screen-xl w-full flex flex-col items-center gap-10 md:gap-16 lg:gap-20">
        {/* Image container */}
        <ScrollAnimationWrapper delay={0.1} className="relative w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[750px]">
          <div className="relative w-full h-full flex items-center justify-center">
            <ScrollAnimationWrapper delay={0.2} className="w-full h-full flex items-center justify-center">
              <img
                className={`${images[0].className} rounded-lg`}
                alt={images[0].alt}
                src={images[0].src}
              />
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.4} className={images[1].className.replace('hidden', '')}>
              <img
                className="w-full h-full object-contain"
                alt={images[1].alt}
                src={images[1].src}
              />
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.6} className={images[2].className.replace('hidden', '')}>
              <img
                className="w-full h-full object-contain"
                alt={images[2].alt}
                src={images[2].src}
              />
            </ScrollAnimationWrapper>
          </div>
        </ScrollAnimationWrapper>

        {/* Text content */}
        <ScrollAnimationWrapper delay={0.8} className="w-full flex justify-center">
          <Card className="border-none bg-transparent max-w-screen-md w-full">
            <CardContent className="p-0">
              <div className="flex flex-col items-center gap-6 md:gap-8 text-center">
                <div className="flex flex-col items-center gap-3 md:gap-4 w-full">
                  <div className="inline-flex items-center">
                    <span 
                      className="font-semibold text-[#d5ac57] uppercase tracking-widest"
                      style={{ 
                        fontFamily: '"Manrope", sans-serif',
                        fontSize: '0.875rem',
                        lineHeight: '150%',
                        letterSpacing: '0.05em'
                      }}
                    >
                      NUESTRO ENFOQUE
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4 md:gap-6 w-full">
                  <h2 
                    className="font-heading-h2 text-white text-center"
                    style={{
                      fontSize: fontSize.h2,
                      lineHeight: '110%',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    Diseñamos experiencias que inspiran y conectan
                  </h2>
                  <p 
                    className="font-text-medium-normal text-white text-center max-w-2xl"
                    style={{
                      fontSize: fontSize.p,
                      lineHeight: '150%',
                      opacity: 0.8
                    }}
                  >
                    En Meridian, creamos soluciones digitales que no solo se ven increíbles, sino que también generan resultados tangibles para tu negocio.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};
