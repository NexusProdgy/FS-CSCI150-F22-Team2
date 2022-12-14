//Ricardo Cabrera
//CSCI 150
//Project Streamer Discoverability

//Description:
//This program allows the user to manually rename a collection in the database

//The program performs the collection renaming thorugh an asynchronous function called rename()
//To run this program enter the command: 
/*
node database-renameCollection.js
*/



const {MongoClient} = require('mongodb') //include mongodb module

//username: webscraper
//password: csci150


const uri = "mongodb+srv://webscraper:csci150@csci150-project-streame.chizztp.mongodb.net/?retryWrites=true&w=majority"; //connection URI to database
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }); //create instance of MongoClient using our URI
const database = client.db("TestDatabase"); //the database we are connecting to

//Renaming Function
async function rename(){


    client.connect(function(err){ //connect to the database
        if(err) throw err; //if can't connect then throw error

        database.collection("World of Warcraft").rename("WorldofWarcraft", function(err){ //rename the Collection
            //Note: you must enter the collection you want to rename by changing the inputs
            //i.e. change "World of Warcraft" and "WorldofWarcraft"
            if(err) throw err //if there was an error

            client.close(); //close the connection to the database
        });

    });


    
};


rename(); //call the function
