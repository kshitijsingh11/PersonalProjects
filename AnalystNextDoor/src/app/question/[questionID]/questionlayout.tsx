"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import CodeEditor from "@/components/editor";
import { Button } from "@/components/ui/button";
import { SkeletonCard } from "@/components/question_loader";
import { Suspense } from "react";
import * as React from "react";
import Confetti from "react-confetti";
import { Check, X } from "lucide-react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import axios from 'axios';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import SQLquestion from "@/components/sql-question-id";
import Link from "next/link";
import LiveCounter from "@/components/ui/live-counter";
import {  SignedIn, SignedOut, useAuth } from '@clerk/nextjs'
import { QueryClient, QueryClientProvider, useQueryClient } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster"
const queryClient = new QueryClient();

const Questionlayout = ({qid,qname,qdiff,solution,qbody,children}: {qid: string, qname: string,qdiff: string, solution: string,qbody:JSON ,children?: React.ReactNode}) => {
    const { resolvedTheme, setTheme } = useTheme();
    // Catches changes in the text editor
    const [code, setCode] = useState('');
    // Loading animation for output
    const [resultLoader, setResultLoader] = useState(false);
    //Catches the error message
    const [errormsg, setErrormsg] = useState('');
    //Catches the need for a coorect/incorrect response on submit
    const [check, setcheck] = useState(false);
    //Validates if a check is needed to be shown
    const [showCheck, setshowCheck] = useState(false);
    // Sets the code result
    const [coderesult, setcodeResult] = useState<any[]>([]);
    // Sets the columns of the output table
    const [columns, setColumns] = useState<any[]>([]);
    // Sets the open state of the submit success dialog
    const [open, setOpen] = useState(true);
    // Getting userid
    const {userId} = useAuth();
    // Getting user's timezone
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    // Run button
    const ApiCallResult = async () => {
  
      setResultLoader(true)
      // If empty editor
      if(code.length == 0){
        setErrormsg("Please enter a query")
        setResultLoader(false)
        return "Please enter a query"
      }
  
      //DDL statements Check
      const ddlyKeywords = ['COMMIT','PG_CATALOG', 'METADATA','POTW', 'PG_TOAST','TRUNCATE','CREATE', 'ALTER', 'DROP', 'RENAME', 'INSERT',
      'UPDATE','DELETE','LOCK', 'CALL', 'EXPLAIN','GRANT','REVOKE', 'SHOW', 'INFORMATION_SCHEMA', 'UNLOCK', 'SET', 'LOAD', 'INFILE'];
      
      for (const keyword of ddlyKeywords) {
        if (code.toUpperCase().includes(keyword)) {
          
          setErrormsg("DDL statements are not allowed")
          setResultLoader(false)
          return "DDL statements are not allowed";
        }
      }
  
  
        const {data: response} =  await axios.post('/api/query',{ usercode : code, qid:qid })     
        setshowCheck(false)
  
      
        // If error
        if(typeof response === "string"){
  
            
            setcodeResult([])
            setErrormsg(response)
            setResultLoader(false)
            return response
          }
  
        // if no code just comments
        if(response.length == 0){
          setcodeResult([])
          setErrormsg("")
          setResultLoader(false)
          return ""
        }
    
      //showing output
        setshowCheck(false)
        setErrormsg('')
        setColumns(getKeys(response));
        setcodeResult(response);
        setResultLoader(false)
        return response;
       
    }
  
    // Submit button
    const ApiCheckResult = async () => {
      setTimeout(() => {}, 2000)
      // Running user query first
      const usercoderesult = await ApiCallResult();
      
      setResultLoader(true)
      
      // If error in user query returning error and setting answer to incorrect
      if(typeof usercoderesult === "string"){
  
        setErrormsg(usercoderesult)
        setcodeResult([])
        setshowCheck(true)
        setcheck(false)
        setResultLoader(false)
        return false
      }
  
      // Comparing user query with solution
      const {data: response} =  await axios.post('/api/check',{  userResponse : usercoderesult, qid:qid, correctQuery: solution, usercode : code })
      
      //Showing incorrect or correct
      setshowCheck(true)
      const bool = response

      //update the user submissions db
      await axios.post('/api/codesubmit',{userid :userId ,qid : `q${qid}`, code: code, status:bool, timezone : userTimezone})

      // New render for the user submissions
      queryClient.invalidateQueries({queryKey: ['subData']})

      
      setcheck(bool);
      setOpen(true)
      setResultLoader(false)
      return bool
    }
  
    // Used to create Table columns
    const getKeys = (data:any[]) => {
      return Object.keys(data[0])
    }
  
    const handleCodeChange = (newCode: string) => {
      setCode(newCode);
    };
  
    return(
      <>
      <QueryClientProvider client={queryClient}>
      <Suspense fallback={<SkeletonCard />}>
    
      
      
  
      <div className="flex-1 min-w-[60rem]  flex flex-col items-center justify-center  w-full bg-solvebackground">
         <div className=" transition-all flex-1 px-2  sm:text-lg bg-solvebackground flex flex-col   w-full min-w-[20rem] items-center">
         <div className="flex my-auto  ml:flex-row flex-col transition-all w-full h-full gap-2 ">
  
         <ResizablePanelGroup direction="horizontal" className="gap-2 flex-1">
          {/**Question panel */}
          <ResizablePanel defaultSize={50} className="min-w-[30rem]  p-3 rounded-xl bg-solvecard">
          <div className="overflow-auto w-full h-full flex rounded-lg">
            <div className={`w-full transition-all questionpanel flex flex-col flex-1 rounded-lg `}>
                {/**@ts-ignore*/}
           <SQLquestion qid={qid} qname={qname} qdiff={qdiff} solution={solution}  body={qbody} >
            {children}
           </SQLquestion>
          
            </div>
          </div>
          </ResizablePanel>
  
           {/**Horizontal resize handle */}
          <ResizableHandle withHandle className="w-0.5 rounded-lg opacity-40" />
  
          {/**Right panel*/}
          <ResizablePanel defaultSize={50} className="gap-2" >
  
          <SignedIn>
          <div className="flex flex-col w-full gap-2 h-full">
         
          <ResizablePanelGroup direction="vertical" className="gap-2">
            <ResizablePanel defaultSize={50}className="flex-1 flex flex-col h-full min-h-[15rem]">
            
            <div className="gap-3 flex flex-row justify-between items-center mb-3 tracking-wide">
                <div className="flex flex-row gap-2">
                <Button variant={"run"} size={"alt"} className="self-end  min-w-[5.5rem] text-sm py-1.5 font-medium bg-solveaccent " onClick={async () => await ApiCallResult()}>Run</Button>
                  <Button variant={"run"} size={"alt"} className="self-end  min-w-[5.5rem] text-sm py-1.5 font-medium dark:hover:bg-green-800 hover:bg-green-600 hover:text-white dark:bg-green-600 bg-green-500  text-white " onClick={ApiCheckResult}>Submit</Button>
                </div>
                <div className="text-sm font-medium border px-4 py-[0.4rem] bg-background text-center rounded-xl"><p> PostgreSQL</p></div>
              </div>
  
              {/*Editor panel*/}
              
                <div className="h-full flex flex-1 ">
                {/** @ts-ignore */}
                <CodeEditor value={code} theme={resolvedTheme} onChange={handleCodeChange} />
               
                </div>
                
              
            </ResizablePanel>
            <ResizableHandle withHandle className="w-3 " />
            
            <ResizablePanel defaultSize={50} className="min-h-[15rem]">
            
            {/* Output tab */}
            
            <div className="h-full  flex flex-col  w-full bg-solvecard border-2 rounded-lg  text-base  ">
              
              <div className="flex rounded-t-lg w-full justify-between flex-row gap-3 py-1.5 px-4 items-center mb-4 bg-solveaccent">
              <p className=" text-neutral-400 dark:neutral-800 text-sm font-medium tracking-wide py-1 "> Output </p>
              
              {/** showsCheck Decides whether to show the solution correct or incorrect response */}
              {resultLoader ? (
                <div className="animate-pulse  h-[1.7rem] w-[7rem] dark:bg-[#141414]  bg-[#E8E8E8] rounded-lg"></div>
              ) : (
                <>
                { showCheck? (
                 check  ? (
                  <div className="flex flex-row gap-2 text-sm items-center">
                    {/** @ts-ignore */}
                    { open && <Confetti run={open} tweenDuration={1}/>}
                    
                    
                    <Dialog open={open} onOpenChange={() => setOpen(false)}>
                      <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                      <DialogTitle>Well done, your solution is correct!</DialogTitle>
                      <DialogDescription>
                        <div className="flex flex-col  items-center">
                        <div className="text-emerald-500 my-2 self-start">
                        <LiveCounter countdownName="Question"/>
                        </div>
                        <Link href="/dashboard">
                          <Button variant={"run"} size={"alt"} className=" w-fit px-10 text-sm py-1.5 font-medium bg-foreground text-background hover:bg-orange-500 self-center hover:text-white">Go to Dashboard</Button>
                        </Link>
                        </div>
                        
                      </DialogDescription>
                    </DialogHeader>
                    </DialogContent>
                    </Dialog>
                    
                    <Check className="p-0.5 rounded-full border-2 border-emerald-500 h-fit size-5 text-emerald-500 font-bold"/><p className="tracking-wide font-bold text-success">Solution Accepted</p></div>)
                  :
                  (<div className=" flex flex-row gap-2 text-sm items-center"><X className="p-0.5 rounded-full border-2 border-red-500 h-fit size-5 text-red-500 font-bold"/><p className="tracking-wide font-bold text-red-500">Solution Incorrect</p></div>)
              ):(<>
              
              </>)}
  
  
                </>
                
                )}
              
              
              </div>
  
              
              {/* If there is an output table*/}
  
              {resultLoader ? (
                <div className="text-center">
                  <div className="w-full h-full flex flex-col gap-1 mx-3 justify-center">
                    <div className="animate-pulse  h-[2rem] w-[32rem] dark:bg-[#141414]  bg-[#E8E8E8] rounded-lg"></div>
                    <div className="animate-pulse  h-[2rem] w-[29rem] dark:bg-[#141414]  bg-[#E8E8E8] rounded-lg"></div>
                    <div className="animate-pulse  h-[2rem] w-[25rem] dark:bg-[#141414]  bg-[#E8E8E8] rounded-lg"></div>
                    <div className="animate-pulse  h-[2rem] w-[22rem] dark:bg-[#141414]  bg-[#E8E8E8] rounded-lg"></div>
                    <div className="animate-pulse  h-[2rem] w-[19rem] dark:bg-[#141414]  bg-[#E8E8E8] rounded-lg"></div>
                  </div>
                </div>
              ) : (
                <>
                {coderesult.length > 0 ? (
              <div className="relative overflow-x-auto  sm:rounded-lg w-fit mx-3 ">
              <table className="text-sm text-left rtl:text-right text-neutral-500 dark:text-neutral-400 w-fit">
              <thead className="text-xs text-neutral-700 uppercase bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-400">
                  <tr>
                      {columns.map((column) => (
                          <th scope="col" className="px-6 py-3 font-base" key={column}>{column}</th>
                      ))}
                  </tr>
              </thead>
              <tbody >
                  {coderesult.map((employee, index) => (
                      <tr key={index} className="bg-neutral-100 dark:bg-neutral-900 border-b  dark:border-neutral-700 ">
                          {columns.map((column) => (
                              <td className="px-6 py-3 font-base" key={column}>{employee[column]}</td>
                          ))}
                      </tr>
                  ))}
              </tbody>
              </table>
              </div>
            ):
            ( errormsg && <div className="text-red-500 mx-4 bg-red-500/10 w-fit p-3 rounded-lg text-sm font-semibold tracking-wide flex flex-row gap-1"><X className="text-red-500 size-5"/>{errormsg}</div>)
            }
                </>
              )}
            
            
            </div>
           
            </ResizablePanel>
            </ResizablePanelGroup>
            
          </div>
          </SignedIn>
            <SignedOut>
            <div className="flex flex-col relative w-full  gap-2 h-full">
              <div className="absolute flex flex-col items-center  justify-center bg-background/80 h-full w-full rounded-lg top-0 left-0 z-20">
              <Link href="/sign-in" className="z-50">
              <Button variant={"run"} size={"alt"} className=" w-fit px-10 text-lg  py-1.5 font-semibold shadow-lg bg-orange-500 text-white  hover:bg-foreground dark:hover:text-background  self-center ">
              Log in to solve for free
              </Button>
              </Link>
              </div>
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

        
          
            
              
           


            </SignedOut>
          </ResizablePanel>
  
  
         </ResizablePanelGroup>
          
          
          
          
         </div>
         
          </div>
          
         </div>
         
         </Suspense>
         <Toaster />
         </QueryClientProvider>
         
      </>
  
    ) 
  }

export default Questionlayout