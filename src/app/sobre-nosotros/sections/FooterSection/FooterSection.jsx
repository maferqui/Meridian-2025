"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Separator } from "../../../../components/ui/separator";
import { Logo } from "../../../../components/ui/logo";
import ScrollAnimationWrapper from "@/components/custom/ScrollAnimationWrapper";

export const FooterSection = () => {
  // Navigation links data
  const navigationLinks = [
    "Inicio Rápido",
    "Servicios Clave",
    "Contáctanos Ya",
    "Sobre Nosotros",
    "Testimonios Reales",
  ];

  // Social media icons data
  const socialIcons = [
    {
      name: "Facebook",
      src: "https://c.animaapp.com/md5ge3wdbtqe7d/img/facebook.svg",
    },
    {
      name: "Instagram",
      src: "https://c.animaapp.com/md5ge3wdbtqe7d/img/instagram.svg",
    },
    { name: "X", src: "https://c.animaapp.com/md5ge3wdbtqe7d/img/x.svg" },
    {
      name: "LinkedIn",
      src: "https://c.animaapp.com/md5ge3wdbtqe7d/img/linkedin.svg",
    },
    {
      name: "Youtube",
      src: "https://c.animaapp.com/md5ge3wdbtqe7d/img/youtube.svg",
    },
  ];

  // Footer links data
  const footerLinks = [
    { text: "Política Privacidad", isLink: true },
    { text: "Términos Servicio", isLink: true },
    { text: "Configuración Cookies", isLink: true },
  ];

  return (
    <footer className="flex flex-col items-center gap-10 sm:gap-16 md:gap-20 px-6 sm:px-8 md:px-16 py-12 sm:py-16 md:py-20 relative w-full bg-[#0e2828] border-t-2 border-[#d5ac57]">
      <div className="flex flex-col max-w-screen-xl items-start gap-10 sm:gap-16 md:gap-20 relative w-full">
        <ScrollAnimationWrapper className="flex flex-col md:flex-row items-center gap-8 relative self-stretch w-full">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start gap-6 relative w-full md:flex-1">
            <Logo version={2} />
          </div>

          {/* Navigation Links - Desktop */}
          <NavigationMenu className="hidden md:flex flex-auto">
            <NavigationMenuList className="flex flex-wrap items-start justify-center gap-4 lg:gap-8">
              {navigationLinks.map((link, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink className="font-text-small-semi-bold text-white whitespace-nowrap cursor-pointer" style={{ fontSize: '0.875rem', lineHeight: '150%' }}>
                    {link}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Navigation Links - Mobile */}
          <div className="flex md:hidden flex-wrap justify-center gap-4 my-4">
            {navigationLinks.map((link, index) => (
              <a 
                key={index}
                href="#"
                className="font-text-small-semi-bold text-white whitespace-nowrap cursor-pointer px-2" style={{ fontSize: '0.875rem', lineHeight: '150%' }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center md:justify-end gap-3 relative w-full md:flex-1">
            {socialIcons.map((icon, index) => (
              <img
                key={index}
                className="relative w-6 h-6 cursor-pointer"
                alt={icon.name}
                src={icon.src}
              />
            ))}
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="flex flex-col items-center gap-6 sm:gap-8 relative self-stretch w-full">
          {/* Divider */}
          <Separator className="w-full h-px border-[0.5px] border-[#d5ac57]" />

          {/* Copyright and Legal Links */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 relative flex-wrap justify-center sm:justify-start">
            <div className="relative w-fit font-text-small-normal text-white text-center sm:text-left" style={{ fontSize: '0.875rem', lineHeight: '150%' }}>
              © 2025 Meridian. Todos los derechos reservados.
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {footerLinks.map((link, index) => (
                <div
                  key={index}
                  className="relative w-fit font-text-small-link text-white underline whitespace-nowrap cursor-pointer" style={{ fontSize: '0.875rem', lineHeight: '150%' }}
                >
                  {link.text}
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </footer>
  );
};
