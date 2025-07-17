import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import ScrollAnimationWrapper from "../../../../components/custom/ScrollAnimationWrapper";

export const CallToActionSection = () => {
  return (
    <ScrollAnimationWrapper>
      <section className="flex flex-col items-center gap-10 sm:gap-16 md:gap-20 px-6 sm:px-8 md:px-16 py-16 sm:py-20 md:py-28 relative w-full bg-[#0e2828]">
        <div className="flex flex-col max-w-screen-xl items-start gap-10 sm:gap-16 md:gap-20 w-full shadow-xxlarge">
          <Card className="w-full bg-[#123332] border border-solid border-[#ffffff33] rounded-lg">
            <CardContent className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 p-6 sm:p-8 md:p-12">
              <div className="flex flex-col items-start gap-4 sm:gap-6 w-full md:flex-1">
                <h3 className="font-heading-h3 text-white" style={{ fontSize: '2.75rem', lineHeight: '120%' }}>
                  Navegación Eficiente y Clara
                </h3>

                <p className="font-text-medium-normal text-white" style={{ fontSize: '1.125rem', lineHeight: '150%' }}>
                  Mejora tu experiencia de navegación con breadcrumbs efectivos.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto mt-4 md:mt-0">
                <Button className="w-full sm:w-auto px-6 py-2.5 bg-[#d5ac57] text-[#123332] rounded-md border border-solid hover:bg-[#c09a4e]">
                  <span className="font-text-regular-medium whitespace-nowrap" style={{ fontSize: '1rem', lineHeight: '150%' }}>
                    Conoce más
                  </span>
                </Button>

                <Button
                  variant="outline"
                  className="w-full sm:w-auto px-6 py-2.5 text-white rounded-md border border-solid border-[#ffffff66] hover:bg-[#ffffff11] hover:text-white"
                >
                  <span className="font-text-regular-medium whitespace-nowrap" style={{ fontSize: '1rem', lineHeight: '150%' }}>
                    Contactar
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </ScrollAnimationWrapper>
  );
};
