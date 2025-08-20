import { cn } from "@/utils/cn";
import Image from "next/image";
import { animate, delay, motion, spring } from "framer-motion";
import { IconBrandDiscord,IconBrandDiscordFilled,IconCheck   } from '@tabler/icons-react';
import { 
  IconBulb,
  IconRosetteDiscountCheck,
  IconCoin,
  IconSparkles,
  IconUsers, 
  } from '@tabler/icons-react';
import PillsShowcase from "./rotating-pills";
import { AnimatedListDemo } from "./animated-jobs";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const svgVariants = {
    default:{rotate:0},
    svganimate: {
      rotate:360,
      transition:{
        duration:1,
      
      }
    }
  };
  const pathsvgVariants = {
    default:{opacity:0,
      pathLength:0
    },
    svganimate: {
      opacity:1,
      pathLength:1,
      transition:{
        duration:2,
        
      }
    }
  }

  const variants = {
    initial: {
      rotate: 0,
    },
    animate: {
      x: 10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      y: 0,
    },
    animate: {
      y: -10,
      transition: {
       
        duration: 0.2,
      },
    },
  };
  const basicCard = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      transition: {
       
        duration: 0.2,
      },
    },
  };
  const basicCardAbs = {
    initial: {
      y: 0,
    },
    animate: {
      y: -8,
      transition: {
       
        duration: 0.2,
      },
    },
  };

  const discrod = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      transition: {
       
        duration: 0.2,
      },
    },
  };
  const discrodb = {
    initial: {
      x: 0,
      y:0,
    },
    animate: {
      x: -20,
      y:-10,
      transition: {
        spring:0.2,
        duration: 0.2,
      },
    },
  };
  const basicCardText = {
    initial: {
      x: 0,

    },
    animate: {
      x: -10,
      transition: {
       
        duration: 0.2,
      },
    },
  };
  const variantsThird = {
    initial: {
      scale: 0.9,
    },
    animate: {
      scale: 1.1,
      transition: {
       
        duration: 0.2,
      },
    },
  };

  return (
    <div
      className={cn(
        "sml:grid md:auto-rows-[25rem]  flex flex-col ll:grid-cols-3  md:grid-cols-2 gap-4 overflow-hidden sm:mb-20 mb-20 py-5 sm:px-5 transition-all",
        className
      )}
    >
      <motion.div 
       initial="initial"
       whileHover="animate"
      className={cn(
            " relative group hover:shadow-xl border-2 transition duration-200 shadow-input dark:shadow-none row-span-1 col-span-2 group overflow-hidden flex flex-col justify-center items-center m-auto  w-full h-full min-h-[21rem] rounded-xl    dark:border-white/[0.2] bg-background  ",
            className
          )}>
            <p
        
              className=" group-hover:translate-y-[-8px] transition-all mt-3 absolute top-5 left-6 font-bold sm:text-2xl text-xl text-left">

              Problem Of The Week
              </p>
              <p
        
              className=" group-hover:translate-y-[-8px] transition-all absolute top-16 left-6 dark:text-neutral-400 sm:text-base text-sm text-neutral-600  w-[80%]">
              Ace your SQL interviews by solving a question weekly.</p>
            
              <div className="relative w-full h-full flex-1  ml:mt-30 mt-32 flex flex-row min-w-[20rem] min-h-[16rem] px-6">
                <div className="absolute top-2 shadow-lg right-10 ml:flex hidden border flex-col gap-2  rounded-xl p-3  group-hover:bg-[#0C0A09] bg-[#0C0A09]/80 z-30 text-white group-hover:rotate-0 group-hover:translate-y-[5px] translate-y-[-30px] transition-all">
                  <div className="flex flex-row gap-2 text-sm items-center">
                    <IconCheck stroke={3} className="size-[1.2rem] text-emerald-500"/>
                    <p className="font-medium">Solutions Available</p>
                  </div>
                  <div className="flex flex-row gap-2 text-sm items-center">
                    <IconCheck stroke={3} className="size-[1.2rem] text-emerald-500"/>
                    <p className="font-medium">Actual Interview Questions</p>
                  </div>
                  <div className="flex flex-row gap-2 text-sm items-center">
                    <IconCheck stroke={3} className="size-[1.2rem] text-emerald-500"/>
                    <p className="font-medium">Submission Tracking</p>
                  </div>

                </div>
               
               
                <div className="w-full h-full flex flex-col   border-t border-x rounded-t-lg min-h-[16rem] dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
                  
                  <div className="flex flex-row gap-2 py-3 px-4 dark:bg-transparent rounded-t-lg bg-stone-100">
                    <span className="bg-stone-500 size-2.5 p-1 rounded-full"></span>
                    <span className="bg-stone-500 size-2.5 p-1 rounded-full"></span>
                    <span className="bg-stone-500 size-2.5 p-1 rounded-full"></span>
                  </div>
      
                  <div className="h-full w-full px-4 text-sm dark:bg-black pt-2 group-hover:opacity-100 transition-all opacity-80 min-h-[14rem]">
                    <code className="leading-6">
                    <span className="text-orange-500">SELECT</span> <br/>        
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-500">EXTRACT</span>{"("}YEAR <span className="text-orange-500">FROM</span> job_posted_date{")"} <span className="text-orange-500">AS</span> year,<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-500">EXTRACT</span>{"("}QUARTER <span className="text-orange-500">FROM</span> job_posted_date{")"} <span className="text-orange-500">AS</span> quarter,<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-500">ROUND</span>{"("}<span className="text-orange-500">AVG</span>{"("}first_day_on_job - job_posted_date{")"},1{")"} <span className="text-orange-500">AS</span> average_time_to_hire<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-500">FROM</span> job_openings<br/>
                    </code>
                  </div>
                    
                    
                 

                </div>
              </div>




            {/** Do not delete
              <div           
            className="rounded-xl relative smL:w-[50rem] sml:w-[42rem] sm:w-[30rem] w-[27rem] sml:h-[30rem] h-[20rem]  sml:top-28 top-32 left-20 transition-all  ">
              <Image
                src="/code.jpeg"
                alt="code"
                loading="lazy"
                fill={true}
                style={{objectFit: "cover"}}
                className="absolute ml-12 rounded-lg object-left-top  transition-all;"
              />
            </div>
           */}
         
             {/** Code section 
            <div className="absolute">
            <div           
            className="rounded-xl relative  sml:w-[25rem] sm:w-[30rem] w-[27rem] sml:h-[15rem] h-[20rem]  sml:top-[4rem] top-32 left-[-18rem] transition-all  ">
              <Image
                src="/code-question.png"
                alt="code"
                loading="lazy"
                fill={true}
                style={{objectFit: "cover"}}
                className="absolute ml-12 rounded-lg object-left-top  transition-all;"
              />
            </div>
            </div>
            <div           
            className="rounded-xl relative  sml:w-[20rem] sm:w-[30rem] w-[27rem] sml:h-[10rem] h-[20rem]  sml:top-[-5rem] top-32 right-[-15rem] transition-all  ">
              <Image
                src="/code-answer.png"
                alt="code"
                loading="lazy"
                fill={true}
                style={{objectFit: "cover"}}
                className="absolute ml-12 rounded-lg object-left-top  transition-all;"
              />
            </div>
              */}
            
        </motion.div>

     
      
          
      
      {/**Newsletter section */}  
      <motion.div
      initial="initial"
      whileHover="animate"
      className={cn(
            "  row-span-2 relative group border-2 hover:shadow-xl  transition duration-200 shadow-input dark:shadow-none overflow-hidden flex  flex-col justify-center items-center  px-3   h-full min-h-[40rem] min-w-[17rem] rounded-xl   dark:border-white/[0.2] bg-background  ",
           
          )}>
            
            <p
           
               className=" group-hover:translate-y-[-8px] transition-all  mt-3 absolute top-5 left-6 font-bold sm:text-2xl  text-xl text-left">

                Newsletter 
              </p>
              <p   className=" group-hover:translate-y-[-8px] transition-all absolute top-16 left-6 dark:text-neutral-400 text-neutral-600 sm:text-base text-sm w-[80%]">Get weekly hot jobs, compensation insights and referral opportunities.</p>
      
            

              <div className="self-end mt-20 sm:h-[27rem] h-[28rem] w-full overflow-hidden">
                <AnimatedListDemo/>
              </div>
              
        </motion.div>

        {children}
      {/**Discord section */}  
      <motion.div 
       initial="initial"
       whileHover="animate"
      className={cn(
            " relative row-span-1 group hover:shadow-xl transition duration-200 shadow-input dark:shadow-none overflow-hidden flex flex-col justify-center items-center m-auto  w-full h-full min-h-[21rem] rounded-xl  border-2 dark:border-white/[0.2] bg-background  ",
            className
          )}>
            <motion.p
            variants={basicCardAbs}
              className="  mt-3 absolute top-5 left-6 font-bold sm:text-2xl  text-xl text-left">

                Community
              </motion.p>
              <motion.p variants={basicCardAbs} className="absolute top-16 left-6 sm:text-base text-sm dark:text-neutral-400 text-neutral-600  w-[80%]">
              Engage with fellow data enthusiasts in our exclusive discord community.</motion.p>
            <div className="relative mx-2">
              <motion.div
            
              >
                <IconBrandDiscordFilled className="absolute translate-y-[3rem] ll:size-[8rem] size-[7rem] z-[2] text-indigo-400"/>
              </motion.div>
              <motion.div
              variants={discrodb}
              >
                <IconBrandDiscordFilled className="self-center top-0 ll:size-[8.5rem] translate-y-[3rem] size-[7.5rem] text-indigo-700"/>
              </motion.div>
              
            </div>
            <IconBrandDiscord stroke={"1"} className="absolute self-center bottom-40 left-8 rotate-[12deg] size-[2.4rem] opacity-[30%] transition-all group-hover:opacity-[100%] text-sky-700"/>
            <IconBrandDiscord stroke={"1"} className="absolute self-center bottom-14 left-16 rotate-[-12deg] size-[3rem] opacity-[30%] transition-all group-hover:opacity-[100%] text-orange-500"/>
            <IconBrandDiscord stroke={"1"} className="absolute self-center top-10 right-6 rotate-[-20deg] size-[3rem] opacity-[40%] transition-all group-hover:opacity-[100%] text-pink-700"/>
            <IconBrandDiscord stroke={"1"} className="absolute self-center top-40 right-12 rotate-[12deg] size-[4rem] opacity-[30%] transition-all group-hover:opacity-[100%] text-indigo-700"/>
            
        </motion.div>

    

      

         
        {/**Interview Section */}  
        
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none px-4 py-8  dark:bg-background dark:border-white/[0.2] bg-white border-2  justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="group-hover/bento:translate-y-[-10%] transition duration-200">
        {icon}
        <div className="font-sans  text-neutral-600 dark:text-neutral-200 mb-0  mt-2  ">
          {title}
        </div>
        <div className="font-sans  text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
      {header}
      
    </div>
  );
};
