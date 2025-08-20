"use server";
import { getData, getAllQuestions, GetPotw } from "@/utils/neon-db";
import Questionlayout from "./questionlayout";
import { Suspense } from "react";
import { SkeletonCard } from "@/components/question_loader";
import QuestionDrawer from "@/components/question-drawer";
import { notFound } from "next/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



const QuestionData = async ({questionID}: {questionID: string}) => {
  const data = await getData(questionID);
  const list = await getAllQuestions();

  return (
    <>
     <Suspense fallback={<SkeletonCard/>}>
      <Questionlayout qid={questionID} qname={data['qname']} qdiff={data['qdiff']} solution={data['qanswer']} qbody={data['qbody']}>
        <QuestionDrawer list={list}/>
      </Questionlayout>
      </Suspense>
    </>
  )
}

const Potw = async () => {
  const potw_details = await GetPotw();
  const list = await getAllQuestions();

  return (
    <>
    <Suspense fallback={<SkeletonCard/>}>
      <Questionlayout qid={potw_details[0]["qid"].substring(1)} qname={potw_details[0]["qname"]} qdiff={potw_details[0]["qdiff"]} solution={potw_details[0]["qanswer"]} qbody={potw_details[0]["qbody"]}> 
      <QuestionDrawer list={list}/>
      </Questionlayout>
      </Suspense>
    </>
  )
}
export default async function QuestionPage( {params}: {params: {questionID: string}} ) {
  //if (!["potw"].includes(params.questionID) ) {
   // return notFound()

   
  //}
  
  return(
    <>
    
    {params.questionID === "potw" ? <Potw/> : <QuestionData questionID={params.questionID}/>}
   
    </>

  ) 
}