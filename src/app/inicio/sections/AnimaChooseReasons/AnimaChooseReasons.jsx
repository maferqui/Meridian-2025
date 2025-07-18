import AnimaFeatures from "./AnimaFeatures";
import { Handshake, Layers, Users, Leaf } from "lucide-react";

const data = [
  {
    id: 'item-1',
    title: "1. Red de Alto Nivel",
    content:
      "Conectamos tu negocio con una red élite de +60 líderes, VCs y aceleradoras.",
    icon: <Users />,
  },
  {
    id: 'item-2',
    title: "2. Alianzas Estratégicas",
    content:
      "Manejamos proyectos con aliados como Kruger, SWISSCHAM, START Quito y Forbes Ecuador.",
    icon: <Handshake />,
  },
  {
    id: 'item-3',
    title: "3. Compromiso Sostenible",
    content:
      "Implementamos prácticas de sostenibilidad, economía circular y estrategias climáticas.",
    icon: <Leaf />,
  },
  {
    id: 'item-4',
    title: "4. Modelo Flexible y Escalable",
    content:
      "Tenemos un modelo flexible: desde talleres hasta roadmaps de transformación digital.",
    icon: <Layers />,
  },
];

export function AnimaChooseReasons() {
  return (
    <section className="flex flex-col items-center px-6 sm:px-8 md:px-16 py-16 sm:py-20 md:py-28 w-full bg-[#0e2828]">
        <div className="container mx-auto max-w-screen-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 md:gap-20 items-center">
                {/* Left column - Title and Features */}
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                      <span className="font-heading-tagline text-[#d5ac57] font-bold" style={{ fontSize: '1rem', lineHeight: '150%' }}>
                        DESCUBRE
                      </span>
                      <div className="flex flex-col gap-4 sm:gap-6">
                        <h2 className="font-heading-h2 text-white" style={{ fontSize: '3.25rem', lineHeight: '120%' }}>
                          ¿Por qué elegirnos?
                        </h2>
                      </div>
                    </div>
                    <AnimaFeatures data={data} linePosition="left" />
                </div>

                {/* Right column - Video */}
                <div className="h-full w-full flex items-center justify-center">
                    <video
                        preload="auto"
                        src="/lion.mp4"
                        className="aspect-video h-full w-full max-h-[450px] rounded-lg object-cover"
                        autoPlay
                        loop
                        muted
                    />
                </div>
            </div>
        </div>
    </section>
  );
}
