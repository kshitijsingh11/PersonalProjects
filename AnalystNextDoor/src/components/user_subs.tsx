
import axios from "axios";
import { getUserSubs } from "@/utils/user_db";
import { useAuth } from "@clerk/nextjs";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { IconX, IconCheck } from '@tabler/icons-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Copy, Divide } from "lucide-react";
import CodeDisplay from "./studyplan-ui/code-display";
import { toast } from "./ui/use-toast";
type DataItem = {
  userid: string;
  qid: string;
  code: string;
  status: boolean;
  timestamp: string | null;
};


const UserSubmissions = ({qid}: {qid: string}) => {
    const questId = `q${qid}`;
    const {userId} = useAuth();
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
   


    const {data, isLoading, error} = useQuery({
      queryKey: ['subData'],
      queryFn: async () =>{ 
       const {data :response} = await axios.post('/api/usersubs',{userid : userId ,qid : questId,timezone: userTimezone})
       return response;
      },

    })

    if (!userId) {
      return <div>User not logged in</div>
    }

    if (isLoading) {
      return (
      <div className="flex flex-col  gap-2 mt-5 px-6">
        <div  className="bg-neutral-200 rounded-lg dark:bg-[#141414] h-[3rem] w-full max-w-[50rem] " />
        <div  className="bg-neutral-200 rounded-lg dark:bg-[#141414] h-[3rem] w-full max-w-[50rem]" />
        <div  className="bg-neutral-200 rounded-lg dark:bg-[#141414] h-[3rem] w-full max-w-[50rem]" />
        <div  className="bg-neutral-200 rounded-lg dark:bg-[#141414] h-[3rem] w-full max-w-[50rem]" />
        <div  className="bg-neutral-200 rounded-lg dark:bg-[#141414] h-[3rem] w-full max-w-[50rem]" />
      </div>)
    }


  return (
    
    <div>
      {data.length != 0 ? (
        <Accordion type="multiple"  className="w-full ">
        {data.map((item :DataItem, index: number) => (
          <div key={index} className="w-full ">
            {item.status ? 
            (
            
            <AccordionItem  value={index.toString()}   className="  px-3  w-full">
             
              <AccordionTrigger className="flex flex-row bg-emerald-500/20 rounded-lg gap-2 px-3 mb-2 ">
              <div className="flex flex-row gap-2">
              <p className="text-emerald-500 text-sm tracking-wide">
                Correct Submission  - {item.timestamp?.slice(0,10)}
              </p>
              </div>
              
                </AccordionTrigger>
              <AccordionContent className="">
                <div className="relative rounded-lg overflow-hidden px-3 py-4 bg-white dark:bg-[#141414] border">
                <CodeDisplay value={item.code} />
                <button  className="z-30 absolute top-0 right-4 mt-2 ml-2 p-2  bg-accent rounded-lg border hover:bg-orange-500 hover:text-white transition-all "
                onClick={() =>  {
                    navigator.clipboard.writeText(item.code);
                    toast({
                        description: <p className="text-sm font-semibold">Copied to clipboard</p>,
                    });
                }}
                >
                <Copy className="size-5"/>
                </button>
                </div>
                
              </AccordionContent>
         
            </AccordionItem>) : 
            (<AccordionItem  value={index.toString()}   className="  px-3  w-full">
             
            <AccordionTrigger className="flex flex-row bg-red-500/20 rounded-lg gap-2 px-3 mb-2 ">
            <div className="flex flex-row gap-2">
            <p className="text-red-500 text-sm tracking-wide">
              Incorrect Submission  - {item.timestamp?.slice(0,10)}
            </p>
            </div>
            
              </AccordionTrigger>
            <AccordionContent className="">
              <div className="relative rounded-lg overflow-hidden px-3 py-4 bg-white dark:bg-[#141414] border">
              <CodeDisplay value={item.code} />
              <button  className="z-30 absolute top-0 right-4 mt-2 ml-2 p-2  bg-accent rounded-lg border hover:bg-orange-500 hover:text-white transition-all "
                onClick={() =>  {
                    navigator.clipboard.writeText(item.code);
                    toast({
                        description: <p className="text-sm font-semibold">Copied to clipboard</p>,
                    });
                }}
                >
                <Copy className="size-5"/>
                </button>
              </div>
              
            </AccordionContent>
       
          </AccordionItem>)}
          </div>
        ))}
        </Accordion>

      ):(
        <></>

      )}
       
    </div>
   
  )
}

export default UserSubmissions