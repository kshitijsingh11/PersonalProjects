import { NextApiRequest,NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { addUserSub} from "@/utils/user_db";

export async function POST(req:any){
    const body = await req.json()
    const userid = body["userid"]
    const qid = body["qid"]
    const code = body["code"]
    const status = body["status"]
    const timezone = body["timezone"]
   
    try{
        const response = await addUserSub(userid,qid,code,status,timezone);
        return NextResponse.json(response)
    }
    catch(e){
        return NextResponse.json(e)
    }
    

}