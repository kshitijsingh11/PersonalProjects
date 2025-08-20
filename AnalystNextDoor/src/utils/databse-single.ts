import sqlite3 from 'sqlite3';

// Function to run SQL queries against the in-memory database
export const runQuery = (sql: string, params: any[] = []): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    // Initialize a new SQLite database in memory
    const db = new sqlite3.Database(':memory:');

    // Execute the query to create the table
    const createTable1 = `
    CREATE TABLE user_event (
      user_id INTEGER,
      event_type TEXT,	
      channel	TEXT,
      product_id INT,
      date DATE
  );
    `;
    db.run(createTable1, (err) => {
      if (err) {
        //console.error('Table creation error:', err);
        db.close();
        reject(err);
      } else {
       
        const createTable2 = `
        CREATE TABLE user_purchase (
          user_id INTEGER,	
          product_id	INTEGER,
          date DATE
      );
          `
          
          db.run(createTable2, (err) => {
            if (err) {
              console.error('Table creation error:', err);
              db.close();
              reject(err);
            } else {


              // Execute the insertion query
              const insertTable1 = `
              INSERT INTO user_purchase VALUES 
                  (240,34,'2022-12-11'),
                  (241,21,'2022-12-02'),
                  (243,78,'2022-12-03'),
                  (245,67,'2022-12-06'),
                  (246,89,'2022-12-08'),
                  (247,43,'2022-12-11'),
                  (248,76,'2022-12-14'),
                  (249,99,'2022-12-12'),
                  (250,15,'2022-12-10'),
                  (250,15,'2022-12-13'),
                  (251,24,'2022-12-12'),
                  (252,56,'2022-12-11'),
                  (253,33,'2022-12-09'),
                  (254,87,'2022-12-13'),
                  (255,12,'2022-12-10'),
                  (256,45,'2022-12-12'),
                  (257,78,'2022-12-11'),
                  (258,23,'2022-12-08'),
                  (259,67,'2022-12-13'),
                  (260,99,'2022-12-12');
              `


        db.run(insertTable1, (insertErr) => {
          if (insertErr) {
            //console.error('Insertion error:', insertErr);
            db.close();
            reject(insertErr.message);
          } else {

            const insertTable2 = `
            INSERT INTO user_event VALUES 
            (240,'impression','Instagram',34,'2022-12-01'),
            (240,'impression','Facebook',34,'2022-12-06'),
            (240,'click','Email',34,'2022-12-10'),
            (241,'impression','Email',21,'2022-11-25'),
            (241,'click','Email',21,'2022-11-30'),
            (242,'impression','Instagram',12,'2022-12-03'),
            (242,'click','Email',12,'2022-12-05'),
            (243,'impression','Instagram',78,'2022-11-29'),
            (243,'click','Google',78,'2022-12-01'),
            (243,'click','Email',78,'2022-12-04'),
            (244,'impression','Instagram',55,'2022-12-02'),
            (244,'impression','Email',55,'2022-12-05'),
            (244,'click','Google',55,'2022-12-07'),
            (244,'click','Email',55,'2022-12-10'),
            (245,'impression','Email',67,'2022-12-01'),
            (246,'impression','Instagram',89,'2022-12-03'),
            (246,'click','Email',89,'2022-12-06'),
            (247,'impression','Google',43,'2022-12-02'),
            (247,'click','Facebook',43,'2022-12-05'),
            (247,'click','Email',43,'2022-12-08'),
            (248,'impression','Instagram',76,'2022-12-04'),
            (248,'click','Instagram',76,'2022-12-06'),
            (248,'click','Facebook',76,'2022-12-09'),
            (248,'click','Email',76,'2022-12-12'),
            (249,'impression','Facebook',99,'2022-12-02'),
            (249,'click','Facebook',99,'2022-12-04'),
            (249,'click','Instagram',99,'2022-12-07'),
            (249,'click','Email',99,'2022-12-10'),
            (250,'impression','Instagram',15,'2022-12-01'),
            (250,'impression','Facebook',15,'2022-12-04'),
            (250,'click','Email',15,'2022-12-07'),
            (250,'click','Google',15,'2022-12-09'),
            (251,'impression','Instagram',24,'2022-12-03'),
            (251,'impression','Email',24,'2022-12-05'),
            (251,'click','Email',24,'2022-12-08'),
            (251,'click','Google',24,'2022-12-10'),
            (252,'impression','Email',56,'2022-12-02'),
            (252,'click','Facebook',56,'2022-12-04'),
            (252,'click','Google',56,'2022-12-07'),
            (252,'click','Email',56,'2022-12-09'),
            (253,'impression','Instagram',33,'2022-12-01'),
            (253,'impression','Email',33,'2022-12-04'),
            (253,'click','Instagram',33,'2022-12-06'),
            (253,'click','Google',33,'2022-12-08'),
            (254,'impression','Facebook',87,'2022-12-03'),
            (254,'impression','Instagram',87,'2022-12-06'),
            (254,'click','Instagram',87,'2022-12-08'),
            (254,'click','Email',87,'2022-12-10'),
            (255,'impression','Instagram',12,'2022-12-02'),
            (255,'click','Google',12,'2022-12-05'),
            (255,'click','Email',12,'2022-12-08'),
            (255,'click','Google',12,'2022-12-11'),
            (256,'impression','Email',45,'2022-12-01'),
            (256,'impression','Instagram',45,'2022-12-04'),
            (256,'click','Email',45,'2022-12-06'),
            (256,'click','Google',45,'2022-12-09'),
            (257,'impression','Instagram',78,'2022-12-02'),
            (257,'impression','Email',78,'2022-12-05'),
            (257,'click','Google',78,'2022-12-10'),
            (258,'impression','Facebook',23,'2022-12-01'),
            (258,'click','Email',23,'2022-12-04'),
            (258,'click','Google',23,'2022-12-07'),
            (258,'click','Facebook',23,'2022-12-09'),
            (259,'impression','Instagram',67,'2022-12-03'),
            (259,'impression','Instagram',67,'2022-12-06'),
            (259,'click','Email',67,'2022-12-08'),
            (259,'click','Google',67,'2022-12-11'),
            (260,'impression','Email',99,'2022-12-02'),
            (260,'impression','Instagram',99,'2022-12-05'),
            (260,'click','Email',99,'2022-12-07'),
            (260,'click','Google',99,'2022-12-10');
            `

            db.run(insertTable2, (insertErr) => {
              if (insertErr) {
                //console.error('Insertion error:', insertErr);
                db.close();
                reject(insertErr.message);
              } else {
           
            // Execute the user query
            db.all(sql, params, (queryErr, rows) => {
              db.close();
              if (queryErr) {
                //console.error('Query execution error:', queryErr.message);
                if(queryErr.message.startsWith("SQLITE_MISUSE")){
                  reject("Enter A Valid Query")
                }
                const msg = "Error" + queryErr.message.slice(13)
                reject(msg);
              } else {
                
                resolve(rows);
              }
            });
          }
        });
      }});
      }});
  }});
})};

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
                  if (list1[i] !== list2[i]) {
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

//export const checkQuery = (correctQuery: string, userResponse:any[]=[], params: any[] = []): Promise<any[]> => {
export const checkQuery = (userResponse:any[]=[], params: any[] = []): Promise<boolean | any[]> => {
  return new Promise((bool, reject) => {
    // Initialize a new SQLite database in memory
    const db = new sqlite3.Database(':memory:');
    const correctQuery = `
            WITH base AS (
              SELECT user_id, 
                    product_id, 
                    channel,
                    date,
                    ROW_NUMBER() OVER (PARTITION BY user_id, product_id ORDER BY date) AS rn
              FROM user_event
              WHERE event_type = 'click' -- Consider only click events
          ),
          
          -- Filter the base table to only keep the first touchpoint for each user and product.
          first_touch AS (
              SELECT user_id, 
                    product_id, 
                    channel,
                    date
              FROM base
              WHERE rn = 1 -- Select only the rows where the row number is 1 (the first interaction)
          ),
          
          -- Calculate the number of conversions for each channel
          conversions AS (
              SELECT channel, 
                    COUNT(DISTINCT user_purchase.user_id) AS conversion_count
              FROM first_touch
              -- joining with user_purchase to identify purchases made by users who had their first interaction through each channel.
              INNER JOIN user_purchase ON first_touch.user_id = user_purchase.user_id 
                                        AND first_touch.product_id = user_purchase.product_id
                                        AND user_purchase.date >= first_touch.date
              GROUP BY channel
          ),
          
          -- Calculate the reach count - number of unique users who interacted with the campaign through that channel.
          channel_reach AS (
              SELECT channel, 
                    COUNT(DISTINCT user_id) AS reach_count
              FROM user_event
              GROUP BY 1
          ),
              
          -- Calculate the conversion percentage for each channel.
          attribution AS (
              SELECT cr.channel, 
                    COALESCE(c.conversion_count, 0) * 1.0 / cr.reach_count AS conversion_percentage
              FROM channel_reach cr
              LEFT JOIN conversions c ON cr.channel = c.channel
          )
          
          -- Formatted Final Output
          SELECT channel, 
                ROUND(conversion_percentage, 3)
          FROM attribution
          ORDER BY conversion_percentage DESC;
    
    `

    // Execute the query to create the table
    const createTable1 = `
    CREATE TABLE user_event (
      user_id INTEGER,
      event_type TEXT,	
      channel	TEXT,
      product_id INT,
      date DATE
  );
    `;
    db.run(createTable1, (err) => {
      if (err) {
        //console.error('Table creation error:', err);
        db.close();
        reject(err);
      } else {
       
        const createTable2 = `
            CREATE TABLE user_purchase (
              user_id INTEGER,	
              product_id	INTEGER,
              date DATE
          );
          `
          
          db.run(createTable2, (err) => {
            if (err) {
              //console.error('Table creation error:', err);
              db.close();
              reject(err);
            } else {


              // Execute the insertion query
              const insertTable1 = `
              INSERT INTO user_purchase VALUES 
                (240,34,'2022-12-11'),
                (241,21,'2022-12-02'),
                (243,78,'2022-12-03'),
                (245,67,'2022-12-06'),
                (246,89,'2022-12-08'),
                (247,43,'2022-12-11'),
                (248,76,'2022-12-14'),
                (249,99,'2022-12-12'),
                (250,15,'2022-12-10'),
                (250,15,'2022-12-13'),
                (251,24,'2022-12-12'),
                (252,56,'2022-12-11'),
                (253,33,'2022-12-09'),
                (254,87,'2022-12-13'),
                (255,12,'2022-12-10'),
                (256,45,'2022-12-12'),
                (257,78,'2022-12-11'),
                (258,23,'2022-12-08'),
                (259,67,'2022-12-13'),
                (260,99,'2022-12-12');
              `


        db.run(insertTable1, (insertErr) => {
          if (insertErr) {
            console.error('Insertion error:', insertErr);
            db.close();
            reject(insertErr.message);
          } else {

            const insertTable2 = `
            INSERT INTO user_event VALUES 
              (240,'impression','Instagram',34,'2022-12-01'),
              (240,'impression','Facebook',34,'2022-12-06'),
              (240,'click','Email',34,'2022-12-10'),
              (241,'impression','Email',21,'2022-11-25'),
              (241,'click','Email',21,'2022-11-30'),
              (242,'impression','Instagram',12,'2022-12-03'),
              (242,'click','Email',12,'2022-12-05'),
              (243,'impression','Instagram',78,'2022-11-29'),
              (243,'click','Google',78,'2022-12-01'),
              (243,'click','Email',78,'2022-12-04'),
              (244,'impression','Instagram',55,'2022-12-02'),
              (244,'impression','Email',55,'2022-12-05'),
              (244,'click','Google',55,'2022-12-07'),
              (244,'click','Email',55,'2022-12-10'),
              (245,'impression','Email',67,'2022-12-01'),
              (246,'impression','Instagram',89,'2022-12-03'),
              (246,'click','Email',89,'2022-12-06'),
              (247,'impression','Google',43,'2022-12-02'),
              (247,'click','Facebook',43,'2022-12-05'),
              (247,'click','Email',43,'2022-12-08'),
              (248,'impression','Instagram',76,'2022-12-04'),
              (248,'click','Instagram',76,'2022-12-06'),
              (248,'click','Facebook',76,'2022-12-09'),
              (248,'click','Email',76,'2022-12-12'),
              (249,'impression','Facebook',99,'2022-12-02'),
              (249,'click','Facebook',99,'2022-12-04'),
              (249,'click','Instagram',99,'2022-12-07'),
              (249,'click','Email',99,'2022-12-10'),
              (250,'impression','Instagram',15,'2022-12-01'),
              (250,'impression','Facebook',15,'2022-12-04'),
              (250,'click','Email',15,'2022-12-07'),
              (250,'click','Google',15,'2022-12-09'),
              (251,'impression','Instagram',24,'2022-12-03'),
              (251,'impression','Email',24,'2022-12-05'),
              (251,'click','Email',24,'2022-12-08'),
              (251,'click','Google',24,'2022-12-10'),
              (252,'impression','Email',56,'2022-12-02'),
              (252,'click','Facebook',56,'2022-12-04'),
              (252,'click','Google',56,'2022-12-07'),
              (252,'click','Email',56,'2022-12-09'),
              (253,'impression','Instagram',33,'2022-12-01'),
              (253,'impression','Email',33,'2022-12-04'),
              (253,'click','Instagram',33,'2022-12-06'),
              (253,'click','Google',33,'2022-12-08'),
              (254,'impression','Facebook',87,'2022-12-03'),
              (254,'impression','Instagram',87,'2022-12-06'),
              (254,'click','Instagram',87,'2022-12-08'),
              (254,'click','Email',87,'2022-12-10'),
              (255,'impression','Instagram',12,'2022-12-02'),
              (255,'click','Google',12,'2022-12-05'),
              (255,'click','Email',12,'2022-12-08'),
              (255,'click','Google',12,'2022-12-11'),
              (256,'impression','Email',45,'2022-12-01'),
              (256,'impression','Instagram',45,'2022-12-04'),
              (256,'click','Email',45,'2022-12-06'),
              (256,'click','Google',45,'2022-12-09'),
              (257,'impression','Instagram',78,'2022-12-02'),
              (257,'impression','Email',78,'2022-12-05'),
              (257,'click','Google',78,'2022-12-10'),
              (258,'impression','Facebook',23,'2022-12-01'),
              (258,'click','Email',23,'2022-12-04'),
              (258,'click','Google',23,'2022-12-07'),
              (258,'click','Facebook',23,'2022-12-09'),
              (259,'impression','Instagram',67,'2022-12-03'),
              (259,'impression','Instagram',67,'2022-12-06'),
              (259,'click','Email',67,'2022-12-08'),
              (259,'click','Google',67,'2022-12-11'),
              (260,'impression','Email',99,'2022-12-02'),
              (260,'impression','Instagram',99,'2022-12-05'),
              (260,'click','Email',99,'2022-12-07'),
              (260,'click','Google',99,'2022-12-10');
            `

            db.run(insertTable2, (insertErr) => {
              if (insertErr) {
                //console.error('Insertion error:', insertErr);
                db.close();
                reject(insertErr.message);
              } else {
            

            // Execute the user query
            db.all(correctQuery, params, (queryErr, rows) => {
             
              db.close();
              if (queryErr) {
                //console.error('Query execution error:', queryErr);
                reject(queryErr.message);
              } else {
                const set1 = jsonToSetOfLists(rows);
                const set2 = jsonToSetOfLists(userResponse);
                //@ts-ignore
                if(compareSetsOfLists(set1, set2)){
                  bool(true)
                }    
                  bool(false)
              }
              
            });
          }
        });
      }
    });
  }});
  }});
  });
};


