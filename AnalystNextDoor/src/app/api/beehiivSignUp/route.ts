import { NextApiRequest,NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { runQuery } from "@/utils/databse-single";
import axios from 'axios';

export async function POST(req:any){
    const body = await req.json()
    const email = body["email"]
    const options = {
        method: 'POST',
        url: `https://api.beehiiv.com/v2/publications/${process.env.PUBLICATION_ID}/subscriptions`,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: process.env.BEEHIIV_KEY,
        },
        data: {
          email: email,
          reactivate_existing: false,
          send_welcome_email: true,
        }
      };

      
    try {
        const  response  = await axios.request(options);
        return NextResponse.json(response.data)
    } catch (error) {
        console.error("error in signup API",);
        return NextResponse.json(error)
    }

}