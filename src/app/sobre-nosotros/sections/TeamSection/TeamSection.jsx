import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TeamSection = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Julio Caisaguano",
      role: "Founder, CFO, Estrategia, Finanzas & Venture Capital",
      image:
        "https://c.animaapp.com/md86hf3y5QgV1L/img/placeholder-image-3.png",
    },
    {
      name: "Matías Guatía",
      role: "Founder, Director Legal, tributario, societario y manejo de conflictos",
      image:
        "https://c.animaapp.com/md86hf3y5QgV1L/img/placeholder-image-4.png",
    },
    {
      name: "Carlos Ruiz",
      role: "Founder, Levantamiento de procesos, Mejora Continua & Transformación Digital",
      image:
        "https://c.animaapp.com/md86hf3y5QgV1L/img/placeholder-image-5.png",
    },
    {
      name: "Emilia Baqueza",
      role: "Data Analyst, MKT, Finanzas & Administración",
      image:
        "https://c.animaapp.com/md86hf3y5QgV1L/img/placeholder-image-6.png",
    },
    {
      name: "Enrique Chiriboga",
      role: "Lider de Transformación Digital. Fullstack Developer",
      image:
        "https://c.animaapp.com/md86hf3y5QgV1L/img/placeholder-image-7.png",
    },
    {
      name: "Valentina Navarrete",
      role: "Negocios Internacionales Imports & Exports Lead",
      image:
        "https://c.animaapp.com/md86hf3y5QgV1L/img/placeholder-image-8.png",
    },
    {
      name: "Julio Guaminga",
      role: "Compliance legal, Legaltech & Asesor Politico",
      image:
        "https://c.animaapp.com/md86hf3y5QgV1L/img/placeholder-image-9.png",
    },
    {
      name: "María Fernanda Quintero",
      role: "Transformación Digital, UX/UI Designer, Developer",
      image:
        "https://c.animaapp.com/md86hf3y5QgV1L/img/placeholder-image-10.png",
    },
    {
      name: "Deerek Gaibor",
      role: "Compliance legal & Derecho Societario Excecutive",
      image:
        "https://c.animaapp.com/md86hf3y5QgV1L/img/placeholder-image-11.png",
    },
  ];

  return (
    <section id="equipo" className="flex flex-col w-full items-center gap-10 sm:gap-16 md:gap-20 px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-28 bg-[#0e2828]">
      <div className="flex flex-col max-w-screen-xl items-start gap-10 sm:gap-16 md:gap-20 w-full">
        <header className="flex flex-col max-w-screen-md items-start gap-3 sm:gap-4 w-full">
          <div className="inline-flex items-center self-stretch">
            <span className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[#d5ac57] text-[14px] md:text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] [font-style:var(--heading-tagline-font-style)]">
              DESCUBRE
            </span>
          </div>

          <div className="flex flex-col items-start sm:items-center gap-4 sm:gap-6 self-stretch w-full">
            <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] self-stretch font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-white [font-style:var(--heading-h2-font-style)]">
              Nuestro Equipo
            </h2>

            <p className="self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-white text-[16px] md:text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
              Talento joven respaldado por experiencia consolidada
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 w-full">
          {teamMembers.map((member, index) => (
            <Card
              key={`member-${index}`}
              className="bg-transparent border-none"
            >
              <CardContent className="flex flex-col items-start gap-4 sm:gap-6 p-0">
                <img
                  className="w-full h-[200px] sm:h-[280px] md:h-[340px] lg:h-[394.67px] object-cover rounded-lg"
                  alt={`${member.name} photo`}
                  src={member.image}
                />

                <div className="flex flex-col items-center gap-2 sm:gap-4 self-stretch w-full">
                  <div className="flex flex-col items-center self-stretch w-full">
                    <h3 className="self-stretch mt-[-2.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-white text-[18px] md:text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)] text-center">
                      {member.name}
                    </h3>

                    <p className="self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-white text-[14px] md:text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)] text-center">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-start gap-3.5 self-center">
                  <a
                    href="#"
                    aria-label={`LinkedIn profile of ${member.name}`}
                  >
                    <img
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      alt="LinkedIn"
                      src="https://c.animaapp.com/md86hf3y5QgV1L/img/linkedin.svg"
                    />
                  </a>
                  <a
                    href="#"
                    aria-label={`InstagramIcon profile of ${member.name}`}
                  >
                    <img
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      alt="Instagram"
                      src="https://c.animaapp.com/md86hf3y5QgV1L/img/instagram.svg"
                    />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
