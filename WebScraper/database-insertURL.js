const {MongoClient} = require('mongodb') //include mongodb module

//username: webscraper
//password: csci150


const uri = "mongodb+srv://webscraper:csci150@csci150-project-streame.chizztp.mongodb.net/?retryWrites=true&w=majority"; //connection URI to database
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }); //create instance of MongoClient using our URI
const database = client.db("TestDatabase"); //the database we are connecting to
var testCollection = database.collection("URLCollection")
const commandArgs = process.argv.slice(2)

//test function that inserts into the database
//Using it to test URLCollection
var link = commandArgs[0]
var link2 = commandArgs[0]
//console.log(commandArgs)
//console.log(link2)

async function insert(){

    var projection = {_id: 0}
    var cursor = database.collection("URLCollection").find({}).project(projection)
    var data

    client.connect(function(err){ //connecting the database
        if(err) throw err; //if can't connect then throw error

        var myData = {URL: link}; //test data to insert
        database.collection("URLCollection").insertOne(myData,function(err){ //insert into a specific collection in the database
            if(err) throw err //if can't insert then throw error
            console.log("Insert Success") //if insert was success display message
            
            client.close(); //close the connection
        });


    });

    /*
    process.argv.forEach(function(val, index, array){
        console.log(index + ': ' + val)

    });
    */


};






insert();