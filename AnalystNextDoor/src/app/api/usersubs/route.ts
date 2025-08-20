import { NextApiRequest,NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { getUserSubs } from "@/utils/user_db";

export async function POST(req:any){
    const body = await req.json()
    const userid = body["userid"]
    const qid = body["qid"]
    const timezone = body["timezone"]
    try{ 
        const response = await getUserSubs(userid,qid,timezone);
        return NextResponse.json(response)    
    }
    catch(e){
        return NextResponse.json(e)
    }
    

}