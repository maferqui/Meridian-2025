import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutUsSection = () => {
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
              <span className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[#d5ac57] text-[14px] md:text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
                SERVICIOS
              </span>
            </div>

            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] self-stretch font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-white [font-style:var(--heading-h2-font-style)]">
              Soluciones personalizadas para tu negocio
            </h2>
          </div>

          <p className="w-full lg:w-auto lg:flex-1 font-[number:var(--text-medium-normal-font-weight)] text-[16px] md:text-[length:var(--text-medium-normal-font-size)] leading-[var(--text-medium-normal-line-height)] font-text-medium-normal text-white tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)]">
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
                  <h4 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] self-stretch font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-white [font-style:var(--heading-h4-font-style)]">
                    {service.title}
                  </h4>
                  <p className="self-stretch font-[number:var(--text-regular-normal-font-weight)] text-[14px] md:text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] font-text-regular-normal text-white tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
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
                  <h4 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] self-stretch font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-white [font-style:var(--heading-h4-font-style)]">
                    {service.title}
                  </h4>
                  <p className="self-stretch font-[number:var(--text-regular-normal-font-weight)] text-[14px] md:text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] font-text-regular-normal text-white tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
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
