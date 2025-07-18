"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ScratchToReveal from "@/components/eldoraui/ScratchToReveal";
import { MIcon } from "@/components/icons/m";
import ScrollAnimationWrapper from "@/components/custom/ScrollAnimationWrapper";

export const HeaderSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="flex flex-col items-center w-full bg-[#0e2828]">
      <div className="relative w-full">
        <div className="relative w-full">
          <img
            className="w-full h-auto border-b-[2px] border-[#d5ac57]"
            alt="Meridian Consulting Partners hero image"
            src="https://c.animaapp.com/md5ge3wdbtqe7d/img/placeholder-image.png"
          />
        </div>
      </div>

      <Card className="w-full border-0 rounded-none bg-transparent">
        <CardContent className="p-0">
          <div className="relative flex flex-col max-w-screen-xl w-full mx-auto pt-16 md:pt-[192px] px-6 md:px-8 lg:px-16 xl:px-0">
            <ScrollAnimationWrapper delay={0} className="absolute -top-12 md:-top-36 right-4 md:right-8 lg:right-16 xl:right-0 z-10">
              <ScratchToReveal
                image="/images/square-lion.png"
                width={isMobile ? 90 : 286}
                height={isMobile ? 90 : 286}
                minScratchPercentage={70}
                className="flex items-center justify-center overflow-hidden rounded-full border-4 border-transparent ring-4 ring-primary bg-base-200"
              >
                <MIcon size={isMobile ? 70 : 250} />
              </ScratchToReveal>
            </ScrollAnimationWrapper>

            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 lg:gap-20 w-full">
              <ScrollAnimationWrapper delay={0.2} className="flex flex-col w-full md:flex-1 items-start">
                <h1 className="font-heading-h1 text-white" style={{ fontSize: '4.5rem', lineHeight: '120%' }}>
                  Meridian
                </h1>
                <h2 className="font-heading-h2 text-[#d5ac57]" style={{ fontSize: '3.5rem', lineHeight: '120%' }}>
                  Consulting Partners
                </h2>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper delay={0.4} className="flex flex-col w-full md:flex-1 gap-4 md:gap-8 mt-6 md:mt-0">
                <p className="font-text-medium-normal text-white" style={{ fontSize: '1.125rem', lineHeight: '150%', fontWeight: '400' }}>
                  En nuestra empresa, nos especializamos en optimizar la
                  usabilidad y el diseño de interfaces para mejorar la
                  experiencia del usuario. Agenda una consulta gratuita y
                  descubre cómo podemos ayudarte a alcanzar tus objetivos.
                </p>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
