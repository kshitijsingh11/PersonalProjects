import {color, motion, Variants} from "framer-motion";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

const PillsShowcase = () => {

  const pillData = [
    {
       title: "LinkedIn",
       description: "Data Scientist - Trust & Safety",
       icon:"/linkedin-logo.png",
       color:"",
    },
    {
        title: "Amazon",
        description: "Business Intel. Engineer",
        icon:"/amazon-logo.png",
        color:"",
     },
     {
        title: "Google",
        description: "Product Analyst - Chrome",
        icon:"/google-logo.png",
        color:"bg-white border",
     },
     {
        title: "Meta",
        description: "Offer details for Level 3",
        icon:"/meta-logo.png",
        color:"bg-white border",
     },
     {
        title: "Uber",
        description: "Data Scientist offer details",
        icon:"/uber-logo.png",
        color:"bg-white border",
     }
  ]
  return (
    <div className="pills-showcase group flex flex-col gap-6  px-3  transition-all ">
        {pillData.map((item, i) => (
        <PillItem
          key={i}
          title={item.title}
          description={item.description}
          icon={item.icon}
          color={item.color}
        />
      ))}
    </div>
  )
}



const PillItem = ({
    title,
    className,
    description,
    icon,
    color
}:{
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    color?: string | React.ReactNode;
    icon: string ;
}) => {
  return (
    <div className=" py-2 sm:px-5 px-2 bg-background border dark:bg-background rounded-lg  group-hover:translate-y-[1px] sm:translate-y-[-5.4rem] translate-y-[-6rem] transition-all
    dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_1px_2px_rgba(0,0,0,.05),0_6px_12px_rgba(0,0,0,.05)]">
        
        <div className="flex flex-row items-center gap-4">
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
            
            <div className="relative flex flex-col">
                <p className="font-medium sm:text-base text-sm tracking-wide"> {title}</p>
                <p className=" sm:text-sm text-xs opacity-80">{description}</p>
                {title=="LinkedIn" && (
            <div className="absolute size-3 bg-emerald-400 rounded-full z-30 top-[6px] left-[4.6rem]"></div>
        )}
            </div>
        </div>
    </div>
  )
}


export default PillsShowcase