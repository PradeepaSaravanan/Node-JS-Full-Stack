1.Go to Accounts_CRUD folder.
2. Execute the  following commands
   2.1.  npm i
   2.2. open the config file and update the credentials, database name and port number.
   2.3. npm start
3. Server will run with port 5000 as mentioned in Config file.

GET: http://localhost:5000/api/v1/accounts
POST: http://localhost:5000/api/v1/accounts
PUT: http://localhost:5000/api/v1/accounts/:id
DELETE: http://localhost:5000/api/v1/accounts/:id

Sample Data:
{
    "id":5,
    "account_number":897654368,
    "account_name":"Kannan",
    "account_type":"Student",
    "balance":403300,
    "opening_date":"2000-09-23",
    "last_transaction_date": "2023-10-2",
    "status":"Inactive",
    "branch_name":"Madhapur"
    
}
        