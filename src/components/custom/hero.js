import Integrations from "../eldoraui/integrations";
import Section from "../ui/section";

export function Hero() {

    return <Section>
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
                            Estrategia global. Agilidad local. Propósito real.
                        </p>

                    </div>

                    <div className="relative h-64 md:h-full flex items-center justify-center">
                        <div className="absolute w-64 h-64 md:w-80 md:h-80 border-2 border-primary rounded-lg">
                        </div>
                        <div className="relative w-24 h-24 bg-base-100 border-2 border-primary rounded-lg bottom-1/12 left-1/12 animate-float-delay before:content-['M'] before:absolute before:inset-0 before:flex before:items-center before:justify-center before:text-primary before:font-bold before:text-3xl"></div>
                    </div>


                </div>
            </div>
        </div>
    </Section>
}