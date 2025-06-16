"use client";
import { clsx } from "clsx";
import { motion } from "framer-motion";

export function Logo({ className }) {
    const transition = {
        duration: 0.5,
        ease: "easeInOut",
    };

    return (
        <motion.img
            src="/logo.svg"
            alt="Logo"
            width={150}
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
