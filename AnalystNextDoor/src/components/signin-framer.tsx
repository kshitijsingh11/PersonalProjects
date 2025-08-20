"use client"

import { SignIn } from "@clerk/nextjs";
import {motion} from "framer-motion";
export default function SignInFramer() {

  return (
    <>
        <motion.div
        whileInView={'animate'}
        animate={{ y: [100, 0] , opacity:[0,1]}}
        transition={{ duration: 1 ,type: 'spring'}}
        viewport={{ once: true }}
        className="">
         <SignIn path="/sign-in" />
        </motion.div> 
    
    </>
  
);
}