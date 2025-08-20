import { NextResponse } from "next/server";

import { testConnection } from "@/utils/neon-db";

export async function POST(req:any){
    const body = await req.json()
    const qid = body['quesiton']
    try {
        const  response  = await testConnection(qid);
        return NextResponse.json(response)
    }
    catch (error) {
        console.error("error in neon-db API",error);
        return NextResponse.json(error)
    }
}