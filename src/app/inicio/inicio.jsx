import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { AnimaContactSection } from "./sections/AnimaContactSection/AnimaContactSection";
import { AnimaChooseReasons } from "./sections/AnimaChooseReasons/AnimaChooseReasons";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavigationBarSection } from "./sections/NavigationBarSection/NavigationBarSection";
import { PricingPlansSection } from "./sections/PricingPlansSection/PricingPlansSection";
import { ValuePropositionSection } from "./sections/ValuePropositionSection/ValuePropositionSection";

export const Inicio = () => {
  return (
    <div className="flex flex-col w-full" data-model-id="1:308">
      <NavigationBarSection />
      <div className="pt-[72px]">
        <HeaderSection />
      </div>
      <MainContentSection />
      <ValuePropositionSection />
      <PricingPlansSection />
      <AnimaChooseReasons />
      <CallToActionSection />
      <AnimaContactSection />
      <FooterSection />
    </div>
  );
};

