"use client";
import { motion } from "framer-motion";
import { Highlight, HeroHighlight } from "./hero";
 
export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-7xl lg:text-5xl font-bold text-neutral-700  dark:text-white max-w-4xl  text-center mx-auto "
      >
        <p className="text-7xl ">Level up your data career here. {" "}</p>
        <p className=" text-4xl pt-3">Join the best gloabl online {" "}</p>
        
        <Highlight className="text-black  dark:text-white text-4xl ">
        community of data enthusiasts.
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}