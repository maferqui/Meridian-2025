"use client";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import ScrollAnimationWrapper from "../../../../components/custom/ScrollAnimationWrapper";

export const MainContentSection = () => {
  return (
    <section className="flex flex-col items-center gap-10 sm:gap-16 md:gap-20 pt-20 sm:pt-32 md:pt-48 pb-16 sm:pb-20 md:pb-28 px-6 sm:px-8 md:px-16 relative self-stretch w-full flex-[0_0_auto] bg-[#0e2828]">
      <div className="flex flex-col max-w-screen-xl items-start gap-10 sm:gap-16 md:gap-20 relative w-full flex-[0_0_auto]">
        <div className="flex flex-col md:flex-row items-center gap-10 sm:gap-16 md:gap-20 relative self-stretch w-full flex-[0_0_auto]">
          <ScrollAnimationWrapper className="relative w-full md:flex-1 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[640px] overflow-hidden rounded-md">
            <img
              className="w-full h-full object-cover"
              alt="Placeholder image"
              src="https://c.animaapp.com/md5ge3wdbtqe7d/img/placeholder-image-2.png"
            />
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper
            delay={0.2}
            className="flex flex-col items-start gap-6 md:gap-8 relative w-full md:flex-1"
          >
            <Card className="flex flex-col items-start gap-6 md:gap-8 relative w-full border-none bg-transparent">
              <CardContent className="flex flex-col items-start gap-6 md:gap-8 p-0 relative self-stretch w-full">
                <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center relative flex-[0_0_auto]">
                    <span
                      className="relative w-fit font-heading-tagline text-[#d5ac57] whitespace-nowrap font-bold"
                      style={{ fontSize: "1rem", lineHeight: "150%" }}
                    >
                      ¿QUIÉNES SOMOS?
                    </span>
                  </div>

                  <div className="flex flex-col items-start gap-4 sm:gap-6 relative self-stretch w-full flex-[0_0_auto]">
                    <h2
                      className="relative self-stretch font-heading-h2 text-white"
                      style={{ fontSize: "3.25rem", lineHeight: "120%" }}
                    >
                      Tu aliado estratégico en LATAM
                    </h2>

                    <p
                      className="relative self-stretch font-text-medium-normal text-white"
                      style={{ fontSize: "1.125rem", lineHeight: "150%" }}
                    >
                      Somos la primera consultora estratégica ecuatoriana diseñada
                      para competir con gigantes globales como McKinsey, BCG o
                      Bain, pero con la agilidad, cercanía y adaptabilidad que
                      solo un equipo local puede ofrecer.
                      <br />
                      <br />
                      Ayudamos a startups, scale-ups y corporativos a escalar con
                      rentabilidad, innovación y propósito.
                    </p>
                  </div>
                </div>
              </CardContent>

              <div className="items-center gap-6 inline-flex relative flex-[0_0_auto]">
                <Button
                  variant="outline"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 relative flex-[0_0_auto] rounded-md overflow-hidden border border-solid border-[#ffffff66] bg-transparent text-white hover:bg-[#ffffff22] hover:text-white"
                >
                  <span
                    className="relative w-fit font-text-regular-medium whitespace-nowrap"
                    style={{ fontSize: "1rem", lineHeight: "150%" }}
                  >
                    Conoce más
                  </span>
                </Button>
              </div>
            </Card>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};
