const {MongoClient} = require('mongodb') //include mongodb module

//username: webscraper
//password: csci150


const uri = "mongodb+srv://webscraper:csci150@csci150-project-streame.chizztp.mongodb.net/?retryWrites=true&w=majority"; //connection URI to database
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }); //create instance of MongoClient using our URI
const database = client.db("TestDatabase"); //the database we are connecting to
var testCollection = database.collection("TestCollection")

//test function that inserts into the database
//Using it to test URLCollection
var link = "https://www.twitch.tv/gamergirl"



async function deleteALL(){

  client.connect(function(err){
    if(err) throw err;

    database.collection("TestCollection").deleteMany(function(err){
      if(err) throw err;

      console.log("deleted all");
      client.close();
    

    });


  });

};

deleteALL();

