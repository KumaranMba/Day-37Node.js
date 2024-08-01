// import the module 
const express = require('express');
const app = express();

// To create a file system 
const fs = require('fs');

// To write a content in the file
const content = `\nCurrent Date-time is:${new Date().toISOString()}`;


// set the endpoint
// set the route
app.get('/',(request,response)=>{
    response.send('Current Date-time written in the textfile successfully!');
    
fs.writeFile('./date-time.txt',content,{flag:'w+'},err =>{
    if(err) console.log(err);
    console.log("content written successfully!");
});
});

// define the server hostname and portnumber
const HOSTNAME = '127.0.0.1'; // localhost
const PORT = 3001;

// make the server to listen to the defined portnumber
app.listen(PORT,()=>{
    console.log(`server running at http://${HOSTNAME}:${PORT}`);
});

