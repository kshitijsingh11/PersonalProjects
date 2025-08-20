"use client"
import { animate, delay, motion } from "framer-motion";
import { IconTriangleInverted, IconTriangleInvertedFilled} from '@tabler/icons-react';
import { Repeat } from "lucide-react";

export default function Offering(){
    const variants = {
      initial: {
        y: 0,
      },
      animate: {
        y: 10,
        transition: {
            repeat: Infinity, duration: 0.2 
        },
      },
    };
    return(
      
        <div
        className="flex flex-col m-auto justify-center mb-10"
        >
          <p className="block dark:text-neutral-300 text-neutral-900 pb-1  md:text-xl text-base text-center tracking-wider">Here's what to expect from Analyst Next Door</p>
          <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat:Infinity }}
           className="m-auto">
            
            <IconTriangleInvertedFilled className="h-5 w-5 dark:text-neutral-300 text-neutral-500"/>
          </motion.div>
        </div>
      
      
    );
  }