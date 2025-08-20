
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CodeEditor from "@/components/editor-question";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Copy,User,X } from "lucide-react";
import { SkeletonCard } from "@/components/question_loader";
import { Suspense } from "react";
import { IconList } from '@tabler/icons-react';
import { Drawer } from "vaul";
import { Sign } from "crypto";
import { IconLock } from '@tabler/icons-react';
import UserSubmissions from "./user_subs";
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"



const SQLquestion = ({qid,qname,qdiff,solution,body,children}: {qid: string, qname: string,qdiff: string, solution: string,body:JSON ,children?: React.ReactNode}) => {
    let pathnme = usePathname();
    const { toast } = useToast()
    const qData = body;
  return (
  
    <div className="h-full relative">
        
     
    <Tabs defaultValue="problem" className="w-full ">
    <div className="flex flex-row gap-2 items-center mb-5 ">
        
        {/**left side drawer*/}
        {!pathnme.endsWith("potw") && 
    <Drawer.Root direction="left">
      <Drawer.Trigger asChild>
      <IconList  className="size-8 py-auto self-center dark:hover:bg-background focus:dark:bg-background focus:bg-neutral-100 hover:bg-neutral-100 z-20 px-1 transition-all rounded cursor-pointer"/>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-50 "  />
        <Drawer.Content className="bg-background z-50 flex flex-col rounded-t-[10px] h-full w-[400px] mt-24 fixed bottom-0 left-0">
          {children}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
    }


        
    <TabsList className="">
        <TabsTrigger value="problem" className="min-w-[10rem] rounded-lg">Problem</TabsTrigger>
        <TabsTrigger value="solution" className="min-w-[10rem] rounded-lg">Solution</TabsTrigger>
        <SignedIn>
        <TabsTrigger value="submission" className="min-w-[10rem] rounded-lg">Submissions</TabsTrigger>
        </SignedIn>
    </TabsList>
        </div>
    

    <TabsContent value="problem" className="px-1">
        <div className="flex flex-col">

        {/* Problem Title */}
        
        <h1 className="text-2xl tracking-wide font-semibold">{qid}. {qname}</h1>
       
      
        {/* Tags */}
        <div className="flex flex-row gap-2 mt-2 ">
            {/*
            <div className="px-4 py-1 rounded-xl dark:bg-foreground/20 bg-neutral-100 text-xs text-emerald-400">Easy</div> */}
            <div className="px-4 py-1 rounded-xl dark:bg-foreground/20 bg-neutral-100 text-xs text-orange-400">{qdiff}</div>
             {/* 
            <div className="px-4 py-1 rounded-xl dark:bg-foreground/20 bg-neutral-100 text-xs text-red-400">Hard</div>
            <span className="dark:bg-neutral-700 bg-neutral-100 rounded px-1 text-foreground ml-1">product_name</span>*/}
        </div>
        
        {/* Description */}
        <div className="text-sm flex flex-col mt-5 leading-relaxed  desc gap-3 font-light">
            {/* @ts-ignore */}
            {qData.desc.map((item, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: item }}></p>
            ))}
            
        </div>

        
        

            
            
        {/* @ts-ignore */}
        {Object.entries(qData.sample_input).map(([tableName, tableData], index) => (
                <div key={tableName} >
                <h2 className="mt-[2rem] pb-5  text-sm  italic">{tableName}</h2>
                
                <div  className="relative text-sm w-fit overflow-hidden shadow-md rounded-lg mb-5 ">
                    

                    <table className="w-full border-collapse text-sm text-left rtl:text-right text-neutral-500 dark:text-neutral-400 ">
                    <thead className="text-xs text-neutral-700 uppercase  bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-400">
                        <tr>
                            {/* @ts-ignore */}
                        {tableData.col.map((col, index) => (
                            <th scope="col" className="px-6 py-2" key={index}>{col}</th>
                        ))}
                        </tr>
                    </thead>
                    <tbody>
                        {/* @ts-ignore */}
                        {tableData.rows.map((row, rowIndex) => (
                        <tr className="bg-neutral-100 dark:bg-neutral-900 border-b  dark:border-top-neutral-700 " key={rowIndex}>
                            {/* @ts-ignore */}
                            {row.map((cell, cellIndex) => (
                            <td className="px-6 py-2" key={`${rowIndex}-${cellIndex}`}>{cell}</td>
                            ))}
                        </tr>
                        ))}
                    </tbody>
                    </table>
                    
                </div>
                </div>
            ))}
        {/* @ts-ignore */}
        {Object.entries(qData.sample_output).map(([tableName, tableData], index) => (
                <div key={tableName}>
                <h2 className="py-5 text-sm  italic">{tableName}</h2>
                
                <div  className="relative text-sm w-fit mb-5 overflow-hidden shadow-md rounded-lg ">
                    

                    <table className="w-full border-collapse text-sm text-left rtl:text-right text-neutral-500 dark:text-neutral-400 ">
                    <thead className="text-xs text-neutral-700 uppercase  bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-400">
                        <tr>
                            {/* @ts-ignore */}
                        {tableData.col.map((col, index) => (
                            <th scope="col" className="px-6 py-2" key={index}>{col}</th>
                        ))}
                        </tr>
                    </thead>
                    <tbody>
                        {/* @ts-ignore */}
                        {tableData.rows.map((row, rowIndex) => (
                        <tr className="bg-neutral-100 dark:bg-neutral-900 border-b  dark:border-top-neutral-700 " key={rowIndex}>
                            {/* @ts-ignore */}
                            {row.map((cell, cellIndex) => (
                            <td className="px-6 py-2" key={`${rowIndex}-${cellIndex}`}>{cell}</td>
                            ))}
                        </tr>
                        ))}
                    </tbody>
                    </table>
                    
                </div>
                </div>
            ))}

            <div className="text-sm flex flex-col mt-5 leading-relaxed  desc gap-3 font-light">
            {/* @ts-ignore */}
            {qData.footer?.map((item, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: item }}></p>
                
            ))}
            </div>
        
        </div>
    
    
    
    </TabsContent>
    <TabsContent value="solution" className="px-1">
    <SignedOut>
    <div className='border-2  mx-auto p-10 flex flex-col items-center text-center gap-5  rounded-xl
        [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_6px_12px_rgba(0,0,0,.05)]
        dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]'>
          <IconLock size={60} className="text-foreground"/>
        <p className="text-lg font-semibold">Login to see the solution for free.</p>
      
                             
    </div>
    

    </SignedOut>
    <SignedIn>
   
    <div className="h-full flex flex-1 relative ">
    <button  className="z-30 absolute top-0 right-4 m-2 p-2  bg-accent rounded-lg border hover:bg-orange-500 hover:text-white transition-all "
    onClick={() =>  {
        navigator.clipboard.writeText(solution);
        toast({
            description: <p className="text-sm font-semibold">Copied to clipboard</p>,
        });
    }}
    >
    <Copy className="size-5"/>
    </button>

    {/*@ts-ignore*/}
    <CodeEditor value={solution} />
    </div>
    
    </SignedIn>
    </TabsContent>
    <TabsContent value="submission" className="px-1">
        <Suspense fallback={<div></div>}>
          
            <UserSubmissions qid={qid}/>
        </Suspense>
    </TabsContent>
    </Tabs>

    </div>
    
  )
}

export default SQLquestion