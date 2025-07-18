"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ValueSection = () => {
  const [fontSizes, setFontSizes] = useState({
    h2: '1.75rem', // Default for mobile
    h4: '1.5rem',  // Default for mobile
    p: '1rem',     // Default for mobile
    tagline: '0.875rem'
  });

  useEffect(() => {
    const updateFontSizes = () => {
      const newSizes = {
        h2: '1.75rem', // Default for mobile
        h4: '1.5rem',  // Default for mobile
        p: '0.875rem', // Default for mobile (14px)
        tagline: '0.875rem'
      };

      if (window.innerWidth >= 640) { // sm
        newSizes.h2 = '2.25rem';
        newSizes.h4 = '1.75rem';
        newSizes.p = '1rem'; // 16px
      }
      
      if (window.innerWidth >= 768) { // md
        newSizes.h2 = '2.75rem';
        newSizes.h4 = '2rem';
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
  const values = [
    {
      icon: "https://c.animaapp.com/md86hf3y5QgV1L/img/shape---shield.svg",
      title: "Integridad Radical",
      description:
        "Actuamos con transparencia total, priorizando siempre el bienestar de nuestros clientes",
      alt: "Shape shield",
    },
    {
      icon: "https://c.animaapp.com/md86hf3y5QgV1L/img/user---users-group.svg",
      title: "Excelencia Humana",
      description:
        "Combinamos rigor técnico con calidez personal en cada interacción",
      alt: "User users group",
    },
    {
      icon: "https://c.animaapp.com/md86hf3y5QgV1L/img/navigation---globe.svg",
      title: "Diversidad",
      description:
        "Valoramos diferentes perspectivas como motor de innovación y crecimiento",
      alt: "Navigation globe",
    },
    {
      icon: "https://c.animaapp.com/md86hf3y5QgV1L/img/interface---chart-bar-vertical-01.svg",
      title: "Impacto Medible",
      description:
        "Cada proyecto debe generar resultados tangibles y sostenibles",
      alt: "Interface chart bar",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-10 sm:gap-16 md:gap-20 px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-28 relative bg-[#0e2828] w-full">
      <div className="flex flex-col max-w-screen-xl items-start gap-10 sm:gap-16 md:gap-20 relative w-full">
        <div className="flex flex-col max-w-screen-md items-start gap-3 sm:gap-4 relative w-full">
          <div className="inline-flex items-center relative self-stretch">
            <div 
              className="relative w-fit mt-[-1.00px] text-[#d5ac57] whitespace-nowrap uppercase font-semibold tracking-widest"
              style={{
                fontFamily: '"Manrope", sans-serif',
                fontSize: fontSizes.tagline,
                lineHeight: '150%',
                letterSpacing: '0.05em'
              }}
            >
              VALORES
            </div>
          </div>

          <div className="flex flex-col items-start sm:items-center gap-4 sm:gap-6 relative self-stretch w-full">
            <h2 
              className="mt-[-1.00px] relative self-stretch text-white font-serif"
              style={{
                fontSize: fontSizes.h2,
                lineHeight: '120%',
                letterSpacing: '-0.01em',
                fontWeight: 400,
                fontFamily: '"Libre Baskerville", serif'
              }}
            >
              Nuestros valores
            </h2>

            <p 
              className="self-stretch relative text-white"
              style={{
                fontFamily: '"Manrope", sans-serif',
                fontSize: fontSizes.p,
                lineHeight: '150%',
                fontWeight: 400
              }}
            >
              Los principios que guían cada decisión
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-8 sm:gap-12 md:gap-16 relative self-stretch w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {values.map((value, index) => (
              <Card key={index} className="bg-transparent border-none">
                <CardContent className="flex flex-col items-start gap-4 sm:gap-6 p-0">
                  <img className="w-10 h-10 sm:w-12 sm:h-12" alt={value.alt} src={value.icon} />

                  <div className="flex flex-col items-start gap-2 sm:gap-4 self-stretch w-full">
                    <h4 
                      className="mt-[-1.00px] relative self-stretch text-white"
                      style={{
                        fontSize: fontSizes.h4,
                        lineHeight: '120%',
                        fontWeight: 400,
                        fontFamily: '"Libre Baskerville", serif'
                      }}
                    >
                      {value.title}
                    </h4>

                    <p 
                      className="self-stretch relative text-white"
                      style={{
                        fontFamily: '"Manrope", sans-serif',
                        fontSize: '0.875rem',
                        lineHeight: '150%',
                        fontWeight: 400
                      }}
                    >
                      {value.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
