"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { Logo } from "../../../../components/ui/logo";

export const NavigationBarSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation menu items data
  const navItems = [
    { label: "Inicio", href: "#" },
    { label: "Sobre nosotros", href: "#" },
    { label: "Servicios", href: "#" },
    { label: "Equipo", href: "#" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center self-stretch w-full flex-[0_0_auto] bg-[#0e2828] border-b-[2px] border-t-[2px] border-[#d5ac57]">
      <header className="flex h-[72px] items-center justify-between px-6 sm:px-8 md:px-16 py-0 self-stretch w-full">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <Logo width={140} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              className="p-1 text-white hover:bg-[#ffffff22]"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center gap-6 lg:gap-12">
            {/* Navigation Menu */}
            <NavigationMenu className="max-w-none">
              <NavigationMenuList className="flex items-center gap-4 lg:gap-8">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={item.href}
                      className="font-text-regular-normal text-white" style={{ fontSize: '1rem', lineHeight: '150%' }}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Contact Button */}
            <div className="flex items-start">
              <Button className="px-5 py-2 bg-[#d5ac57] text-[#123332] rounded-md border border-solid hover:bg-[#c39d48]">
                <span className="font-text-regular-medium" style={{ fontSize: '1rem', lineHeight: '150%' }}>
                  Contacto
                </span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-[#0e2828] border-t border-[#d5ac57]/30 py-4 px-6">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="font-text-regular-normal text-white py-2" style={{ fontSize: '1rem', lineHeight: '150%' }}
              >
                {item.label}
              </a>
            ))}
            <Button className="mt-2 w-full bg-[#d5ac57] text-[#123332] rounded-md border border-solid hover:bg-[#c39d48]">
              <span className="font-text-regular-medium" style={{ fontSize: '1rem', lineHeight: '150%' }}>
                Contacto
              </span>
            </Button>
          </nav>
        </div>
      )}
    </div>
  );
};
