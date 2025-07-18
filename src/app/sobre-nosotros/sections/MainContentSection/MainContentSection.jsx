"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection = () => {
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
        newSizes.body = '1rem';
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
  const aboutUsContent = {
    tagline: "ACERCA DE NOSOTROS",
    heading: "Nuestra Historia y Compromiso con la Excelencia",
    description: [
      "MERIDIAN nació con un objetivo claro: Crear la primera consultora estratégica ecuatoriana capaz de competir con las mejores del mundo. Detectamos una oportunidad única en LATAM: La aceleración digital, el auge del capital privado y la urgencia de transformar organizaciones con propósito.",
      "Inspirados por firmas como McKinsey, BCG y Bain, pero conscientes de las particularidades locales, diseñamos una consultora ágil, rigurosa y profundamente humana. Con el propósito de acompañar a startups, scale-ups y corporativos a escalar con rentabilidad, eficiencia e impacto social.",
      "Contamos con el respaldo de START Quito, capítulo oficial en Ecuador de START Global, una ONG suiza referente en innovación y emprendimiento a nivel mundial.",
    ],
    image: "https://c.animaapp.com/md86hf3y5QgV1L/img/placeholder-image-1.png",
  };

  return (
    <section className="flex flex-col items-center gap-10 sm:gap-16 md:gap-20 px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-28 bg-[#0e2828]">
      <Card className="max-w-screen-xl w-full border-none bg-transparent">
        <CardContent className="p-0 space-y-10 sm:space-y-16 md:space-y-20">
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
                  {aboutUsContent.tagline}
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
                {aboutUsContent.heading}
              </h2>
            </div>

            <div className="flex flex-col gap-6 sm:gap-8 w-full lg:w-auto lg:flex-1">
              <div 
                className="text-white"
                style={{
                  fontFamily: '"Manrope", sans-serif',
                  fontSize: fontSizes.body,
                  lineHeight: '150%',
                  fontWeight: 400
                }}
              >
                {aboutUsContent.description.map((paragraph, index) => (
                  <React.Fragment key={index}>
                    {paragraph}
                    {index < aboutUsContent.description.length - 1 && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <img
            className="w-full h-[250px] sm:h-[400px] md:h-[550px] lg:h-[738px] object-cover rounded-lg"
            alt="Placeholder image"
            src={aboutUsContent.image}
          />
        </CardContent>
      </Card>
    </section>
  );
};
