import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeaderSection = () => {
  // Image data for easier maintenance
  const images = [
    {
      className: "w-full md:w-[80%] lg:w-[939px] h-auto md:h-[626px] mx-auto object-contain",
      alt: "Placeholder image",
      src: "https://c.animaapp.com/md86hf3y5QgV1L/img/placeholder-image.png",
    },
    {
      className: "absolute w-[30%] md:w-[35%] lg:w-[438px] h-auto md:h-[292px] bottom-0 left-0 hidden sm:block",
      alt: "Placeholder image",
      src: "https://c.animaapp.com/md86hf3y5QgV1L/img/placeholder-image-12.svg",
    },
    {
      className: "absolute w-[30%] md:w-[35%] lg:w-[438px] h-auto md:h-[438px] bottom-0 right-0 hidden sm:block",
      alt: "Placeholder image",
      src: "https://c.animaapp.com/md86hf3y5QgV1L/img/placeholder-image-13.svg",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-28 px-4 md:px-8 lg:px-16 bg-[#0e2828] flex justify-center">
      <div className="max-w-screen-xl w-full flex flex-col items-center gap-10 md:gap-16 lg:gap-20">
        {/* Image container */}
        <div className="relative w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[750px]">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              className={`${images[0].className} rounded-lg`}
              alt={images[0].alt}
              src={images[0].src}
            />

            <img
              className={images[1].className}
              alt={images[1].alt}
              src={images[1].src}
            />

            <img
              className={images[2].className}
              alt={images[2].alt}
              src={images[2].src}
            />
          </div>
        </div>

        {/* Text content */}
        <Card className="border-none bg-transparent max-w-screen-md w-full">
          <CardContent className="p-0">
            <div className="flex flex-col items-center gap-6 md:gap-8 text-center">
              <div className="flex flex-col items-center gap-3 md:gap-4 w-full">
                <div className="inline-flex items-center">
                  <span className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[#d5ac57] text-[14px] md:text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] [font-style:var(--heading-tagline-font-style)]">
                    NUESTRO ENFOQUE
                  </span>
                </div>

                <div className="flex flex-col items-center gap-4 md:gap-6 w-full">
                  <h2 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-white text-[28px] sm:text-[36px] md:text-[44px] lg:text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                    Nuestra misión es Empoderar a empresas a innovar, escalar y
                    prosperar.
                  </h2>

                  <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-white text-[16px] md:text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)] px-2">
                    Visionamos a ser la firma de consultoría líder en LATAM por
                    su impacto transformacional
                    <br className="hidden md:block" /> y humano.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
