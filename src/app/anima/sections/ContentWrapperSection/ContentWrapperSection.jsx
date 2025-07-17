"use client";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContentWrapperSection = () => {
  return (
    <section className="flex flex-col items-center gap-10 sm:gap-16 md:gap-20 px-6 sm:px-8 md:px-16 py-16 sm:py-20 md:py-28 relative self-stretch w-full bg-[#0e2828]">
      <div className="flex flex-col max-w-screen-xl items-start gap-10 sm:gap-16 md:gap-20 relative w-full">
        <Card className="border-0 bg-transparent">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row items-center gap-10 sm:gap-16 md:gap-20 w-full">
              <div className="flex flex-col items-start gap-6 md:gap-8 w-full md:flex-1">
                <div className="flex flex-col items-start gap-4 self-stretch w-full">
                  <div className="inline-flex items-center">
                    <span className="font-heading-tagline text-[#d5ac57] whitespace-nowrap font-bold" style={{ fontSize: '1rem', lineHeight: '150%' }}>
                      DESCUBRE
                    </span>
                  </div>

                  <div className="flex flex-col items-start gap-4 sm:gap-6 self-stretch w-full">
                    <h2 className="self-stretch font-heading-h2 text-white" style={{ fontSize: '3.25rem', lineHeight: '120%' }}>
                      ¿Por qué elegirnos?
                    </h2>

                    <p className="self-stretch font-text-medium-normal text-white" style={{ fontSize: '1.125rem', lineHeight: '150%' }}>
                      Contamos con más de 15 años de experiencia en el sector,
                      brindando soluciones efectivas a nuestros clientes. Hemos
                      completado más de 50 transacciones exitosas en 12 países
                      de LATAM.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:flex-1 mt-6 md:mt-0">
                <img
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[640px] object-cover rounded-md"
                  alt="Placeholder image"
                  src="https://c.animaapp.com/md5ge3wdbtqe7d/img/placeholder-image-4.png"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
