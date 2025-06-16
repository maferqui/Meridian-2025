import Features from "../eldoraui/features";
import Section from "../ui/section";
import { Handshake, Layers, Eye, Users, Leaf, } from "lucide-react";

const data = [
  {
    id: 1,
    title: "1. Red de Alto Nivel",
    content:
      "Conectamos tu negocio con una red élite de +60 líderes, VCs y aceleradoras.",
    icon: <Users className="size-6 text-primary" />,
  },
  {
    id: 2,
    title: "2. Alianzas Estratégicas",
    content:
      "Manejamos proyectos con aliados como Kruger, SWISSCHAM, START Quito y Forbes Ecuador.",
    icon: <Handshake className="size-6 text-primary" />,
  },
  {
    id: 3,
    title: "3. Compromiso Sostenible",
    content:
      "Implementamos prácticas de sostenibilidad, economía circular y estrategias climáticas.",
    icon: <Leaf className="size-6 text-primary" />,
  },
  {
    id: 4,
    title: "4. Modelo Flexible y Escalable",
    content:
      "Tenemos un modelo flexible: desde talleres hasta roadmaps de transformación digital.",
    icon: <Layers className="size-6 text-primary" />,
  },
];

export function ChooseReasons() {
  return (
    <Section
      title="Descubre por qué las empresas eligen a"
      subtitle="Meridian - Consulting Partners"
    >
      <Features
        data={data}
        video="lion.mp4"
      />
    </Section>
  );
}
