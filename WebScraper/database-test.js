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

async function insert(){

    client.connect(function(err){ //connecting the database
        if(err) throw err; //if can't connect then throw error

        var myData = {URL: link}; //test data to insert
        database.collection("URLCollection").insertOne(myData, function(err){ //insert into a specific collection in the database
            if(err) throw err //if can't insert then throw error
            console.log("Insert Success") //if insert was success display message
            client.close(); //close the connection
        });


    });


};




async function read(){




    /*
    client.connect(function(err){ //connecting the database
        if(err) throw err; //if can't connect then throw error

        database.collection("TestCollection").find({}).toArray(function(err,item){
            if(err) throw err
            console.log(item);
            client.close();
        });


    });
    */

    /*

    database.collection("TestCollection").find({}).toArray(function(err,item){
        if(err) throw err
        console.log(item);
        client.close();
    });
    */
   
   var projection = {_id: 0}
   var cursor = database.collection("URLCollection").find({}).project(projection)
   var data

   for await(const item of cursor){

        data = item
        console.log(data);

   }


   await cursor.close();
   client.close();


       



};

//insert();
read();