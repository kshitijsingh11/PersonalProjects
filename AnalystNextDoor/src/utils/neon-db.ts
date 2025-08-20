import {Pool} from "pg";
import { stringify } from "querystring";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
})


export async function getData(qid:string) {
    const client = await pool.connect();
    try {
      await client.query('set search_path to metadata');
      const response = await client.query(`select * from questions where qid = 'q${qid}' `);
      
      return response.rows[0];
  } finally {
      client.release();
  }
  }

  
export async function getAllQuestions() {
    const client = await pool.connect();
    try {
      await client.query('set search_path to metadata');
      const response = await client.query(`select * from questions`);
      
      return response.rows;
  } finally {
      client.release();
  }
  }

  export async function runUserQuery(qid:string,userQuery:string) {
    const client = await pool.connect();
    try {
      await client.query(`set search_path to q${qid}`);
      const response = await client.query(userQuery);

      return response.rows;
  }
  catch(e){
      //@ts-ignore
      return e.message
  }
  finally {
      client.release();
  }
  }



  function jsonToSetOfLists(jsonData: any[]) {
    let setOfLists = new Set();
  
    // Iterate over each object in the JSON array
    for (let obj of jsonData) {
        // Extract values from the object and create a list
        let list = Object.values(obj);
        // Add the list to the set
        setOfLists.add(list);
    }
  
    return setOfLists;
  }
  
  function compareSetsOfLists(set1: Set<any[]>, set2: Set<any[]>) {
    // Check if the sets have the same size
    if (set1.size !== set2.size) {
        return false;
    }
  
    // Iterate over each list in set1\
    // @ts-ignore
    for (let list1 of set1) {
        // Flag to check if list1 exists in set2
        let found = false;
  
        // Iterate over each list in set2 to find a match for list1
          // @ts-ignore
        for (let list2 of set2) {
            // Check if the lists have the same length
            if (list1.length === list2.length) {
                // Check if the lists are equal element by element
                let isEqual = true;
                for (let i = 0; i < list1.length; i++) {
                  // Little buggy when we try to compare dates
                    if ((list1[i]) !== (list2[i])) {
                       
                        isEqual = false;
                        break;
                    }
                }
                // If the lists are equal, set found flag to true
                if (isEqual) {
                    found = true;
                    break;
                }
            }
        }
  
        // If list1 is not found in set2, return false
        if (!found) {
            return false;
        }
    }
  
    // If all lists in set1 are found in set2, return true
    return true;
  }

  
  export async function checkQuery(qid:string,userResponse:any,correctQuery:string,usercode:string) {
    const client = await pool.connect();
    try {
      await client.query(`set search_path to q${qid}`);
      const response = await client.query(correctQuery);
      const set1 = jsonToSetOfLists(userResponse);
      const set2 = jsonToSetOfLists(response.rows);

  //@ts-ignore
      return compareSetsOfLists(set1, set2);
  } finally {
      client.release();
  }
  }

  export async function testConnection(qid:string) {
    const data = await getData(qid);
    return data
  }

  
  export async function getQuestionsList(){
    const client = await pool.connect();
    try {
      await client.query('set search_path to metadata');
      const response = await client.query(`select * from questions`);
      
      return response.rows;
  } finally {
      client.release();
  }
  }

  export async function GetPotw(){
    const client = await pool.connect();
    try {
      await client.query('set search_path to metadata');
      const response = await client.query(`select * from potw where qactive = true`);
      
      return response.rows;
  } finally {
      client.release(); }

  }

  