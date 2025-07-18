import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServicesSection = () => {
  return (
    <section className="flex flex-col items-center gap-10 sm:gap-16 md:gap-20 px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-28 bg-[#0e2828] w-full">
      <div className="flex flex-col max-w-screen-xl items-start gap-10 sm:gap-16 md:gap-20 w-full">
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 md:gap-16 lg:gap-20 w-full">
          <div className="flex flex-col items-start gap-3 sm:gap-4 w-full lg:w-auto lg:flex-1">
            <div className="inline-flex items-center">
              <span className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[#d5ac57] text-[14px] md:text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
                SOSTENIBILIDAD
              </span>
            </div>

            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-white [font-style:var(--heading-h2-font-style)]">
              Comprometidos con el desarrollo sostenible
            </h2>
          </div>

          <p className="w-full lg:w-auto lg:flex-1 font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[16px] md:text-[length:var(--text-medium-normal-font-size)] leading-[var(--text-medium-normal-line-height)] text-white tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)]">
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
