"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CodeEditor from "@/components/editor-question";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";


const SQLquestion = () => {
    let pathnme = usePathname();
    const { resolvedTheme, setTheme } = useTheme();
    const solutionQuery = `/** Answer Query **/

    -- Assigning a row number based on the date for each user and product combination.
    WITH base AS (
        SELECT user_id, 
               product_id, 
               channel,
               date,
               ROW_NUMBER() OVER (PARTITION BY user_id, product_id ORDER BY date) AS rn
        FROM user_event
        WHERE event_type = 'click' -- Consider only click events
    ),
    
    -- Filter the base table to only keep the first touchpoint for each user and product.
    first_touch AS (
        SELECT user_id, 
               product_id, 
               channel,
               date
        FROM base
        WHERE rn = 1 -- Select only the rows where the row number is 1 (the first interaction)
    ),
    
    -- Calculate the number of conversions for each channel
    conversions AS (
        SELECT channel, 
               COUNT(DISTINCT user_purchase.user_id) AS conversion_count
        FROM first_touch
        -- joining with user_purchase to identify purchases made by users who had their first interaction through each channel.
        INNER JOIN user_purchase ON first_touch.user_id = user_purchase.user_id 
                                  AND first_touch.product_id = user_purchase.product_id
                                  AND user_purchase.date >= first_touch.date
        GROUP BY channel
    ),
    
    -- Calculate the reach count - number of unique users who interacted with the campaign through that channel.
    channel_reach AS (
        SELECT channel, 
               COUNT(DISTINCT user_id) AS reach_count
        FROM user_event
        GROUP BY 1
    ),
        
    -- Calculate the conversion percentage for each channel.
    attribution AS (
        SELECT cr.channel, 
               COALESCE(c.conversion_count, 0) * 1.0 / cr.reach_count AS conversion_percentage
        FROM channel_reach cr
        LEFT JOIN conversions c ON cr.channel = c.channel
    )
    
    -- Formatted Final Output
    SELECT channel, 
           ROUND(conversion_percentage, 3) as conversion_rate
    FROM attribution
    ORDER BY conversion_percentage DESC;
    `
    
  return (
    <div className="h-full">
    <Tabs defaultValue="problem" className="w-full ">
    <TabsList className="mb-5">
        <TabsTrigger value="problem" className="min-w-[10rem] rounded-lg">Problem</TabsTrigger>
        {!pathnme.endsWith("public") && <TabsTrigger value="solution" className="min-w-[10rem] rounded-lg">Solution</TabsTrigger>}
        
    </TabsList>

    <TabsContent value="problem" className="px-5">
        <div className="flex flex-col">

        {/* Problem Title */}

        <h1 className="text-2xl tracking-wide font-semibold">Q. First-touch marketing attribution</h1>
        
        {/* Tags */}
        <div className="flex flex-row gap-2 mt-2 ">
            {/*
            <div className="px-4 py-1 rounded-xl dark:bg-foreground/20 bg-neutral-100 text-xs text-emerald-400">Easy</div> 
            <div className="px-4 py-1 rounded-xl dark:bg-foreground/20 bg-neutral-100 text-xs text-orange-400">Medium</div>*/}
            
            <div className="px-4 py-1 rounded-xl dark:bg-foreground/20 bg-neutral-100 text-xs text-red-400">Hard</div>
             {/* 
            <span className="dark:bg-neutral-700 bg-neutral-100 rounded px-1 text-foreground ml-1">product_name</span>*/}
        </div>
        
        {/* Description */}
        <div className="text-sm flex flex-col mt-5 leading-relaxed   gap-3 font-light">
            <p>First-touch marketing attribution is a model for assigning credit to the marketing channel that initiated a
            user's first interaction with a brand/product. In this model, only the first touchpoint a user interacts with will receive credit for any subsequent conversions. </p>

            <p>For example, if a user <b className="font-semibold">clicks</b> on a Facebook ad, then later clicks on a Google search ad and makes a purchase of a product, the Facebook ad would be credited with the conversion because it was the first marketing touchpoint the user interacted with.</p>

            <p>You have a table named <span className="dark:bg-neutral-700 bg-neutral-100 rounded px-1 text-foreground ml-1">
            user_event</span> that contains data on user interactions with a marketing campaign {"("}e.g., impressions, clicks{")"}, and a table with user purchases called <span className="dark:bg-neutral-700 bg-neutral-100 rounded px-1 text-foreground ml-1">user_purchase.</span></p>
            <p>Write a SQL query that calculates the conversion rate of each channel based on the first-touch attribution model. The output should have <b className="font-semibold">channel & conversion_rate</b> (rounded to 3 decimal points) in the descending order of the conversion_rate.</p>
            <p>Conversion Rate = <b className="font-semibold"># of users who made a purchase using first-touch attribution / # of users who interacted with the channel</b></p>
        </div>

        
            


        <h2 className="text-sm  font-semibold mt-10">Table: <span className="dark:bg-neutral-700 bg-neutral-100 rounded px-1 text-foreground ml-1">user_event</span></h2>

            
            <div className="relative w-fit overflow-x-auto shadow-md sm:rounded-lg my-6 max-w-[45rem]">
            <table className="w-full text-sm text-left rtl:text-right text-neutral-500 dark:text-neutral-400 ">
                <thead className="text-xs text-neutral-700 uppercase bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-400">
                    <tr>
                        <th scope="col" className="px-6 py-2">
                           Column Name
                        </th>
                        <th scope="col" className="px-6 py-2">
                            Type
                        </th>
                       
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-neutral-100 dark:bg-neutral-900 border-b  dark:border-neutral-700">
                        <td  className="px-6 py-2" >
                        user_id
                        </td>
                        <td className="px-6 py-2">
                        INTEGER
                        </td>

                       
                        
                    </tr>
                    <tr className="bg-neutral-100 dark:bg-neutral-900 border-b  dark:border-neutral-700">
                        <td  className="px-6 py-2" >
                        event_type
                        </td>
                        <td className="px-6 py-2">
                        TEXT
                        </td>
                       
                    </tr>
                    <tr className="bg-neutral-100 dark:bg-neutral-900 border-b  dark:border-neutral-700">
                        <td  className="px-6 py-2" >
                        channel
                        </td>
                        <td className="px-6 py-2">
                        TEXT
                        </td>
                        
                        
                    </tr>
                    <tr className="bg-neutral-100 dark:bg-neutral-900 border-b  dark:border-neutral-700">
                        <td  className="px-6 py-2" >
                        product_id
                        </td>
                        <td className="px-6 py-2">
                        INTEGER
                        </td>
                        
                        
                    </tr>
                    <tr className="bg-neutral-100 dark:bg-neutral-900 border-b  dark:border-neutral-700">
                        <td  className="px-6 py-2" >
                        date
                        </td>
                        <td className="px-6 py-2">
                        DATE
                        </td>
                        
                        
                    </tr>
                </tbody>
            </table>
        </div>
       
 

        <h2 className="text-sm  font-semibold mt-5">Table: <span className="dark:bg-neutral-700 bg-neutral-100 rounded px-1 text-foreground ml-1">user_purchase</span></h2>

            
        <div className="relative w-fit overflow-x-auto shadow-md sm:rounded-lg my-6 max-w-[45rem]">
        <table className="w-full text-sm text-left rtl:text-right text-neutral-500 dark:text-neutral-400 ">
                <thead className="text-xs text-neutral-700 uppercase bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-400">
                    <tr>
                        <th scope="col" className="px-6 py-2">
                           Column Name
                        </th>
                        <th scope="col" className="px-6 py-2">
                            Type
                        </th>
                       
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-neutral-100 dark:bg-neutral-900 border-b  dark:border-neutral-700">
                        <td  className="px-6 py-2" >
                        user_id
                        </td>
                        <td className="px-6 py-2">
                        INTEGER
                        </td>

                       
                        
                    </tr>
                    <tr className="bg-neutral-100 dark:bg-neutral-900 border-b  dark:border-neutral-700">
                    <td  className="px-6 py-2" >
                        product_id
                        </td>
                        <td className="px-6 py-2">
                        INTEGER
                        </td>

                       
                    </tr>
                    
                    <tr className="bg-neutral-100 dark:bg-neutral-900 border-b  dark:border-neutral-700">
                        <td  className="px-6 py-2" >
                        date
                        </td>
                        <td className="px-6 py-2">
                        DATE
                        </td>
                        
                        
                    </tr>
                </tbody>
            </table>
        </div>

        
    

        </div>
       
    
    
    
    
    
    </TabsContent>
    <TabsContent value="solution" className="px-1">

    
   
    <div className="h-full flex flex-1 relative ">
    <button  className="z-30 absolute top-0 right-4 m-2 p-2 bg-accent rounded-lg border hover:bg-orange-500 hover:text-white transition-all "
    onClick={() =>  navigator.clipboard.writeText(solutionQuery)}
    >
    <Copy className="size-5"/>
    </button>

         {/*@ts-ignore*/}
    <CodeEditor value={solutionQuery} theme={resolvedTheme} />
    </div>
    
  
    </TabsContent>
    </Tabs>

    </div>
  )
}

export default SQLquestion