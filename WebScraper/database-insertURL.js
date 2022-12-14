//Ricardo Cabrera
//CSCI 150
//Project Streamer Discoverability

//Description:
//This program allows the user to manually insert a Twitch stream URL as a document into the URLCollection of our MongoDB database
//It was used to test if our web scraper could communicate with our database
//Another purpose for this program was to check if the web scraper could read a URL from the database and then use it to go to a 
//Twitch stream and scrape data

//The program performs the database insert thorugh an asynchronous function called insert()
//To run this program enter the command: 
/*
node database-insertURL.js "your Twitch URL Link here"
*/
//The program will then use the Twitch URL you submit and insert it into the URLCollection





const {MongoClient} = require('mongodb') //include mongodb module

//username: webscraper
//password: csci150


const uri = "mongodb+srv://webscraper:csci150@csci150-project-streame.chizztp.mongodb.net/?retryWrites=true&w=majority"; //connection URI to database
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }); //create instance of MongoClient using our URI
const database = client.db("TestDatabase"); //the database we are connecting to
const commandArgs = process.argv.slice(2) //the Twitch URL the user enters

//function that inserts into the database
//Using it to test URLCollection
var link = commandArgs[0] //get the URL from the command line arguments


//Insert Function
async function insert(){

    var projection = {_id: 0} //don't need the _id field of the document
    var cursor = database.collection("URLCollection").find({}).project(projection) //create a cursor that points to the URLCollection in the database

    client.connect(function(err){ //connecting the database
        if(err) throw err; //if can't connect then throw error

        var myData = {URL: link}; //data to insert as a document into the collection, in JSON format
        database.collection("URLCollection").insertOne(myData,function(err){ //insert into a specific collection in the database
            if(err) throw err //if can't insert then throw error
            console.log("Insert Success") //if insert was success display message
            
            client.close(); //close the connection
        });


    });



};






insert(); //call the insert function