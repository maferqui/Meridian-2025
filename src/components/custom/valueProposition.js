"use client";
import { useEffect, useState } from "react";
import { TextComponent } from "../eldoraui/featurefour";
import { cn } from "@/lib/utils";
import Section from "../ui/section";

const data = [
  {
    title: "Rigor Global + Agilidad Local",
    content:
      "Aplicamos metodologías probadas por las grandes firmas internacionales, adaptadas a la realidad dinámica y cambiante de Latinoamérica.",
    srcImage:
      "https://res.cloudinary.com/eldoraui/image/upload/v1734107781/Screenshot_2024-12-13_at_10.06.08_PM_molet1.png",
  },
  {
    title: "Equipo Multidisciplinario de Alto Nivel",
    content:
      "Especialistas en estrategia financiera (CFA®), transformación digital (IA, SaaS), operaciones Lean y compliance legal. Nuestra experiencia proviene de la banca de inversión, Big Four y startups de alto crecimiento.",
    srcImage:
      "https://res.cloudinary.com/eldoraui/image/upload/v1734107781/Screenshot_2024-12-13_at_10.06.08_PM_molet1.png",
  },
  {
    title: "Modelo Ágil y Accesible",
    content:
      "Ofrecemos paquetes flexibles según la etapa de crecimiento de tu empresa — desde validación inicial hasta expansión internacional.",
    srcImage:
      "https://res.cloudinary.com/eldoraui/image/upload/v1734107781/Screenshot_2024-12-13_at_10.06.08_PM_molet1.png",
  },
  {
    title: "Impacto Dual: Rentabilidad + Sostenibilidad",
    content:
      "Nos encaminamos a ser B Corp. El 2% de nuestros ingresos se destinan a consultoría pro-bono para emprendimientos de alto impacto social.",
    srcImage:
      "https://res.cloudinary.com/eldoraui/image/upload/v1734107781/Screenshot_2024-12-13_at_10.06.08_PM_molet1.png",
  },
];

export function ValueProposition() {
  const [featureOpen, setFeatureOpen] = useState(0);
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 10);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer > 10000) {
      setFeatureOpen((prev) => (prev + 1) % data.length);
      setTimer(0);
    }
  }, [timer]);

  return <Section
    subtitle="Propuesta de Valor"
    title="Nuestra"
  >
    <section>
      <div className="container">
        <div className="grid grid-cols-1 my-12 gap-4 md:grid-cols-2">
          <div className="space-y-6 ">
            {data.map((item, index) => (
              <button
                className="w-full"
                key={item.title}
                onClick={() => {
                  setFeatureOpen(index);
                  setTimer(0);
                }}
                type="button"
              >
                <TextComponent
                  content={item.content}
                  isOpen={featureOpen === index}
                  loadingWidthPercent={featureOpen === index ? timer / 100 : 0}
                  number={index + 1}
                  title={item.title}
                />
              </button>
            ))}
          </div>
          <div className="h-full">
            <div
              className={cn(
                "relative h-96 w-full overflow-hidden rounded-lg md:h-[500px]",
              )}
            >
              {data.map((item, index) => (
                <img
                  alt={item.title}
                  className={cn(
                    "absolute h-[500px] w-full transform-gpu rounded-lg object-cover transition-all duration-300",
                    featureOpen === index ? "scale-100" : "scale-70",
                    featureOpen > index ? "translate-y-full" : "",
                  )}
                  key={item.title}
                  src={item.srcImage}
                  style={{ zIndex: data.length - index }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </Section>
}
