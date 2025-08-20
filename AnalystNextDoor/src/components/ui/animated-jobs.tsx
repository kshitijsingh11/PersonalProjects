"use client";
 
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";
import Image from "next/image";
 
interface Item {
  name: string;
  description: string;
  icon: string;
  color?: string;
  time: string;
}
 
let notifications = [
  {
    name: "LinkedIn",
    description: "Data Scientist - Trust & Safety",
    time: "London, UK",
 
    icon:"/linkedin-logo.png",
  },
  {
    name: "Amazon",
    description: "Business Intel. Engineer",
    time: "Seattle, USA",
    icon:"/amazon-logo.png",
   
  },
  {
    name: "Google",
    description: "Product Analyst - Chrome",
    time: "Bangalore, India",
    icon:"/google-logo.png",
    color: "#FFFFFF",
  },
  {
    name: "Meta",
    description: "Data Scientist offer details",
    time: "San Francisco, USA",
    icon:"/meta-logo.png",
    color: "#FFFFFF",
  },
];
 
notifications = Array.from({ length: 10 }, () => notifications).flat();
 
const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          {color ? (
                <div className={`size-10 rounded-full relative  ${color}`}>
                    <Image
                        src={icon}
                        alt="Uttkarsh"
                        loading="lazy"
                        fill={true}

                        style={{objectFit: "cover", padding:"5px"}}
                    />
                </div>
            ) : (
                <div className="size-10  rounded-full relative">
                <Image
               
                src={icon}
                alt="Uttkarsh"
                loading="lazy"
                fill={true}

                style={{objectFit: "cover"}}
                />
            </div>
            )}
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};
 
export function AnimatedListDemo() {
  return (
    <div className="relative flex max-h-[400px] min-h-[400px] w-full max-w-[32rem] flex-col overflow-hidden rounded-lg  bg-background p-6 ">
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}