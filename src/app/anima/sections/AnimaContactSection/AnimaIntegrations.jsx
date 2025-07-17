"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Marquee } from "./AnimaMarquee";
import { MIcon } from "../../../../components/icons/m";
import { Lion } from "../../../../components/icons/lion";

const tiles = [
  {
    icon: <MIcon className="size-full" />,
    color: "gold",
  },
  {
    icon: <Lion className="size-full" />,
    color: "gold",
  },
  {
    icon: <MIcon className="size-full" />,
    color: "white",
  },
  {
    icon: <Lion className="size-full" />,
    color: "white",
  },
];

function shuffleArray(array) {
  let currentIndex = array.length;
  let randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.02,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

const Card = ({ icon, color, i }) => {
  return (
    <motion.div
      className={cn(
        "relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4",
        {
          "border-[#d5ac57] text-[#d5ac57]": color === "gold",
          "border-white text-white": color === "white",
        }
      )}
      custom={i}
      variants={cardVariants}
    >
      {icon}
    </motion.div>
  );
};

export default function AnimaIntegrations() {
  const [randomTiles1, setRandomTiles1] = useState([]);
  const [randomTiles2, setRandomTiles2] = useState([]);
  const [randomTiles3, setRandomTiles3] = useState([]);
  const [randomTiles4, setRandomTiles4] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRandomTiles1(shuffleArray([...tiles]));
      setRandomTiles2(shuffleArray([...tiles]));
      setRandomTiles3(shuffleArray([...tiles]));
      setRandomTiles4(shuffleArray([...tiles]));
    }
  }, []);

  const allTiles = [
    ...randomTiles1,
    ...randomTiles2,
    ...randomTiles3,
    ...randomTiles4,
    ...randomTiles1,
    ...randomTiles2,
    ...randomTiles3,
    ...randomTiles4,
  ];

  return (
    <div className="hidden md:flex items-center w-full h-full">
      <motion.div
        className="relative flex w-full flex-col items-center justify-center overflow-hidden"
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0e2828] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0e2828] to-transparent z-10" />
        <Marquee reverse className="-delay-[200ms] [--duration:20s]" repeat={10}>
          {randomTiles1.map((tile, idx) => (
            <Card {...tile} key={`1-${idx}`} i={idx} />
          ))}
        </Marquee>
        <Marquee reverse className="[--duration:25s]" repeat={10}>
          {randomTiles2.map((tile, idx) => (
            <Card {...tile} key={`2-${idx}`} i={idx} />
          ))}
        </Marquee>
        <Marquee reverse className="-delay-[200ms] [--duration:20s]" repeat={10}>
          {randomTiles3.map((tile, idx) => (
            <Card {...tile} key={`3-${idx}`} i={idx} />
          ))}
        </Marquee>
        <Marquee reverse className="[--duration:30s]" repeat={10}>
          {randomTiles4.map((tile, idx) => (
            <Card {...tile} key={`4-${idx}`} i={idx} />
          ))}
        </Marquee>
      </motion.div>
    </div>
  );
}
