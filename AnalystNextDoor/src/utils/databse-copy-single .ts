

import sqlite3 from 'sqlite3';

// Function to run SQL queries against the in-memory database
export const runQuery = (sql: string, params: any[] = []): Promise<any[]> => {
  
  return new Promise((resolve, reject) => {
    // Initialize a new SQLite database in memory
    const db = new sqlite3.Database(':memory:');

    // Execute the query to create the table
    const createTable = `
      CREATE TABLE IF NOT EXISTS employee_details (
        emp_id VARCHAR(8),
        emp_name VARCHAR(20),
        emp_dept_id VARCHAR(20),
        emp_age INT
      );
    `;
    db.run(createTable, (err) => {
      if (err) {
        console.error('Table creation error:', err);
        db.close();
        reject(err);
      } else {
       

        // Execute the insertion query
        const insertTable = `
          INSERT INTO employee_details (emp_id, emp_name, emp_dept_id, emp_age)
          VALUES 
            ('E40004', 'SANTHOSH', 'E102', 25),
            ('E40005', 'THAMAN', 'E103', 26),
            ('E40006', 'HARSH', 'E101', 25),
            ('E40007', 'SAMHITH', 'E102', 26);
        `;
        db.run(insertTable, (insertErr) => {
          if (insertErr) {
            console.error('Insertion error:', insertErr);
            db.close();
            reject(insertErr.message);
          } else {
           
            // Execute the user query
            db.all(sql, params, (queryErr, rows) => {
              db.close();
              if (queryErr) {
                console.error('Query execution error:', queryErr.message);
                reject(queryErr.message);
              } else {
                resolve(rows);
              }
            });
          }
        });
      }
    });
  });
};

//export const checkQuery = (correctQuery: string, userResponse:any[]=[], params: any[] = []): Promise<any[]> => {
export const checkQuery = (userResponse:any[]=[], params: any[] = []): Promise<boolean | any[]> => {
  return new Promise((bool, reject) => {
    // Initialize a new SQLite database in memory
    const db = new sqlite3.Database(':memory:');
    const correctQuery = `SELECT * FROM employee_details`

    // Execute the query to create the table
    const createTable = `
      CREATE TABLE IF NOT EXISTS employee_details (
        emp_id VARCHAR(8),
        emp_name VARCHAR(20),
        emp_dept_id VARCHAR(20),
        emp_age INT
      );
    `;
    db.run(createTable, (err) => {
      if (err) {
        console.error('Table creation error:', err);
        db.close();
        reject(err);
      } else {
       

        // Execute the insertion query
        const insertTable = `
          INSERT INTO employee_details (emp_id, emp_name, emp_dept_id, emp_age)
          VALUES 
            ('E40004', 'SANTHOSH', 'E102', 25),
            ('E40005', 'THAMAN', 'E103', 26),
            ('E40006', 'HARSH', 'E101', 25),
            ('E40007', 'SAMHITH', 'E102', 26);
        `;
        db.run(insertTable, (insertErr) => {
          if (insertErr) {
            console.error('Insertion error:', insertErr);
            reject(insertErr);
            db.close();
          } else {
            

            // Execute the user query
            db.all(correctQuery, params, (queryErr, rows) => {
             
              db.close();
              if (queryErr) {
                console.error('Query execution error:', queryErr);
                reject(queryErr.message);
              } else {
                if(JSON.stringify(userResponse) === JSON.stringify(rows)){
                  bool(true)
                }    
                  bool(false)
              }
              
            });
          }
        });
      }
    });
  });
};

