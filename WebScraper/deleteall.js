//Ricardo Cabrera
//CSCI 150
//Project Streamer Discoverability

//Description:
//This program allows the user to manually delete all of the documents in a collection

//The program performs the document removal thorugh an asynchronous function called deleteALL()
//To run this program enter the command: 
/*
node database-deleteall.js "your collection name here"
*/



const {MongoClient} = require('mongodb') //include mongodb module

//username: webscraper
//password: csci150



const uri = "mongodb+srv://webscraper:csci150@csci150-project-streame.chizztp.mongodb.net/?retryWrites=true&w=majority"; //connection URI to database
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }); //create instance of MongoClient using our URI
const database = client.db("TestDatabase"); //the database we are connecting to
const commandArgs = process.argv.slice(2) //the Collection the user enters

var collectionName = commandArgs[0] //get the Collection name from the command line arguments


//Document removal function
async function deleteALL(){

  client.connect(function(err){ //connect to the database
    if(err) throw err; //if an error occurs

    database.collection(collectionName).deleteMany(function(err){ //delete all of the document in the given collection
      if(err) throw err; //if an error happened

      console.log("deleted all"); //display confirmation of document removal
      client.close(); //close the connection to the database
    

    });


  });

};

deleteALL(); //call the function

