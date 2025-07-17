"use client";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import ScrollAnimationWrapper from "@/components/custom/ScrollAnimationWrapper";

export const ValuePropositionSection = () => {
  return (
    <section className="bg-[#0e2828] py-16 sm:py-20 md:py-28 px-6 sm:px-8 md:px-16 w-full">
      <div className="max-w-screen-xl mx-auto">
        <Card className="bg-transparent border-0 shadow-none">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row-reverse items-center gap-10 sm:gap-16 md:gap-20">
              <ScrollAnimationWrapper className="w-full md:flex-1">
                <img
                  className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[640px] w-full object-cover rounded-md"
                  alt="Placeholder image"
                  src="https://c.animaapp.com/md5ge3wdbtqe7d/img/placeholder-image-3.png"
                />
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper className="w-full md:flex-1 mt-6 md:mt-0">
                <div className="flex flex-col gap-6 md:gap-8">
                  <div className="flex flex-col gap-4">
                    <span className="font-heading-tagline text-[#d5ac57] font-bold" style={{ fontSize: '1rem', lineHeight: '150%' }}>
                      NUESTRA
                    </span>

                    <div className="flex flex-col gap-4 sm:gap-6">
                      <h2 className="font-heading-h2 text-white" style={{ fontSize: '3.25rem', lineHeight: '120%' }}>
                        Propuesta de Valor
                      </h2>

                      <p className="font-text-medium-normal text-white" style={{ fontSize: '1.125rem', lineHeight: '150%' }}>
                        Nuestra navegación sticky asegura que siempre tengas
                        acceso a las acciones más importantes. Con un CTA
                        prominente, facilitamos que tus usuarios realicen la
                        acción deseada sin distracciones.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};