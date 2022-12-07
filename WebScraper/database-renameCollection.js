const {MongoClient} = require('mongodb') //include mongodb module

//username: webscraper
//password: csci150


const uri = "mongodb+srv://webscraper:csci150@csci150-project-streame.chizztp.mongodb.net/?retryWrites=true&w=majority"; //connection URI to database
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }); //create instance of MongoClient using our URI
const database = client.db("TestDatabase"); //the database we are connecting to
var testCollection = database.collection("URLCollection")


const categoryList = [];
categoryList.push("League of Legends")
categoryList.push("VALORANT")
categoryList.push("Overwatch 2")
categoryList.push("Just Chatting")



async function rename(){


    client.connect(function(err){
        if(err) throw err; //if can't connect then throw error

        database.collection("World of Warcraft").rename("WorldofWarcraft", function(err){
            if(err) throw err

            client.close();
        });

    });


    //client.close();
};


rename();
