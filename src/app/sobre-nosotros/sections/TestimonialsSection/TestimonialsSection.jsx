"use client";

import React, { useState, useEffect } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = () => {
  const [fontSize, setFontSize] = useState({
    heading: '1.75rem', // Default for mobile
    subheading: '1rem', // Default for mobile
    quote: '1rem',
    name: '0.875rem',
    position: '0.875rem'
  });
  
  // Force rem units for all font sizes
  const fontStyles = {
    heading: {
      fontFamily: '"Libre Baskerville", serif',
      fontSize: fontSize.heading,
      lineHeight: '120%',
      letterSpacing: '-0.01em',
      fontWeight: 400
    },
    subheading: {
      fontFamily: '"Manrope", sans-serif',
      fontSize: fontSize.subheading,
      lineHeight: '150%',
      fontWeight: 400
    },
    quote: {
      fontFamily: '"Manrope", sans-serif',
      fontSize: fontSize.quote,
      lineHeight: '150%',
      fontWeight: 400
    },
    name: {
      fontFamily: '"Manrope", sans-serif',
      fontSize: fontSize.name,
      lineHeight: '150%',
      fontWeight: 600
    },
    position: {
      fontFamily: '"Manrope", sans-serif',
      fontSize: fontSize.position,
      lineHeight: '150%',
      fontWeight: 400
    }
  };

  useEffect(() => {
    const updateFontSizes = () => {
      const newSizes = {
        heading: '1.75rem', // Default for mobile
        subheading: '1rem', // Default for mobile
        quote: '1rem',
        name: '0.875rem',
        position: '0.875rem'
      };

      if (window.innerWidth >= 640) { // sm
        newSizes.heading = '2.25rem';
        newSizes.subheading = '1.125rem';
      }
      if (window.innerWidth >= 768) { // md
        newSizes.heading = '2.75rem';
        newSizes.subheading = '1.25rem';
        newSizes.quote = '1.125rem';
        newSizes.name = '1rem';
        newSizes.position = '1rem';
      }
      if (window.innerWidth >= 1024) { // lg
        newSizes.heading = '3.25rem';
      }
      
      setFontSize(newSizes);
    };

    // Set initial values
    updateFontSizes();

    // Add event listener for window resize
    window.addEventListener('resize', updateFontSizes);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateFontSizes);
  }, []);
  const testimonials = [
    {
      quote:
        '"El servicio superó nuestras expectativas y transformó nuestro negocio de manera integral. El equipo de Meridian no solo cumplió con los objetivos, sino que los superó."',
      name: "Juan Pérez",
      position: "CEO, Tech Solutions",
      avatar: "https://c.animaapp.com/md86hf3y5QgV1L/img/avatar-image.png",
    },
    {
      quote:
        '"Gracias a su equipo, logramos un crecimiento del 300% en ventas digitales. Su enfoque estratégico y humano marcó la diferencia."',
      name: "María López",
      position: "Directora, Innovate",
      avatar: "https://c.animaapp.com/md86hf3y5QgV1L/img/avatar-image-1.png",
    },
    {
      quote:
        '"Su enfoque personalizado hizo toda la diferencia. Nos ayudaron a implementar procesos que revolucionaron nuestra operación."',
      name: "Carlos Ruiz",
      position: "Gerente, Finances Co.",
      avatar: "https://c.animaapp.com/md86hf3y5QgV1L/img/avatar-image-2.png",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-10 sm:gap-16 md:gap-20 px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-28 relative w-full bg-[#0e2828]">
      <div className="flex flex-col max-w-screen-xl items-center gap-10 sm:gap-16 md:gap-20 relative w-full">
        <div className="flex flex-col max-w-screen-md items-center gap-4 sm:gap-6 relative w-full">
          <h2 
            className="relative self-stretch mt-[-1.00px] text-white text-center"
            style={fontStyles.heading}
          >
            Testimonios de Clientes
          </h2>

          <p 
            className="relative self-stretch text-white text-center"
            style={fontStyles.subheading}
          >
            Nuestros clientes comparten sus experiencias positivas.
          </p>
        </div>

        <div className="flex flex-col items-start gap-8 relative self-stretch w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="gap-4 sm:gap-6 p-6 sm:p-8 bg-[#0e2828] rounded-lg overflow-hidden border border-solid border-[#ffffff33] flex flex-col items-start relative"
              >
                <CardContent className="p-0 w-full">
                  <div className="inline-flex flex-col items-start gap-4 sm:gap-6 relative">
                    <p 
                      className="relative w-full mt-[-1.00px] text-white"
                      style={fontStyles.quote}
                    >
                      {testimonial.quote}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 relative self-stretch w-full mt-6">
                    <Avatar className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#d5ac57]">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={`${testimonial.name} avatar`}
                        className="object-cover"
                      />
                      <AvatarFallback>
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col items-start relative flex-1">
                      <h3 
                        className="self-stretch mt-[-1.00px] text-white"
                        style={fontStyles.name}
                      >
                        {testimonial.name}
                      </h3>

                      <p 
                        className="self-stretch text-white"
                        style={fontStyles.position}
                      >
                        {testimonial.position}
                      </p>
                    </div>
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
