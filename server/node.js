const express=require('express');
const cors=require('cors');
const bodyParser = require('body-parser');

// sql
const mysql = require('mysql2');

//define hostname and port
const hostname='127.0.0.1';
const port=3001;

//create an express application
const app=express();
app.use(cors());
app.use(bodyParser.json());

// establish connection
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'nodejs'
});
// //define a route handler for get requests to '/details'
// app.post('/details',(req,res)=>{
//     // console.info('Request query paramenters:',req.query);
//     const { username, password } = req.body;
//     // res.send('Recieved your request');
//     // if(username=='alson'){
//     //     res.send("login succesfyll");
//     if (username && password) {
//         // Send the username as response (you can customize the response data as needed)
//         res.json({ username });
//     } else {
//         res.status(401).send("Login failed"); // Send a 401 Unauthorized status for failed login
//     }
//     // }
//     res.send('hi');
// node});


app.post('/details', (req, res) => {
    const { username, password } = req.body;

    // Query the database to check if the provided username and password match
    pool.query('SELECT * FROM loginuser WHERE user_name = ? AND user_pass = ?', [username, password], (error, results, fields) => {
        if (error) {
            console.error('Error executing query', error);
            res.status(500).send('Internal Server Error');
            return;
        }

        if (results.length > 0) {
            // User authenticated
            res.status(200).json({username, message: 'Login successful' });
        } else {
            // No user found with the provided username and password
            res.status(401).json({username, message: 'Invalid username or password' });
        }
    });
});


//start the express server
app.listen(port,hostname,() => {
    console.info('Server running at http://'+hostname+':'+port+'/');
});