"use client"
import Link from 'next/link';
import {
    motion,
    useTransform,
    AnimatePresence,
    useMotionValue,
    useSpring,
    delay,
  } from "framer-motion";
import { usePathname } from 'next/navigation';
import { Input } from "@/components/ui/input"
import { Button } from './button';
import { AnimatedTooltipPeople } from './people';
import { IconCoffee, IconChecklist, IconPhoneCall   } from '@tabler/icons-react';
export default function ExtraOffer(){
    const border = {
        initial: {
          height: 0,
          opacity:0,
        },
        animate: {
          height: "100%",
          opacity:1,
          transition: {
           
            duration: 0.5,
          },
        },
      };
      const bordertwo = {
        initial: {
          height: 0,
          opacity:0,
        },
        animate: {
          height: "100%",
          opacity:1,
          transition: {
           
            duration: 0.5,
            delay:0.5,
          },
        },
      };
      const borderthree = {
        initial: {
          height: 0,
          opacity:0,
        },
        animate: {
          height: "100%",
          opacity:1,
          transition: {
           
            duration: 0.5,
            delay:1,
          },
        },
      };

    return(
    <div  id='services' className='mt-24 sm:max-w-[70%] sm:w-[100%] w-[100%] m-auto mb-10'>
        <div className="m-auto flex flex-row justify-center mb-12">
        <h1 className="w-fit  from-pink-400 via-violet-400 to-indigo-400 bg-gradient-to-l bg-clip-text text-transparent align-center font-extrabold text-xl text-left font-extrabold lg:text-4xl mb-5 text-center  ">Looking For Something Else?</h1>

        </div>
        <div className="mb-10 flex flex-col gap-12 m-automt-10 ">
            
            <div className="flex flex-row min-h-[14rem] w-full">
                <div className="flex flex-row justify-between">

                
                    <motion.div
                    initial="initial"
                    whileInView="animate"
                    variants={border}
                    className="h-full w-2 bg-gradient-to-b from-cyan-400 via-emerald-400 to-sky-400 mr-10 ">
                    </motion.div>
                    <div className="flex flex-col gap-5 justify-center">
                        <h1 className="interview  align-center font-extrabold text-xl text-left font-extrabold lg:text-3xl text-neutral-200"
                            >Coffee Chat
                        </h1>
                        <p className='sm:max-w-[76%] text-neutral-400 md:text-lg text-base'> Stuck in your career path? 
                        Lets chat! I'm offering virtual coffee chats to help you navigate the world of ~your industry~.
                        We can discuss career goals, interview tips, or anything else on your mind.
                        </p>
                        <Link href="https://topmate.io/uttkarsh/88342" target="_blank"><Button  className='max-w-28'>Book Now!</Button></Link>

                    </div>
                    
                </div>
                <IconCoffee stroke={2} className='h-40 w-40 mr-10 pb-10 hidden sml:flex self-center rotate-[25deg] ' />

            </div>

            <div className="flex flex-row  min-h-[14rem] w-full align-end  ">

                <IconChecklist stroke={2} className='h-48 w-48 ml-10 hidden sml:flex pb-10 self-center rotate-[-25deg] ' />
                <div className="flex flex-row justify-between">

                    <div className="flex flex-col gap-5 justify-center ">
                        <h1 className="interview self-end  font-extrabold text-xl text-left font-extrabold lg:text-3xl text-neutral-200 "
                            >Resume Review
                        </h1>
                        <p className='sm:max-w-[76%] text-neutral-400 md:text-lg text-base text-right self-end '>Stuck in your career path?  Lets chat! I'm offering virtual coffee chats to help you navigate the world of ~your industry~. We can discuss career goals, interview tips, or anything else on your mind.</p>
                        <Link href="https://topmate.io/uttkarsh/11343" target="_blank" className='self-end'><Button  className='max-w-28'>Book Now!</Button></Link>
                    </div>
                    
                    <motion.div
                    initial="initial"
                    whileInView="animate"
                    variants={bordertwo}
                    className="h-full w-2 bg-gradient-to-b from-pink-400  via-violet-400 to-indigo-400 py-2 ml-10 ">

                    </motion.div>
               
                </div>

            </div>

            <div className="flex flex-row  min-h-[14rem] w-full  ">
                <div className="flex flex-row justify-between">

                
                    <motion.div
                    initial="initial"
                    whileInView="animate"
                    variants={borderthree} className="h-full w-2 bg-gradient-to-b from-cyan-400 via-emerald-400 to-sky-400 mr-10 py-2">
                    </motion.div>
                        <div className="flex flex-col gap-5 justify-center ">
                          <h1 className="interview flex flex-row align-center font-extrabold text-xl text-left font-extrabold lg:text-3xl text-neutral-200"
                              >Mock Interviews
                          </h1>
                          <p className='sm:max-w-[76%] text-neutral-400 md:text-lg text-base'> Stuck in your career path? 
                          Lets chat! I'm offering virtual coffee chats to help you navigate the world of ~your industry~.
                          We can discuss career goals, interview tips, or anything else on your mind.
                          </p>
                          <Link href="https://topmate.io/uttkarsh/11344" target="_blank" className=''><Button  className='max-w-28 '>Book Now!</Button></Link>

                        </div>

                    </div>
                    <IconPhoneCall   stroke={2} className='h-40 hidden sml:flex w-40 mr-10 pb-10 self-center' />
            </div>

        </div>
       
    </div>
    )
}