import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Input } from "@/components/ui/input"
import { Button } from './ui/button';
import { Variants, motion } from 'framer-motion';
import Image from 'next/image';
import { IconBrandLinkedin, IconBrandInstagram, IconMail  } from '@tabler/icons-react';
export default function AboutUs(){

    const cardVariantsA: Variants = {
        offscreen: {
            scale: 0,
            opacity:0,
            
          },
          onscreen: {
            scale:1,
            opacity:1,
            transition: {
              type: "spring",
             
              duration: 0.3,
              
            }
          }
      };
      const cardVariantsB: Variants = {
        offscreen: {
          scale: 0,
          opacity:0,
          
        },
        onscreen: {
          scale:1,
          opacity:1,
          transition: {
            type: "spring",
           
            duration: 0.3,
            delay:0.3
          }
        }
      };
    return(
        <div className='flex flex-col items-center  justify-center'>
            
            <motion.h2
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariantsA}
             className='md:text-5xl sm:text-4xl text-3xl font-semibold mb-4 text-center'> By analysts, for analysts.</motion.h2>
            

            <motion.p 
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariantsA}className="mb-10 sm:text-2xl text-lg text-center font-light"> Team behind <span className='text-orange-500 font-medium  relative'>Analyst Next Door 
            <svg width="100" height="50" className='absolute sm:top-[8px] top-[4px] right-[-30px] sm:right-[-60px] rotate-[5deg]' viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.04443 54.4523C9.22551 54.7118 11.7432 54.7142 12.5974 54.4597C16.0142 53.9506 18.4166 53.5688 19.8047 53.3142C28.4535 52.2961 33.8456 51.5961 35.9811 51.2143C38.1166 50.8325 40.4123 50.5143 42.8681 50.2597C45.3239 50.0052 47.8331 49.687 50.3957 49.3052C52.9583 48.9234 55.6811 48.5416 58.564 48.1598C61.447 47.778 64.2765 47.3961 67.0527 47.0143C69.8288 46.6325 72.7651 46.2507 75.8616 45.8689C78.9581 45.4871 81.8944 45.1053 84.6705 44.7235C87.4467 44.3416 89.9559 43.9598 92.1982 43.578C94.4405 43.1962 96.8429 42.8144 99.4055 42.4326C101.968 42.0508 104.371 41.7326 106.613 41.478C113.34 40.2053 117.611 39.4417 119.426 39.1872C127.861 38.169 132.773 37.5327 134.161 37.2781C135.549 37.0236 136.83 36.8327 138.005 36.7054C139.179 36.5781 140.194 36.4509 141.048 36.3236C141.902 36.1963 142.649 36.1327 143.29 36.1327C143.931 36.1327 144.518 36.1327 145.052 36.1327C145.586 36.1327 146.066 36.1327 146.493 36.1327C146.92 36.1327 147.134 36.1963 147.134 36.3236C147.134 36.4509 146.974 36.7054 146.654 37.0872C143.13 39.2508 140.941 40.5235 140.087 40.9053C139.233 41.2872 138.325 41.669 137.364 42.0508C136.403 42.4326 135.389 42.878 134.321 43.3871C133.253 43.8962 132.079 44.3417 130.797 44.7235C129.516 45.1053 128.395 45.4871 127.434 45.8689C126.473 46.2507 125.352 46.6325 124.071 47.0143C122.789 47.3961 121.401 47.778 119.906 48.1598C118.411 48.5416 117.184 48.9234 116.223 49.3052C115.262 49.687 114.14 50.0688 112.859 50.4506C111.578 50.8325 110.35 51.2143 109.175 51.5961C108.001 51.9779 106.933 52.2961 105.972 52.5506C105.011 52.8052 104.104 53.1233 103.249 53.5051C102.395 53.887 101.594 54.2051 100.847 54.4597C100.1 54.7142 99.9394 54.9051 100.366 55.0324C100.794 55.1597 101.434 55.2233 102.288 55.2233C103.143 55.2233 104.317 55.2233 105.812 55.2233C107.307 55.2233 109.015 55.2233 110.937 55.2233C112.859 55.2233 115.155 55.2233 117.824 55.2233C120.494 55.2233 123.056 55.2233 125.512 55.2233C127.968 55.2233 130.637 55.2869 133.52 55.4142C136.403 55.5415 139.66 55.6051 143.29 55.6051C146.92 55.6051 150.551 55.6051 154.181 55.6051C157.812 55.6051 161.495 55.6051 165.232 55.6051C168.97 55.6051 174.629 55.4142 182.21 55.0324L193.587 54.4523" stroke="#474747" strokeWidth="6.72664" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </span> </motion.p>
        <div className="flex mx-auto flex-row flex-wrap transition-all items-center justify-center gap-10 mb-10">
            
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariantsA}
                className=" h-[19rem] md:w-[27rem] sm:w-[20rem] w-[17rem]  overflow-hidden rounded-xl border-2
                flex-col flex  bg-backghround gap-6 ">
                <div className="flex flex-row justify-between w-full">
                    <div className="relative size-[7rem] rounded-full  flex flex-row justify-between ">
                        <Image 
                            src="/dp_uttkarsh.jpg" alt="Uttkarsh"
                            loading="lazy"
                            fill={true}

                            style={{objectFit: "cover", borderRadius: "50%",margin:"1.5rem 1.5rem"}} />
                        
                    </div>
                    <div className="relative rounded-full  m-[1.5rem] size-[2.5rem] align-end mt-[2rem]">
                      <Link target='_' href="https://www.linkedin.com/in/uttkarsh1495/">
                    <Image 
                            src="/linkedin-logo.png" alt="Uttkarsh"
                            loading="lazy"
                            fill={true}

                            style={{objectFit: "cover"}} />
                      </Link>
                    </div>
                </div>
                    
                <div className='w-full px-8 py-6 flex  flex-col g '>
                    <p className='sm:text-2xl text-xl font-semibold mb-4'>Uttkarsh Singh</p>
                    <p className=' md:text-base text-sm mb-1'>Analytics @GoDaddy</p>
                    <p className=' md:text-base text-sm '>Previously at Google, Amazon and Uber</p>

                </div>
            </motion.div>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariantsB}
                className=" h-[19rem] md:w-[27rem] sm:w-[20rem] w-[17rem]  overflow-hidden rounded-xl border-2
                flex-col flex  bg-backghround gap-6 ">
                <div className="flex flex-row justify-between w-full">
                    <div className="relative size-[7rem] rounded-full  flex flex-row justify-between ">
                        <Image 
                            src="/dp_mihir.png" alt="Mihir"
                            loading="lazy"
                            fill={true}

                            style={{objectFit: "cover", borderRadius: "50%",margin:"1.5rem 1.5rem"}} />
                        
                    </div>
                    <div className="relative rounded-full  m-[1.5rem] size-[2.5rem] align-end mt-[2rem]">
                      <Link target='_' href="https://www.linkedin.com/in/mihir-kawatra/">
                    <Image 
                            src="/linkedin-logo.png" alt="Uttkarsh"
                            loading="lazy"
                            fill={true}

                            style={{objectFit: "cover"}} />
                      </Link>
                    </div>

                </div>
                    
                <div className='w-full px-8 py-6 flex  flex-col g '>
                    <p className='sm:text-2xl text-xl font-semibold mb-4'>Mihir Kawatra </p>
                    <p className=' md:text-base text-sm mb-1'>Data Science @Uber</p>
                    <p className=' md:text-base text-sm '>In-house swiss army knife</p>

                </div>
            </motion.div>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariantsB}
                className=" h-[19rem] md:w-[27rem] sm:w-[20rem] w-[17rem]  overflow-hidden rounded-xl border-2
                flex-col flex  bg-backghround gap-6 ">
                <div className="flex flex-row justify-between w-full">
                    <div className="relative size-[7rem] rounded-full  flex flex-row justify-between ">
                        <Image 
                            src="/dp_mihir.png" alt="Mihir"
                            loading="lazy"
                            fill={true}

                            style={{objectFit: "cover", borderRadius: "50%",margin:"1.5rem 1.5rem"}} />
                        
                    </div>

                </div>
                    
                <div className='w-full px-8 py-6 flex  flex-col g '>
                    <p className='sm:text-2xl text-xl font-semibold mb-4'>Kshitij Singh </p>
                    <p className=' md:text-base text-sm mb-1'>Software Engineer</p>
                    <p className=' md:text-base text-sm '>Dev "Team"</p>

                </div>
            </motion.div>
        </div>
        </div>
    )
}