import { NextApiRequest,NextApiResponse } from "next";
import { NextResponse } from "next/server";
import axios from 'axios';

export async function POST(req:any){
    const body = await req.json()
    const email = body["email"]
    console.log("email :",email);

    const options = {
        method: 'GET',
        url: `https://api.beehiiv.com/v2/publications/${process.env.PUBLICATION_ID}/subscriptions/by_email/${email}`,
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.BEEHIIV_KEY}`,
        }
      };

    try {
        const  response  = await axios.request(options);
        console.log("response in Beehivv check API",response.data);
        return NextResponse.json(response.data)
    } catch (error) {
        console.error("error in Beehivv check API",error);
        return NextResponse.json(error)
    }

}