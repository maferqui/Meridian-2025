"use client";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { siteConfig } from "@/siteConfig";
export function Logo({
    className,
    version = 1,
    width = 150,
}) {
    const transition = {
        duration: 0.5,
        ease: "easeInOut",
    };

    return (
        <motion.img
            src={`/logo-${version}.png`}
            alt={siteConfig.companyLogoAlt}
            width={width}
            className={clsx(className, "overflow-visible")}
            initial={{ scale: 1, opacity: 1 }}
            whileHover={{
                scale: [1, 1.1, 1],
                opacity: [1, 0.75, 1],
                transition,
            }}
        />
    );
}
