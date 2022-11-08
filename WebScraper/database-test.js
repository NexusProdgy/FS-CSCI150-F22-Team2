const {MongoClient} = require('mongodb') //include mongodb module

//username: webscraper
//password: csci150


const uri = "mongodb+srv://webscraper:csci150@csci150-project-streame.chizztp.mongodb.net/?retryWrites=true&w=majority"; //connection URI to database
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }); //create instance of MongoClient using our URI
const database = client.db("TestDatabase");
var testCollection = database.collection("TestCollection")

async function insert(){

    client.connect(function(err){
        if(err) throw err;

        var myData = {category: "Test", title: "Test Stream", URL: "twitch.tv", name: "Test1"};
        database.collection("TestCollection").insertOne(myData, function(err){
            if(err) throw err
            console.log("Insert Success")
        });


    });


    client.close();
};

insert();