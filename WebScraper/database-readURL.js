//Ricardo Cabrera
//CSCI 150
//Project Streamer Discoverability

//Description:
//This program allows the user to read all of the URL links that are stored in the URLCollection of the database
//It was used to test if we could successfully insert URL links from our website

//The program performs the database read thorugh an asynchronous function called read()
//To run this program enter the command: 
/*
node database-readURL.js
*/
//The program will then print out each document of the URLCollection


const {MongoClient} = require('mongodb') //include mongodb module

//username: webscraper
//password: csci150


const uri = "mongodb+srv://webscraper:csci150@csci150-project-streame.chizztp.mongodb.net/?retryWrites=true&w=majority"; //connection URI to database
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }); //create instance of MongoClient using our URI
const database = client.db("TestDatabase"); //the database we are connecting to


//Read function
async function read(){

   
   var projection = {_id: 0} //we don't need to display the _id field of the document
   var cursor = database.collection("URLCollection").find({}).project(projection) //creat a cursor that points to the URLCollection in the database
   var data //the URL Link we will display

   for await(const item of cursor){ //get each document that is stored in the collection

        data = item //the item is the data we want to display
        console.log(data); //print the URL Link to the terminal

   }


   await cursor.close(); //close the cursor
   client.close(); //close the connection to the database


       



};


read(); //call the read function