import {Pool} from "pg";
import { GetPotw } from "./neon-db";

const pool = new Pool({
  connectionString: process.env.USER_DATABASE_URL,
  ssl: true,
})

export async function getUserSubs(userid : string, qid: string,timezone: string) {
    const client = await pool.connect();
    try {
     
      const response =await client.query(`select * from user_data.sub where userid = '${userid}' and qid = '${qid}'
      ORDER BY timestamp at time zone '${timezone}' DESC`);
    
      return response.rows;
  } finally {
      client.release();
  }
  }

export async function getPOTWCheck(userid : string) {
    const potw = await GetPotw();
    const qid = potw[0].qid   
    const client = await pool.connect();
    try {
      const response = await client.query(`select * from user_data.sub where userid = '${userid}' and qid = '${qid}' and status = true`);
      
      return response.rows;
  } finally {
      client.release();
  }
  }

export async function addUserSub(userid : string, qid: string, code: string, status: boolean, timezone: string) {
  const client = await pool.connect();
    try {
      
      const response = await client.query(`INSERT INTO user_data.sub (userid, qid, code, status, timestamp) 
      VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP AT TIME ZONE $5)`, 
      [userid, qid, code, status, timezone]
    );
      return response.rows;
    }
    catch(e){
      //@ts-ignore
      console.log("Error is addUserSubs : ", e.message)
    } finally {
      client.release();
  }
  }