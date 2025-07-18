"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutUsSection = () => {
  const [fontSizes, setFontSizes] = useState({
    h2: '1.75rem',    // Default for mobile
    h4: '1.5rem',     // Default for mobile
    tagline: '0.875rem',
    body: '1rem',     // Default for mobile
    small: '0.875rem' // 14px
  });

  useEffect(() => {
    const updateFontSizes = () => {
      const newSizes = {
        h2: '1.75rem',    // Default for mobile
        h4: '1.5rem',     // Default for mobile
        tagline: '0.875rem',
        body: '1rem',     // Default for mobile
        small: '0.875rem' // 14px
      };

      if (window.innerWidth >= 640) { // sm
        newSizes.h2 = '2.25rem';
        newSizes.h4 = '1.75rem';
      }
      
      if (window.innerWidth >= 768) { // md
        newSizes.h2 = '2.75rem';
        newSizes.h4 = '2rem';
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
  // Service data for mapping
  const services = [
    {
      icon: "https://c.animaapp.com/md86hf3y5QgV1L/img/touch-app.svg",
      title: "Diseño UX/UI a medida para tu empresa",
      description:
        "Creamos interfaces intuitivas que mejoran la experiencia del usuario.",
    },
    {
      icon: "https://c.animaapp.com/md86hf3y5QgV1L/img/analytics.svg",
      title: "Estrategias digitales efectivas para crecimiento",
      description:
        "Desarrollamos campañas que impulsan tu visibilidad en línea.",
    },
    {
      icon: "https://c.animaapp.com/md86hf3y5QgV1L/img/analytics.svg",
      title: "Consultoría en transformación digital",
      description:
        "Desarrollamos campañas que impulsan tu visibilidad en línea.",
    },
    {
      icon: "https://c.animaapp.com/md86hf3y5QgV1L/img/analytics.svg",
      title: "Estrategias digitales efectivas para crecimiento",
      description:
        "Desarrollamos campañas que impulsan tu visibilidad en línea.",
    },
    {
      icon: "https://c.animaapp.com/md86hf3y5QgV1L/img/analytics.svg",
      title: "Estrategias digitales efectivas para crecimiento",
      description:
        "Desarrollamos campañas que impulsan tu visibilidad en línea.",
    },
    {
      icon: "https://c.animaapp.com/md86hf3y5QgV1L/img/analytics.svg",
      title: "Consultoría especializada en transformación digital",
      description: "Te guiamos en tu proceso de digitalización.",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-10 sm:gap-16 md:gap-20 px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-28 relative w-full bg-[#0e2828]">
      <div className="flex flex-col max-w-screen-xl items-start gap-10 sm:gap-16 md:gap-20 relative w-full">
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 md:gap-16 lg:gap-20 self-stretch w-full">
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
                SERVICIOS
              </span>
            </div>

            <h2 
              className="self-stretch text-white font-serif"
              style={{
                fontSize: fontSizes.h2,
                lineHeight: '120%',
                letterSpacing: '-0.01em',
                fontWeight: 400,
                fontFamily: '"Libre Baskerville", serif'
              }}
            >
              Soluciones personalizadas para tu negocio
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
            Ofrecemos una variedad de servicios diseñados para optimizar el
            rendimiento de tu empresa. Desde el diseño UX/UI hasta la
            implementación de estrategias digitales, cada solución está adaptada
            a tus necesidades específicas. Descubre cómo podemos ayudarte a
            alcanzar tus objetivos.
          </p>
        </div>

        <div className="flex flex-col items-start gap-8 sm:gap-12 md:gap-16 self-stretch w-full">
          {/* First row of services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full">
            {services.slice(0, 3).map((service, index) => (
              <Card
                key={`service-row1-${index}`}
                className="bg-transparent border-none"
              >
                <CardContent className="flex flex-col items-start gap-4 sm:gap-6 p-0">
                  <img
                    className="w-10 h-10 sm:w-12 sm:h-12"
                    alt="Service icon"
                    src={service.icon}
                  />
                  <h4 
                    className="self-stretch text-white"
                    style={{
                      fontSize: fontSizes.h4,
                      lineHeight: '120%',
                      letterSpacing: '-0.01em',
                      fontWeight: 400,
                      fontFamily: '"Libre Baskerville", serif'
                    }}
                  >
                    {service.title}
                  </h4>
                  <p 
                    className="self-stretch text-white"
                    style={{
                      fontFamily: '"Manrope", sans-serif',
                      fontSize: fontSizes.small,
                      lineHeight: '150%',
                      fontWeight: 400
                    }}
                  >
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Second row of services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full">
            {services.slice(3, 6).map((service, index) => (
              <Card
                key={`service-row2-${index}`}
                className="bg-transparent border-none"
              >
                <CardContent className="flex flex-col items-start gap-4 sm:gap-6 p-0">
                  <img
                    className="w-10 h-10 sm:w-12 sm:h-12"
                    alt="Service icon"
                    src={service.icon}
                  />
                  <h4 
                    className="self-stretch text-white"
                    style={{
                      fontSize: fontSizes.h4,
                      lineHeight: '120%',
                      letterSpacing: '-0.01em',
                      fontWeight: 400,
                      fontFamily: '"Libre Baskerville", serif'
                    }}
                  >
                    {service.title}
                  </h4>
                  <p 
                    className="self-stretch text-white"
                    style={{
                      fontFamily: '"Manrope", sans-serif',
                      fontSize: fontSizes.small,
                      lineHeight: '150%',
                      fontWeight: 400
                    }}
                  >
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md border border-solid border-[#ffffff66] bg-transparent hover:bg-[#ffffff22]"
        >
          <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-white text-[14px] md:text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
            Solicitar
          </span>
        </Button>
      </div>
    </section>
  );
};
