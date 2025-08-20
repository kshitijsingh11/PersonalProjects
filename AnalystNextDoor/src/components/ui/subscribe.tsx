"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Input } from "@/components/ui/input"
import { Button } from './button';
import { AnimatedTooltipPeople } from './people';
export default function EmailForm(){
   

    return(
    <div >
        <div className="mb-10 flex flex-col items-center sm:flex-row gap-6 m-auto mt-10 flex-wrap ">
            <div className='h-full min-w-[16rem] max-w-[32.4rem] w-full from-cyan-400 via-emerald-400 to-sky-400 bg-gradient-to-r rounded-xl '>
                <Input type="email" className='ring-2' placeholder='Your e-mail goes here :)'/>
            </div>
        
            <Button size={"lg"}>Subscribe</Button>
        </div>
        
       
    </div>
    )
}