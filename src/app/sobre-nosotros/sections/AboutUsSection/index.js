export { AboutUsSection } from "./AboutUsSection";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContactSection = () => {
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
            <div className="relative w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[#d5ac57] text-[14px] md:text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
              VALORES
            </div>
          </div>

          <div className="flex flex-col items-start sm:items-center gap-4 sm:gap-6 relative self-stretch w-full">
            <h2 className="mt-[-1.00px] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] relative self-stretch font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-white [font-style:var(--heading-h2-font-style)]">
              Nuestros valores
            </h2>

            <p className="self-stretch font-[number:var(--text-medium-normal-font-weight)] text-[16px] md:text-[length:var(--text-medium-normal-font-size)] leading-[var(--text-medium-normal-line-height)] relative font-text-medium-normal text-white tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)]">
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
                    <h4 className="mt-[-1.00px] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] relative self-stretch font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-white [font-style:var(--heading-h4-font-style)]">
                      {value.title}
                    </h4>

                    <p className="self-stretch font-[number:var(--text-regular-normal-font-weight)] text-[14px] md:text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] relative font-text-regular-normal text-white tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
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
