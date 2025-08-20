"use client";
import { cn } from "@/utils/cn";
import React from "react";
import { Inter } from "next/font/google";
import { BentoGrid, BentoGridItem } from "../ui/bento";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconPremiumRights,
  IconEye,
  IconSparkles,

} from "@tabler/icons-react";
import { FileText, CircleUserRound,Coffee } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export function BentoGridThirdDemo() {
  return (
    <BentoGrid className="max-w-9xl mx-auto md:auto-rows-[21rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <div>
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className={`${inter.className} translate-y-[-1rem] flex flex-1 w-full h-full py-[3rem] rounded-lg min-h-[6rem] md:py-[2.5rem] bg-background  flex-row space-x-2`}
    >
      <motion.div
        variants={first}
        className=" h-full w-1/3 rounded-2xl bg-white p-4 px-2 dark:bg-black dark:border-orange-300/[0.3]  border-2 border-orange-500/[0.8] flex flex-col items-center justify-center
        [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]
        "
      >
        <div className="flex flex-col gap-3 items-center">
          <FileText className=""/>
        <p className="text-center sm:text-sm text-xs">Resume<br/> Review</p>
        </div>
        
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-sky-300/[0.3] border-sky-500/[0.8] border-2 flex flex-col items-center justify-center 
      [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
        <div className="flex flex-col gap-3 items-center">
          <CircleUserRound className=""/>
        <p className="text-center sm:text-sm text-xs">Mock <br/> Interview</p>
        </div>
        
      </motion.div>
      
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-emerald-300/[0.3] border-emerald-500/[0.8] border-2  flex flex-col items-center justify-center
        [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      >
        <div className="flex flex-col gap-3 items-center">
        <Coffee className=""/>
        
        <p className="text-center sm:text-sm text-xs">Coffee <br/> Chat</p>
        </div>
        
      </motion.div>
    </motion.div>
    
    </div>

  );
};

const items = [
  {
    title: <div className={`${inter.className} flex flex-col translate-y-[-8px] px-2 `}>
      <p className="md:text-2xl text-xl text-left font-bold text-gray-900 dark:text-white  ">
      Career Guidance
      </p>
      <p className=" text-left   text-gray-900 dark:text-neutral-400 ml:text-base text-sm  ">
      Lets have a free virtual coffee chat and discuss your career prospects.
      </p>
      
      </div>,
    description:"",
    header: <SkeletonFour />
    ,
    className: "md:col-span-1 bg-background",
    icon: "",
  },
];
