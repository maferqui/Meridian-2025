import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection = () => {
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
                <span className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[#d5ac57] text-[14px] md:text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
                  {aboutUsContent.tagline}
                </span>
              </div>

              <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-white [font-style:var(--heading-h2-font-style)]">
                {aboutUsContent.heading}
              </h2>
            </div>

            <div className="flex flex-col gap-6 sm:gap-8 w-full lg:w-auto lg:flex-1">
              <div className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-white text-[16px] md:text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
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
