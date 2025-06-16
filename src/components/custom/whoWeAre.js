import Link from "next/link"
import { CobeDraggableAuto } from "../eldoraui/cobeautodraggable"
import DynamicSquareBackground from "../eldoraui/dynamicsquare"
import Section from "../ui/section"
import Image from "next/image"

export function WhoWeAre() {

    return <Section
        title="¿Quiénes somos?"
        subtitle="Tu ventaja estratégica en LATAM"
        className="pt-12"
    >
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <div className="relative w-full h-[400px]">
                <Image
                    fill
                    className="rounded-lg object-cover"
                    src="/images/building.png"
                    alt="Meridian Consulting Partners - Sobre Nosotros"
                />
            </div>
            <div className="mt-4 md:mt-0">
                <p className="mb-6 text-secondary">Somos la primera consultora estratégica ecuatoriana diseñada para competir con gigantes globales como McKinsey, BCG o Bain, pero con la agilidad, cercanía y adaptabilidad que solo un equipo local puede ofrecer.</p>
                <p className="mb-6 text-secondary">Ayudamos a startups, scale-ups y corporativos a escalar con rentabilidad, innovación y propósito.</p>
                <Link href="#propuesta-valor" className="inline-flex items-center btn btn-primary font-medium rounded-lg px-5 py-2.5 text-center">
                    Conoce más
                </Link>
            </div>
        </div>
    </Section>
}