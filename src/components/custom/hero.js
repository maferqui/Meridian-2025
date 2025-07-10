import Integrations from "../eldoraui/integrations";
import ScratchToReveal from "../eldoraui/scratchtoreveal";
import { MIcon } from "../icons/m";
import Section from "../ui/section";

export function Hero() {

    return <Section
        backgroundImage={{
            src: "/images/quito.jpg",
            alt: "Meridian Consulting Partners - Ubicado en Quito, Ecuador",
        }}
    >
        <div className="container relative overflow-hidden">
            <div className="relative min-h-screen flex items-center justify-center ">
                <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    <div className="text-center md:text-left space-y-6 z-10">

                        <h1 className="text-4xl md:text-6xl font-bold text-secondary leading-tight">
                            <span className="bg-clip-text ">
                                Meridian
                            </span>
                            <br />
                            <span className="inline-block bg-clip-text text-primary">
                                Consulting Partners
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/90">
                            Estrategia global, Agilidad local, Propósito real
                        </p>

                    </div>

                    <div className="relative h-64 md:h-full flex items-center justify-center">
                        <ScratchToReveal
                            image="/images/square-lion.png"
                            width={250}
                            height={250}
                            minScratchPercentage={70}
                            className="flex items-center justify-center overflow-hidden rounded-full border-4 border-primary bg-base-200"
                        >
                            <MIcon size={250} />
                        </ScratchToReveal>
                    </div>


                </div>
            </div>
        </div>
    </Section>
}