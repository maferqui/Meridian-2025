"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServicesSection = () => {
  const [fontSizes, setFontSizes] = useState({
    h2: '1.75rem',    // Default for mobile
    tagline: '0.875rem',
    body: '1rem'      // Default for mobile
  });

  useEffect(() => {
    const updateFontSizes = () => {
      const newSizes = {
        h2: '1.75rem',    // Default for mobile
        tagline: '0.875rem',
        body: '1rem'      // Default for mobile
      };

      if (window.innerWidth >= 640) { // sm
        newSizes.h2 = '2.25rem';
      }
      
      if (window.innerWidth >= 768) { // md
        newSizes.h2 = '2.75rem';
        newSizes.body = '1.125rem';
      }
      
      if (window.innerWidth >= 1024) { // lg
        newSizes.h2 = '3.25rem';
      }
      
      setFontSizes(newSizes);
    };

    // Set initial values
    updateFontSizes();

    // Add event listener for window resize
    window.addEventListener('resize', updateFontSizes);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateFontSizes);
  }, []);
  return (
    <section id="servicios" className="flex flex-col items-center gap-10 sm:gap-16 md:gap-20 px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-28 bg-[#0e2828] w-full">
      <div className="flex flex-col max-w-screen-xl items-start gap-10 sm:gap-16 md:gap-20 w-full">
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 md:gap-16 lg:gap-20 w-full">
          <div className="flex flex-col items-start gap-3 sm:gap-4 w-full lg:w-auto lg:flex-1">
            <div className="inline-flex items-center">
              <span 
                className="text-[#d5ac57] whitespace-nowrap uppercase font-semibold tracking-widest"
                style={{
                  fontFamily: '"Manrope", sans-serif',
                  fontSize: fontSizes.tagline,
                  lineHeight: '150%',
                  letterSpacing: '0.05em'
                }}
              >
                SOSTENIBILIDAD
              </span>
            </div>

            <h2 
              className="text-white font-serif"
              style={{
                fontSize: fontSizes.h2,
                lineHeight: '120%',
                letterSpacing: '-0.01em',
                fontWeight: 400,
                fontFamily: '"Libre Baskerville", serif'
              }}
            >
              Comprometidos con el desarrollo sostenible
            </h2>
          </div>

          <p 
            className="w-full lg:w-auto lg:flex-1 text-white"
            style={{
              fontFamily: '"Manrope", sans-serif',
              fontSize: fontSizes.body,
              lineHeight: '150%',
              fontWeight: 400
            }}
          >
            En nuestra empresa, creemos firmemente en la sostenibilidad y en los
            Objetivos de Desarrollo Sostenible (ODS). Trabajamos para integrar
            prácticas responsables que beneficien tanto a las personas como al
            planeta. Nuestro enfoque se centra en crear soluciones que promuevan
            un futuro más verde y equitativo.
          </p>
        </div>

        <Card className="w-full border-none bg-transparent">
          <CardContent className="p-0 overflow-x-auto">
            <img
              className="w-full min-w-[768px] rounded-lg"
              alt="Content"
              src="https://c.animaapp.com/md86hf3y5QgV1L/img/content.svg"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
