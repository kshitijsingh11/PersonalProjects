
"use client"
import { BentoGridThirdDemo } from "@/components/ui/bento-box";
import Offering from "@/components/ui/offer";
import { Variants, animate, delay, motion } from "framer-motion";
import { AnimatedTooltipPeople } from "@/components/ui/people";
import { IconBrandDiscordFilled } from "@tabler/icons-react";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import BeehiivSignup from "@/components/beehiiv-signup";
import AboutUs from "@/components/aboutus";
import DotPattern from "@/components/ui/dot-patter";
import Link from "next/link";

export default function Home() {
  const fadeIn: Variants = {
    offscreen: {
      y:-20,
      opacity:0,
 
  
    },
    onscreen: {
     y:0,
     opacity:1,
      
      transition: {
        type:"easeInOut",
        duration:0.5,  
      }
      
    }
  };
  const fadeInTwo: Variants = {
    offscreen: {
      y:-30,
      opacity:0,

  
    },
    onscreen: {
     y:0,
     opacity:1,
      
      transition: {
        type:"easeInOut",
        duration:0.5, 
        delay:0.4, 
      }
      
    }
  };
  const fadeInThree: Variants = {
    offscreen: {
      y:20,
      opacity:0,

  
    },
    onscreen: {
     y:0,
     opacity:1,
      
      transition: {
        type:"easeInOut",
        duration:0.5, 
        
      }
      
    }
  };


  return (
    <div className="">
        
        <GridPattern
        width={24}
        height={24}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:radial-gradient(900px_circle_at_top,white,transparent)]",
        )}
      />
      <div className="flex flex-col transition-all justify-center cover">
        {/*Pill*/}
        <motion.div 
          initial="offscreen"
          whileInView={"onscreen"}
          viewport={{ once: true }}
          variants={fadeInThree}
          className="mt-[6rem] font-medium z-40 cursor-pointer self-center  py-2 ease-in-out duration-300 px-5 rounded-3xl
           dark:bg-neutral-800 bg-white border border-neutral-400 dark:border-neutral-700  mb-2
           dark:hover:bg-neutral-100 shadow-[0_5px_20px_rgba(255,_108,_26,_0.5)] dark:hover:text-black hover:bg-neutral-800 hover:text-white
           ">
            <div className="flex flex-row items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.45003 123.27C9.72003 125.73 19.07 121.44 26.45 118C31.98 115.43 54.11 106.35 65.11 101.64C68.08 100.37 72.4 98.71 75.51 94.62C78.27 90.98 85.59 75.52 70.85 59.86C55.89 43.96 40.48 48.35 34.72 52.43C31.33 54.83 28.57 60.24 27.33 62.99C22.09 74.61 14.62 95.9 11.58 104.27C9.35003 110.44 5.20003 120.83 7.45003 123.27Z" fill="#FFC107"/>
                <path d="M25.8501 66.49C25.9901 68.23 26.3401 71.06 27.5401 76.51C28.3601 80.25 29.7001 84.17 30.7901 86.76C34.0601 94.55 38.6501 97.69 43.3001 100.21C51.2001 104.49 56.5701 105.29 56.5701 105.29L50.1301 107.92C50.1301 107.92 46.2301 107.11 40.9101 104.49C35.8401 101.99 30.5601 97.76 26.7001 89.48C25.0301 85.89 24.0601 82.41 23.5001 79.65C22.8101 76.23 22.7001 74.29 22.7001 74.29L25.8501 66.49Z" fill="#FF8F00"/>
                <path d="M17.9401 86.77C17.9401 86.77 18.7401 93.26 24.1001 101.45C30.3801 111.03 39.1501 112.6 39.1501 112.6L33.3201 115C33.3201 115 26.8101 113.01 20.6201 104.56C16.7601 99.29 15.6801 92.99 15.6801 92.99L17.9401 86.77Z" fill="#FF8F00"/>
                <path d="M12.39 102.15C12.39 102.15 13.85 107.75 17.05 111.93C20.86 116.92 25.71 118.37 25.71 118.37L21.24 120.35C21.24 120.35 17.85 119.64 14.14 114.94C11.32 111.37 10.52 107.27 10.52 107.27L12.39 102.15Z" fill="#FF8F00"/>
                <path opacity="0.44" d="M9.96005 116.37C9.76005 115.92 9.76005 115.41 9.97005 114.97L35.4401 62.15L39.6301 77.9L12.8301 116.61C12.1101 117.69 10.4901 117.55 9.96005 116.37Z" fill="#FFFDE7"/>
                <path d="M41.65 83.19C53.55 97.11 67.1 95.37 71.61 91.85C76.13 88.32 79.7 76.19 67.85 62.5C55.43 48.16 41.37 52.25 38.12 55.35C34.87 58.45 30.73 70.42 41.65 83.19Z" fill="url(#paint0_linear_43_13)"/>
                <path d="M82.5199 88.92C78.1799 85.28 75.8699 85.93 72.7699 87.22C68.7699 88.88 62.4799 90.11 53.9399 87.22L56.5099 81.03C61.5799 82.74 65.2499 81.91 68.4199 80.04C72.4999 77.64 78.0799 74.35 86.7599 81.64C90.3799 84.68 94.0899 86.7 96.8099 85.78C98.7899 85.12 99.8399 82.17 100.37 79.82C100.42 79.61 100.5 79.01 100.56 78.48C101.04 74.81 101.84 66.89 107.74 62.84C114.05 58.51 120.68 58.51 120.68 58.51L121.88 70.43C118.83 69.98 116.71 70.6 114.92 71.59C108.18 75.34 114.05 89.74 103.56 94.58C93.4699 99.27 85.2199 91.18 82.5199 88.92Z" fill="#03A9F4"/>
                <path d="M45.4 73.72L41.06 69.83C49.03 60.93 46.93 54.39 45.4 49.63C45.09 48.67 44.8 47.76 44.61 46.89C43.93 43.81 43.79 41.13 44 38.79C40.94 34.98 39.59 30.99 39.5 30.72C37.64 25.09 39.04 19.6 42.25 14.45C48.74 4 60.49 4 60.49 4L64.41 14.49C61.43 14.37 51.66 14.52 48.66 19.25C44.87 25.21 47.36 28.89 47.54 29.31C48.27 28.36 49.01 27.6 49.67 27.01C54.46 22.76 58.62 22.15 61.27 22.39C64.25 22.66 66.95 24.16 68.88 26.62C70.99 29.32 71.86 32.83 71.19 36.02C70.54 39.13 68.47 41.76 65.36 43.43C59.93 46.35 55.41 45.95 52.38 44.94C52.4 45.01 52.41 45.09 52.43 45.16C52.54 45.66 52.76 46.36 53.02 47.17C54.79 52.65 58.08 61.35 45.4 73.72ZM52.75 36.19C53.33 36.61 53.94 36.96 54.57 37.21C56.67 38.05 58.96 37.77 61.56 36.37C63.09 35.55 63.27 34.67 63.33 34.38C63.51 33.51 63.21 32.4 62.56 31.57C61.99 30.84 61.33 30.46 60.54 30.38C59.04 30.25 57.01 31.2 54.98 33.01C54.01 33.88 53.27 34.95 52.75 36.19Z" fill="#F44336"/>
                <path d="M62.7701 75.35L56.5601 75.18C56.5601 75.18 59.5101 58.52 69.0601 55.72C70.8501 55.2 72.8101 54.67 74.7801 54.38C75.9501 54.2 77.8001 53.93 78.7101 53.59C78.9201 52.02 78.2601 50.02 77.5201 47.75C76.9401 45.99 76.3401 44.18 76.0201 42.2C75.4001 38.34 76.4301 34.93 78.9201 32.58C81.9601 29.73 86.8701 28.82 92.4101 30.08C95.5701 30.8 97.9001 32.35 99.9501 33.71C102.88 35.66 104.59 36.65 108.17 34.24C112.5 31.32 106.84 19.89 103.83 13.29L115.06 8.60999C116.57 11.91 123.86 28.89 119.05 38.58C117.43 41.84 114.64 44 110.98 44.81C103.02 46.59 98.3601 43.49 94.9601 41.23C93.3501 40.16 91.9401 39.32 90.4101 38.88C79.7801 35.85 94.6201 51.49 87.6701 58.52C83.5001 62.73 73.3101 63.84 72.6501 64C66.0901 65.58 62.7701 75.35 62.7701 75.35Z" fill="#F48FB1"/>
                <path d="M43.99 38.79C43.8 40.99 43.71 42.3 44.28 45.16C47.03 47.18 53.02 47.18 53.02 47.18C52.76 46.37 52.53 45.67 52.43 45.17C52.41 45.1 52.4 45.02 52.38 44.95C46.29 41.91 43.99 38.79 43.99 38.79Z" fill="#C92B27"/>
                <path d="M31.5299 48.64L21.1899 43.57L26.3399 36.13L34.4499 41.5L31.5299 48.64Z" fill="#FFC107"/>
                <path d="M16.29 34.6C11.01 33.89 5.63004 29.41 5.04004 28.9L10.23 22.81C11.8 24.14 15.13 26.37 17.36 26.67L16.29 34.6Z" fill="#FB8C00"/>
                <path d="M25.61 21.27L18.01 18.78C18.88 16.12 19.11 13.25 18.66 10.48L26.56 9.21002C27.21 13.23 26.88 17.4 25.61 21.27Z" fill="#03A9F4"/>
                <path d="M73.073 15.3249L80.8882 13.6153L83.1449 23.9314L75.3297 25.641L73.073 15.3249Z" fill="#FB8C00"/>
                <path d="M92.46 17.77L86.96 11.96C89.84 9.23 90.5 5.66 90.5 5.62L98.4 6.91C98.3 7.54 97.29 13.2 92.46 17.77Z" fill="#FFC107"/>
                <path d="M95.5162 48.5813L102.503 46.3977L104.89 54.0337L97.9026 56.2173L95.5162 48.5813Z" fill="#FB8C00"/>
                <path d="M97.55 113.03L89.6 112.09C89.94 109.26 87.83 105.79 87.25 105.02L93.65 100.22C94.13 100.85 98.3 106.62 97.55 113.03Z" fill="#F44336"/>
                <path d="M120.37 102.89C117.38 102.44 114.32 102.26 111.3 102.37L111.03 94.37C114.54 94.25 118.09 94.45 121.56 94.98L120.37 102.89Z" fill="#FB8C00"/>
                <path d="M109.614 113.902L115.235 108.209L122.97 115.846L117.349 121.539L109.614 113.902Z" fill="#F48FB1"/>
                <path d="M93.099 63.3312L98.8789 69.9399L92.2702 75.7198L86.4903 69.111L93.099 63.3312Z" fill="#F44336"/>
                <defs>
                <linearGradient id="paint0_linear_43_13" x1="74.3843" y1="61.8385" x2="44.617" y2="79.6989" gradientUnits="userSpaceOnUse">
                <stop offset="0.0235" stopColor="#8F4700"/>
                <stop offset="1" stopColor="#703E2D"/>
                </linearGradient>
                </defs>
              </svg>
              <Link href="/question/potw">
              <p className="text-sm"> Problem Of The Week</p>
              </Link>
            </div>
          </motion.div>

        {/*Main Title*/}
        <motion.div
          initial="offscreen" 
          whileInView={"onscreen"}
          viewport={{ once: true }}
          className="transition-all flex flex-col max-w-6xl w-full text-center self-center mb-5 mt-4">

          <motion.p
          variants={fadeIn}
           className="sml:text-8xl sm:text-7xl text-5xl  font-bold pb-3 self-center z-10" >
          Level up your<br/> <span className="from-orange-500 via-amber-400 to-orange-500 bg-gradient-to-r bg-clip-text text-transparent">
          data career </span></motion.p>
          <motion.p
          variants={fadeInTwo} className="sml:text-2xl sm:text-lg text-base text-neutral-600 dark:text-neutral-300 self-center font-base mt-5 mb-5 tracking-wide max-w-5xl ">Become a better analyst, practice interview questions, meet other professionals, find new opportunities, and level up your skills. 
          </motion.p>


        </motion.div>

        {/*Buttons*/}
        <div className="flex flex-row justify-center flex-wrap gap-10 self-center mb-10">
        

        <a href="/sign-up" className="relative inline-flex items-center justify-start pl-10 py-3 overflow-hidden font-medium min-w-[14.1rem] 
        transition-all bg-orange-500 rounded-xl group">
        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out
         bg-orange-700 rounded group-hover:-mr-4 group-hover:-mt-4"> 
         <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white">
          </span> </span> 
           <span className="relative w-full text-left sm:text-base text-sm
       text-white transition-colors duration-200 ease-in-out group-hover:text-white sm:pl-7 pl-8">Join For Free</span>
        </a> 

      
        <Link href="https://discord.gg/PEXXFpcN9P">
        <button className=" py-[0.5rem] bg-netural-700 font-medium sm:text-base text-sm min-w-[14.1rem] min-h-[3rem]
          dark:bg-background shadow-[0_3px_10px_rgb(0,0,0,0.2)] dark:text-white text-black outline outline-[2px] dark:outline-neutral-700
          outline-neutral-200 flex flex-row gap-2 items-center justify-center rounded-xl px-5
          dark:hover:text-black hover:bg-neutral-800 hover:text-white dark:hover:bg-neutral-100 
          ease-in-out duration-300 bg-background z-10">
          Join the Community <IconBrandDiscordFilled size={24}/>
        </button>
        </Link>
        
        </div>
        
        
        <div className="sm:flex sm:flex-row hidden sm:items-center justify-center gap-8 mb-24">
          <AnimatedTooltipPeople />
          <p className=' self-center font-light text-lg dark:text-neutral-300 text-neutral-700  '><b className='font-semibold '>Join 500+ data professionals</b>, in this journey together.</p>
          </div>
        <Offering />
        <div className="">
        <BentoGridThirdDemo/>
        </div>


       {/**About us*/}
        
        <AboutUs/>

         {/**Subscribe to newsletter*/}
       <div className="relative flex flex-row flex-wrap justify-center items-center p-5 py-10 border-[3px]  mb-20 mt-28 rounded-xl bg-background">
          <DotPattern
            className={cn(
              "[mask-image:linear-gradient(to_top_right,white,transparent,white)]",
            )}
          />
            <div className="flex flex-col gap-3 mx-auto">
              <h2 className="md:text-5xl sm:text-4xl text-3xl font-medium text-center">Subscribe to <span className="font-extrabold">and <span className="text-orange-500">_</span></span> newsletter</h2>
              <div className="flex flex-row flex-wrap items-center justify-center gap-8 mb-2">
              <p className=' self-center  md:text-xl sm:text-lg text-base dark:text-neutral-300 text-neutral-700 sm:text-left text-center '>Join 500+ data professionals, every Tuesday.</p>
              </div>
              <div className="mx-auto mt-4">
                <BeehiivSignup/>
              </div>
              
            </div>

            <div className="">
            



            </div>

            
            
        </div>
      </div>
  
    </div>
  );
}
