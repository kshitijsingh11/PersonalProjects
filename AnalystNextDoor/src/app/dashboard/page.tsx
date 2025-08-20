import { FileText, CircleUserRound,LandPlot,Eye } from "lucide-react";
import { IconBrandDiscordFilled  } from '@tabler/icons-react';
import { Suspense } from "react";
import Loading from "./loading";
import Link from "next/link";
import DashIntro from "@/components/dash-intro";
import { Skeleton } from "@/components/ui/skeleton"
import LiveCounter from "@/components/ui/live-counter";
import { Button } from "@/components/ui/button";
import BeehiivCheck from "@/components/beehiiv-check";
import CompletedCheck from "@/components/completed-check";
import { getPOTWCheck } from "@/utils/user_db";
import { auth, currentUser } from "@clerk/nextjs/server"
import { IconCheck } from "@tabler/icons-react";

async function CounterAndCheck(){
    "use server"
    const { userId } = auth();
    const userid = userId as string;
    const checkResult = await getPOTWCheck(userid);
       
    
    const data = checkResult
    if (data.length === 0) {
      return <LiveCounter countdownName="Question"/>
    }
    
  return (
    <div className="flex flex-row justify-between">
        
    <LiveCounter countdownName="Question"/>
    <div className="p-0.5 rounded-full border-2 border-emerald-500 mb-1">
        <IconCheck size={20} className=""/>
    </div>
    
    </div>
  )
}
export default function Dashboard() {
  
  return (<>

    
  <div className="flex-1 min-h-[78.2dvh] h-full px-10 max-w-[60rem] mx-auto mt-10 mb-12 flex flex-col gap-[1.5rem]">
    <div className="flex flex-row gap-2 items-center transition-all">
    <Suspense fallback={<span className=" ml-6 my-2 loading loading-dots loading-xs"></span>}>
    <DashIntro />
    </Suspense>
   
   
    
    </div>

    
    <p className="text-2xl mt-[1rem] font-bold flex flex-row gap-2 items-center">Practice and Learn 
   

    
    </p>
    <div className="flex flex-row flex-wrap md:flex-nowrap gap-10 justify-between w-full rounded-lg">
        <Link href="/question/potw" className="w-full hover:shadow-[0_10px_20px_rgba(36,_143,_237,_0.7)] hover:translate-y-[-10px] transition-all rounded-xl">
        <div className="bg-gradient-to-tl text-white from-blue-600 to-cyan-400  w-full md:h-[12rem] h-[13rem] rounded-xl justify-between flex flex-col gap-1 py-5 ">
            <div className="text-green-400 bg-black/30 pt-1 font-semibold w-full items-center  text-sm self-start px-5">
            <Suspense fallback={<LiveCounter countdownName="Question"/>}>
            <CounterAndCheck/>   
            </Suspense></div>
            
            <div className="flex flex-col gap-1 px-5">
            <p className="font-semibold tracking-wider text-lg ">Problem of the week</p>
            <p className="text-sm ">Get into the habit of solving questions. Start by solving an actual interview question every week.</p>
            </div>
        </div>
        </Link>
      

     
      <Link href={`/study-plan`} className="w-full hover:shadow-[0_10px_20px_rgba(227,_71,_197,_0.7)] hover:translate-y-[-10px] transition-all rounded-xl">
      <div className=" relative bg-gradient-to-bl text-white overflow-hidden  from-fuchsia-500 to-pink-500 w-full sm:h-[12rem] h-[13rem] rounded-xl justify-end flex flex-col gap-1 p-5">
        <div className="absolute top-[25px] tracking-wide text-xs right-[-60px] rotate-[30deg] text-white bg-black/30 py-2 px-20 text-foreground/80 "> Coming Soon</div>
            <p className="font-semibold tracking-wider text-lg">Study Plan: SQL 50</p>
            <p className=" text-sm">Unlock your potential. A curated set of 50 questions designed to elevate your database querying skills.</p>
        </div>
        </Link>
    </div>

    <p className="text-2xl mt-[2rem] font-bold">Profile Resources</p>

    <div className="flex flex-row flex-wrap md:flex-nowrap gap-10">
        <Link href="https://docs.google.com/document/d/1HXGrg_iW9Xav-FZa0mhAT3bV6l3fHx2ed_vJlggdyHU/edit?usp=sharing" target="_" className="w-full">
        <div className=" w-full flex flex-row gap-5 items-center">
            <div className=" size-[54px] px-auto justify-center rounded-lg flex items-center bg-gradient-to-b from-orange-500 to-red-500">
                <FileText size={24} className="text-white"/>
            </div>
            <div className="flex flex-col justify-between my-auto  ">
                <p className=" font-bold">Resume Template</p>     
                <p className="text-sm">Grab your free copy of this ATS friendly resume.</p>
            </div>
        </div>
        </Link>
        <Link href="https://discord.gg/PEXXFpcN9P" className="w-full">
        <div className=" w-full flex flex-row gap-5 items-center">
            <div className=" size-[54px] px-4 justify-center rounded-lg flex items-center bg-gradient-to-r from-fuchsia-700 to-purple-600 ">
                <IconBrandDiscordFilled  size={30} className="text-white"/>
            </div>
            
            <div className="flex flex-col justify-between my-auto cursor-pointer">
                <p className="font-bold">AND Community</p>
                <p className="text-sm">Join the discord community if you haven&apos;t already.</p>
            </div>
            
        </div>
        </Link>
    </div>

    <p className="text-2xl mt-[2rem] font-bold">Book a coffee chat</p>
    <div className="w-full h-full text-center dark:text-[#D9D9E3] flex-1rounded-xl flex flex-row gap-5 flex-wrap  justify-center">
        
        <div
            
            className="relative overflow-hidden bg-background min-w-[10rem] dark:bg-neutral-900 bg-neutral-100 border border-border  flex-1 flex flex-col w-full rounded-lg py-5 px-5 items-center gap-3">
            <CircleUserRound size={25} className="text-sky-600"/>

        
           
            <p className="  w-full font-bold">Get To Know Each Other</p>
            <p className="text-sm">Don&apos;t be shy and introduce yourself. We&apos;re here to help you learn.</p>
        </div>
        
        <div className="bg-background  dark:bg-neutral-900 min-w-[10rem] bg-neutral-100 border border-border  flex-1 flex flex-col w-full rounded-lg py-5 px-5 items-center gap-3">
            <Eye size={25} className="text-amber-600"/>
            <p className="  w-full font-bold">Professional Insights</p>
            <p className="text-sm">Learn about the latest trends in the industry and how to stay ahead of the curve.</p>
        </div>

        <div className="bg-background  dark:bg-neutral-900 min-w-[10rem] bg-neutral-100 border border-border  flex-1 flex flex-col w-full rounded-lg py-5 px-5 items-center gap-3">
            <LandPlot size={25} className="text-emerald-600"/>
            <p className="  w-full font-bold">Personalized Guidance</p>
            <p className="text-sm">Get advice based on your specific needs and goals.</p>
        </div>

    </div>
    <Link href="https://cal.com/analyst-next-door" target="_" className="w-fit self-center">
    <Button  className="w-fit self-center">Book Now For Free</Button>
    </Link>
    <div className="mt-16">
    <BeehiivCheck/>
    </div>
    
  </div>
  

  </>
);
}