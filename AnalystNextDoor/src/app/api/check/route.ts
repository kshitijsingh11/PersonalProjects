import { NextApiRequest,NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { checkQuery } from "@/utils/neon-db";

export async function POST(req:any){
    const body = await req.json()
    const userResponse = body["userResponse"]
    const qid = body["qid"]
    const usercode = body["usercode"]
    const correctQuery = body["correctQuery"]
    
    try {
        let bool = await checkQuery(qid,userResponse,correctQuery,usercode);
        if(bool){
        
            return NextResponse.json(true)
        }else{

            return NextResponse.json(false)
        }
        }
    catch(e){
        return NextResponse.json(e)
    }
}   