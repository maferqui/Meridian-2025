import Image from "next/image";
import { ValueProposition } from "@/components/custom/valueProposition";
import { Navbar } from "@/components/eldoraui/header";
import { Link } from "@/components/ui/link";
import Section from "@/components/ui/section";
import { ChooseReasons } from "@/components/custom/chooseReasons";
import { WhoWeAre } from "@/components/custom/whoWeAre";
import { Packages } from "@/components/custom/packages";
import { Hero } from "@/components/custom/hero";
import { ContactForm } from "@/components/custom/contact";
import { Footer } from "@/components/custom/Footer";

export default function Home() {
  return <>
    <Navbar />
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col gap-[32px] items-center">
        <Hero />
        <ValueProposition />
        <Packages />
        <ChooseReasons />
        <ContactForm />
      </main>
      <Footer />
    </div>
  </>
}
