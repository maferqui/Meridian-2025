"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import Section from "../ui/section";

// type Interval = "month" | "year";

export function toHumanPrice(price, decimals = 2) {
    return Number(price / 100).toFixed(decimals);
}
const demoPrices = [
    {
        id: "price_1",
        name: "IGNICIÓN",
        description: "Startups",
        features: [
            "Diagnóstico estratégico (1-semana)",
            "Taller de Propuesta de Valor",
            "Pitch Deck de Inversión",
            "Modelo Financiero básico para ronda Pre-Semilla/Semilla"
        ],
        monthlyPrice: 1000,
        yearlyPrice: 10000,
        isMostPopular: false,
    },
    {
        id: "price_2",
        name: "TRACCIÓN",
        description: "Scale-ups",
        features: [
            "Auditoría de Growth (canales y métricas)",
            'Diseño de "Growth Loops"',
            "Roadmap de Marketing Digital",
            "Diagnóstico de Procesos Clave (OKR setting)"
        ],
        monthlyPrice: 2000,
        yearlyPrice: 20000,
        isMostPopular: true,
    },
    {
        id: "price_5",
        name: "ESCALA",
        description:
            "Corporativos",
        features: [
            "Sprint de Estrategia Corporativa (4 semanas)",
            "Análisis de Mercado y Competencia",
            "Business Case para Nueva Iniciativa",
            "Roadmap de Implementación Tecnológica",
            "Taller de Liderazgo para el Cambio",
        ],
        monthlyPrice: 5000,
        yearlyPrice: 50000,
        isMostPopular: false,
    },
];

export function Packages() {


    return (
        <Section
            title="Paquetes"
            subtitle="Para cada Etapa"
        >
            <section>
                <div className="container">
                    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 justify-items-center gap-4 sm:grid-cols-3 my-12 sm:justify-center">
                        {demoPrices.map((price, idx) => (
                            <div
                                key={price.id}
                                className={cn(
                                    "relative flex w-full max-w-[400px] flex-col gap-8 overflow-hidden rounded-2xl border p-4 text-secondary",
                                    {
                                        "border-2 border-[var(--color-one)] dark:border-[var(--color-one)]":
                                            price.isMostPopular,
                                    },
                                )}
                            >
                                <div className="flex items-center">
                                    <div className="ml-4">
                                        <h2 className="text-primary font-semibold leading-7">
                                            {price.name}
                                        </h2>
                                        <p className="h-12 text-sm leading-5 text-secondary">
                                            {price.description}
                                        </p>
                                    </div>
                                </div>

                                {
                                    price.amount && <motion.div
                                        key={price.id}
                                        initial="initial"
                                        animate="animate"
                                        variants={{
                                            initial: {
                                                opacity: 0,
                                                y: 12,
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0,
                                            },
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            delay: 0.1 + idx * 0.05,
                                            ease: [0.21, 0.47, 0.32, 0.98],
                                        }}
                                        className="flex flex-row gap-1"
                                    >
                                        <span className="text-4xl font-bold text-secondary">
                                            $
                                            {toHumanPrice(price.amount, 0)}                                    <span className="text-xs"> /{interval}</span>
                                        </span>
                                    </motion.div>
                                }

                                <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0" />
                                {price.features && price.features.length > 0 && (
                                    <ul className="flex flex-col gap-2 font-normal">
                                        {price.features.map((feature, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-center gap-3 text-xs font-medium text-secondary"
                                            >
                                                <CircleCheck className="size-5 shrink-0 rounded-full bg-accent text-accent-content p-[2px]" />
                                                <span className="flex">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Section>
    );
}
