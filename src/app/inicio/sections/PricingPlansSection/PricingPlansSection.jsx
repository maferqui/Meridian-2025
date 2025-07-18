"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScrollAnimationWrapper from "@/components/custom/ScrollAnimationWrapper";

// Estilos en línea para la tipografía
const styles = {
  heading1: {
    fontFamily: '"Libre Baskerville", serif',
    fontSize: '3.5rem',
    lineHeight: '110%',
    color: '#D5AC57',
    fontWeight: 400,
    letterSpacing: '-0.02em'
  },
  heading2: {
    fontFamily: '"Libre Baskerville", serif',
    fontSize: '2.5rem',
    lineHeight: '120%',
    color: '#FFFFFF',
    fontWeight: 400,
    letterSpacing: '-0.02em',
    marginBottom: '1rem'
  },
  price: {
    fontFamily: '"Libre Baskerville", serif',
    fontSize: '3.5rem',
    lineHeight: '100%',
    color: '#D5AC57',
    fontWeight: 400,
    letterSpacing: '-0.02em'
  },
  period: {
    fontFamily: '"Manrope", sans-serif',
    fontSize: '1rem',
    lineHeight: '150%',
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: 400
  },
  featureText: {
    fontFamily: '"Manrope", sans-serif',
    fontSize: '1rem',
    lineHeight: '150%',
    color: '#FFFFFF',
    fontWeight: 400
  },
  description: {
    fontFamily: '"Manrope", sans-serif',
    fontSize: '1.125rem',
    lineHeight: '150%',
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: 400
  }
};

const plans = [
  {
    name: "Básico",
    price: "$499",
    period: "por mes",
    description: "Perfecto para emprendedores que están comenzando.",
    features: [
      "Estrategia básica de crecimiento",
      "Soporte por correo electrónico",
      "2 reuniones mensuales",
      "Informe mensual de progreso",
    ],
    buttonText: "Comenzar",
    popular: false,
  },
  {
    name: "Profesional",
    price: "$1,499",
    period: "por mes",
    description: "Ideal para negocios en crecimiento.",
    features: [
      "Estrategia avanzada",
      "Soporte prioritario",
      "4 reuniones mensuales",
      "Análisis de competencia",
      "Informe detallado",
    ],
    buttonText: "Prueba gratuita",
    popular: true,
  },
  {
    name: "Empresarial",
    price: "$3,999",
    period: "por mes",
    description: "Solución completa para empresas.",
    features: [
      "Consultoría personalizada",
      "Soporte 24/7",
      "Reuniones ilimitadas",
      "Entrenamiento para equipos",
      "Implementación prioritaria",
    ],
    buttonText: "Contactar ventas",
    popular: false,
  },
];

export const PricingPlansSection = () => {
  return (
    <section className="bg-[#0e2828] py-16 sm:py-20 md:py-28 px-6 sm:px-8 md:px-16 w-full">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6">
          <ScrollAnimationWrapper>
            <span 
              className="text-[#d5ac57] font-bold text-center uppercase tracking-widest" 
              style={{ 
                fontFamily: '"Manrope", sans-serif',
                fontSize: '0.875rem',
                lineHeight: '150%',
                letterSpacing: '0.1em'
              }}
            >
              Precios transparentes
            </span>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper delay={0.2}>
            <h1 style={styles.heading1} className="text-center">
              Planes a tu medida
            </h1>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper delay={0.3}>
            <p 
              className="text-center max-w-2xl" 
              style={styles.description}
            >
              Elige el plan que mejor se adapte a las necesidades de tu negocio. Sin sorpresas, sin contratos a largo plazo.
            </p>
          </ScrollAnimationWrapper>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <ScrollAnimationWrapper key={plan.name} delay={0.1 * (index + 1)}>
              <Card 
                className={`h-full flex flex-col transition-all duration-300 hover:shadow-lg ${
                  plan.popular 
                    ? 'border-2 border-[#d5ac57] transform -translate-y-2' 
                    : 'border border-[#ffffff33]'
                }`}
              >
                <CardContent className="p-8 flex flex-col h-full">
                  {plan.popular && (
                    <div className="bg-[#d5ac57] text-[#123332] text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">
                      MÁS POPULAR
                    </div>
                  )}
                  
                  <h3 
                    className="mb-4" 
                    style={{
                      ...styles.heading2,
                      fontSize: '1.5rem',
                      textAlign: 'left',
                      marginBottom: '0.5rem'
                    }}
                  >
                    {plan.name}
                  </h3>
                  
                  <div className="flex items-baseline gap-2 mb-6">
                    <span style={styles.price}>
                      {plan.price}
                    </span>
                    <span style={styles.period}>
                      {plan.period}
                    </span>
                  </div>
                  
                  <p 
                    className="mb-8" 
                    style={{
                      ...styles.featureText,
                      color: 'rgba(255, 255, 255, 0.8)'
                    }}
                  >
                    {plan.description}
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg 
                          className="w-5 h-5 text-[#d5ac57] mt-0.5 flex-shrink-0" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                        <span style={styles.featureText}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto pt-4">
                    <Button
                      variant={plan.popular ? 'default' : 'outline'}
                      className={`w-full mt-auto font-manrope font-bold text-base leading-[150%] py-2.5 px-6 rounded-md overflow-hidden transition-all duration-300 ${
                        plan.popular 
                          ? 'bg-[#d5ac57] text-[#123332] hover:bg-[#c39d48]' 
                          : 'border border-solid border-white/40 bg-transparent text-white hover:bg-white/10 hover:border-white/60'
                      }`}
                    >
                      <span 
                        className="relative w-fit font-text-regular-medium whitespace-nowrap"
                        style={{ fontSize: "1rem", lineHeight: "150%" }}
                      >
                        {plan.buttonText}
                      </span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};