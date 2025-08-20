import { Skeleton } from "@/components/ui/skeleton"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
import { Button } from "./ui/button"
export function SkeletonCard() {
  return (

    <>
    
    <div className="flex-1 min-w-[60rem]  flex flex-col items-center justify-center  w-full bg-solvebackground">
       <div className=" transition-all flex-1 px-2  sm:text-lg bg-solvebackground flex flex-col   w-full min-w-[20rem] items-center">
       <div className="flex my-auto  ml:flex-row flex-col transition-all w-full h-full gap-2 ">

       <ResizablePanelGroup direction="horizontal" className="gap-2 flex-1">
        {/**Question panel */}
        <ResizablePanel defaultSize={50} className="min-w-[30rem]  p-3 rounded-xl bg-solvecard">
        <div  className="overflow-auto w-full h-full flex rounded-lg">
          <div className={`w-full transition-all questionpanel flex flex-col flex-1 rounded-lg `}>
          <div  className="animate-pulse transitional-all h-[2.2rem] rounded-lg ml-1 w-[19rem] dark:bg-[#141414] mt-1 bg-[#E8E8E8]"></div>
          <div  className="animate-pulse transitional-all h-[2.5rem] rounded-lg ml-1 w-[22rem] dark:bg-[#141414] mt-4 bg-[#E8E8E8]"></div>
          <div className="flex flex-row gap-2 mt-1.5">
            <div  className="animate-pulse transitional-all h-[1.5rem] rounded-lg ml-1 w-[5rem] dark:bg-[#141414] mt-1 bg-[#E8E8E8]"></div>
            <div className="animate-pulse transitional-all h-[1.5rem] rounded-lg ml-1 w-[5rem] dark:bg-[#141414] mt-1 bg-[#E8E8E8]"></div>
            <div className="animate-pulse transitional-all h-[1.5rem] rounded-lg ml-1 w-[5rem] dark:bg-[#141414] mt-1 bg-[#E8E8E8]"></div>
          </div>
          <div className="animate-pulse transitional-all h-[1rem] rounded-lg ml-1 max-w-[50rem] w-full dark:bg-[#141414] mt-6 bg-[#E8E8E8]"></div>
          <div className="animate-pulse transitional-all h-[1rem] rounded-lg ml-1 max-w-[42rem] w-full dark:bg-[#141414] mt-[1.5rem] bg-[#E8E8E8]"></div>
          <div className="animate-pulse transitional-all h-[1rem] rounded-lg ml-1 max-w-[55rem] w-full dark:bg-[#141414] mt-[1.5rem] bg-[#E8E8E8]"></div>
          <div className="animate-pulse transitional-all h-[1rem] rounded-lg ml-1 max-w-[30rem] w-full dark:bg-[#141414] mt-[1.5rem] bg-[#E8E8E8]"></div>
          <div className="animate-pulse transitional-all h-[1rem] rounded-lg ml-1 max-w-[55rem] w-full dark:bg-[#141414] mt-[1.5rem] bg-[#E8E8E8]"></div>
          <div className="animate-pulse transitional-all h-[1rem] rounded-lg ml-1 max-w-[50rem] w-full dark:bg-[#141414] mt-6 bg-[#E8E8E8]"></div>
          <div className="animate-pulse transitional-all h-[10rem] rounded-lg ml-1 w-[20rem]  dark:bg-[#141414] mt-10 bg-[#E8E8E8]"></div>
          <div className="animate-pulse transitional-all h-[10rem] rounded-lg ml-1 w-[20rem]  dark:bg-[#141414] mt-10 bg-[#E8E8E8]"></div>
          <div className="animate-pulse transitional-all h-[1rem] rounded-lg ml-1 max-w-[50rem] w-full dark:bg-[#141414] mt-10 bg-[#E8E8E8]"></div>
          <div className="animate-pulse transitional-all h-[1rem] rounded-lg ml-1 max-w-[42rem] w-full dark:bg-[#141414] mt-[1.5rem] bg-[#E8E8E8]"></div>
          <div className="animate-pulse transitional-all h-[1rem] rounded-lg ml-1 max-w-[55rem] w-full dark:bg-[#141414] mt-[1.5rem] bg-[#E8E8E8]"></div>
          <div className="animate-pulse transitional-all h-[1rem] rounded-lg ml-1 max-w-[30rem] w-full dark:bg-[#141414] mt-[1.5rem] bg-[#E8E8E8]"></div>
          </div>
        </div>
        </ResizablePanel>

         {/**Horizontal resize handle */}
        <ResizableHandle withHandle className="w-0.5 rounded-lg opacity-40" />

        {/**Right panel*/}
        <ResizablePanel defaultSize={50} className="gap-2" >


        <div className="flex flex-col w-full gap-2 h-full">
        <ResizablePanelGroup direction="vertical" className="gap-2">
          <ResizablePanel defaultSize={50}className="flex-1 flex flex-col h-full min-h-[15rem]">
          <div className="gap-3 flex flex-row mb-3 tracking-wide">
              <Button variant={"run"} size={"alt"} className="self-end  min-w-[5.5rem] text-sm py-1.5 font-medium bg-solveaccent " >Run</Button>
              <Button variant={"run"} size={"alt"} className="self-end  min-w-[5.5rem] text-sm py-1.5 font-medium dark:hover:bg-green-800 hover:bg-green-600 hover:text-white dark:bg-green-600 bg-green-500  text-white " >Submit</Button>
            </div>

            {/*Editor panel*/}
            
              <div className="h-full flex flex-1 ">
              {/** @ts-ignore */}
              <div className=" h-full w-full dark:bg-[#141414] bg-white"></div>
             
              </div>
              
            
          </ResizablePanel>
          <ResizableHandle withHandle className="w-3 " />

          <ResizablePanel defaultSize={50} className="min-h-[15rem]">
          {/* Output tab */}
          
          <div className="h-full  flex flex-col  w-full bg-solvecard border-2 rounded-lg  text-base font-light ">
            
            <div className="flex rounded-t-lg w-full justify-between flex-row gap-3 py-1.5 px-4 items-center mb-4 bg-solveaccent">
            <p className=" text-neutral-400 dark:neutral-800 text-sm font-medium tracking-wide py-1 "> Output </p>
           
            
            </div>
          
          
          </div>
         
          </ResizablePanel>
          </ResizablePanelGroup>
        </div>
          
        </ResizablePanel>


       </ResizablePanelGroup>
        
        
        
        
       </div>
       
        </div>
        
       </div>
    
    </>
  )
}
