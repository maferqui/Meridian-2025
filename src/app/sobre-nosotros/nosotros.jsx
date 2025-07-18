import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NavigationBarSection } from "./sections/NavigationBarSection/NavigationBarSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TeamSection } from "./sections/TeamSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { ValueSection } from "./sections/ValueSection/ValueSection";

export const Nosotros = () => {
  return (
    <div className="flex flex-col w-full" data-model-id="6:49">
      <NavigationBarSection activePage="sobre-nosotros" />
      <div className="pt-[-72px]">
        <HeaderSection />
      </div>
      <MainContentSection />
      <ValueSection />
      <ServicesSection />
      <AboutUsSection />
      <TeamSection />
      <TestimonialsSection />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
};