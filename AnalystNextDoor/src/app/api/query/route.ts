import { NextApiRequest,NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { runQuery } from "@/utils/databse-single";
import { runUserQuery } from "@/utils/neon-db";

export async function POST(req:any){
    const body = await req.json()
    const usercode = body["usercode"]
    const qid = body["qid"]
    try{
        const response = await runUserQuery(qid,usercode);
        return NextResponse.json(response)
    }
    catch(e){
        return NextResponse.json(e)
    }
    

}
    
    