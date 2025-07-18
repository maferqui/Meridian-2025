import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { ContactSection } from "./sections/ContactSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TeamSection } from "./sections/TeamSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const NosotrosDesktop = () => {
  return (
    <div className="flex flex-col w-full overflow-x-hidden" data-model-id="6:49">
      <HeaderSection />
      <MainContentSection />
      <ValueSection />
      <NavigationSection /> {/* Remplazar por valuproposition */}
      <ServicesSection />
      <AboutUsSection />
      <TeamSection />
      <TestimonialsSection />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
};