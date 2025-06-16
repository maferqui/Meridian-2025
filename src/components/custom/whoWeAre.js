import { CobeDraggableAuto } from "../eldoraui/cobeautodraggable"
import Section from "../ui/section"

export function WhoWeAre() {

    return <Section
        title="¿Quiénes somos?"
        subtitle="Tu ventaja estratégica en LATAM"
    >
        <div>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-4">

                </div>
                <div class="w-full md:w-1/2 p-4">
                    Columna 2
                </div>
            </div>
        </div>
    </Section>
}