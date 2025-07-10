import { Instagram, Mail } from "lucide-react";

export const siteConfig = {
    companyName: "Meridian - Consulting Partners",
    companyLogoAlt: "Meridian Logo",
    socialNetworks: [
        {
            name: "Instagram",
            link: "https://www.instagram.com/meridian_consulting_ec/",
            icon: Instagram,
        },
    ],
    contactInfo: [
        {
            name: "meridianconsultingec@gmail.com",
            link: "mailto:meridianconsultingec@gmail.com",
            icon: Mail,
        },
    ],
    pages: [
        {
            name: "Sobre Nosotros",
            path: "#sobre-nosotros"
        },
        {
            name: "Paquetes",
            path: "#paquetes",
        },
        {
            name: "Contáctanos",
        }
    ]
}
