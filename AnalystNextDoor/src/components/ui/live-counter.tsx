"use client"

import { useState, useEffect } from "react";


export default function LiveCounter({countdownName}:{countdownName:string}) {

    const [countdown, setCountdown] = useState<number>(calculateCountdown());

    useEffect(() => {
        const interval = setInterval(() => {
        setCountdown(calculateCountdown());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    function calculateCountdown(): number {
        const now: Date = new Date();
        const currentDay: number = now.getDay(); // (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
        
        
        let daysUntilNextTuesday: number;
        
        if(currentDay ==2){
            daysUntilNextTuesday = 7
        }
        else{
        daysUntilNextTuesday = ( 9- currentDay)%7;}
        
        
      
        const nextTuesday: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + daysUntilNextTuesday);
        nextTuesday.setHours(12, 0, 0, 0); // Set to midnight
        
        return nextTuesday.getTime() - now.getTime();
      }

      function formatTime(milliseconds: number): string {
        const seconds: number = Math.floor(milliseconds / 1000) % 60;
        const minutes: number = Math.floor(milliseconds / (1000 * 60)) % 60;
        const hours: number = Math.floor(milliseconds / (1000 * 60 * 60)) % 24;
        const days: number = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
       
        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }

    
    return (
        <span className=" my-1.5  flex flex-row items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
        </span>
        <p className="">Next {countdownName} in {formatTime(countdown)}</p>
        </span>
        )
}
