//Adding External Node.js Modules
const puppeteer = require('puppeteer') //include puppeteer module
const fs = require('fs') //include filestream module
const readline = require('readline') //include readline module
const {MongoClient} = require('mongodb') //include mongodb module

//const uri = "mongodb+srv://webscraper:csci150@csci150-project-streame.chizztp.mongodb.net/?retryWrites=true&w=majority"; //connection URI to database
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }); //create instance of MongoClient using our URI



//Connect to database using basic if statement
/*
client.connect(function (err){

   if(err){
      console.error("Connection Error");
   }else{
      console.error("Connected");
   }

});

client.close();
*/



//Connect to database using try catch block
/*
try {
   client.connect();


} catch (err){
   console.error("Connection Error");
};

client.close();
*/


//Connect to the database and insert data
//I'm using this implementation as it works
//Further testing may be needed
/*
client.connect(function(err){
   if(err) throw err;

   
   //var myData = {category: "Test", title: "Test Stream", URL: "twitch.tv", name: "Test1"};
   database.collection("TestCollection").insertOne(data, function(err){
       if(err) throw err
       console.log("Insert Success")
       client.close();
   });
   

   //client.close();

});
*/

const categoryList = [];
categoryList.push("League of Legends")
categoryList.push("VALORANT")
categoryList.push("Overwatch 2")
categoryList.push("Just Chatting")
categoryList.push("World of Warcraft")
categoryList.push("Minecraft")


//Web Scraper Function
async function scrape() {
   const browser = await puppeteer.launch({}) //create a new web browser instance
   const page = await browser.newPage() //create page variable that will be used to navigate to Twitch.tv web page
   const readStream = fs.createReadStream('urlFile.txt') //creating a read stream from a given input file
   const uri = "mongodb+srv://webscraper:csci150@csci150-project-streame.chizztp.mongodb.net/?retryWrites=true&w=majority"; //connection URI to database
   const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }); //create instance of MongoClient using our URI

   const database = client.db("TestDatabase"); //database we are connecting to
   var testCollection = database.collection("TestCollection")
   /*
   client.connect(function (err){

      if(err){
         console.error("Connection Error");
      }else{
         console.error("Connected");
      }
   
   });
   */
   
   
  
   //Truncating the output file to delete previous data
   //Using asynchronous writeFile function
   /*
   fs.writeFile('output.txt', '', err => {if (err){ 
      throw err} console.log(err)})
         
       
     
   //Reading from the input file one URL at a time
   //Use crlfDelay to allow program to recognize newline and carriage return
   const readLine = readline.createInterface({
      input: readStream,
      crlfDelay : Infinity
   })
   */


   var projection = {_id: 0, URL: 1}
   var cursor = database.collection("URLCollection").find({}).project(projection)


   //For each URL in the URLCollection of the Database, scrape the stream properties we need and insert them into a Collection in the Database
   for await (const item of cursor){
      var link = item.URL //the URL from the input file becomes the link that the variable page uses to navigate

      //Try catch block
      //If the streamer is not live then return an error
      try{
       await page.goto(link) //telling the page to navigate to a given Twitch.tv web page for a streamer
       /*
       var element = await page.waitForSelector("#live-channel-stream-information > div > div > div > div > div.Layout-sc-nxg1ff-0.wEGRY > div", {timeout: 7000})
       var isLive = await page.evaluate(element => element.textContent, element)
       */
       /*
       var element2 = await page.waitForSelector("#live-channel-stream-information > div > div > div > div > div.Layout-sc-nxg1ff-0.jYkTYc > div.Layout-sc-nxg1ff-0.bBfGll > div.Layout-sc-nxg1ff-0.jUcRho > div > div.Layout-sc-nxg1ff-0.cQQfqe > div.Layout-sc-nxg1ff-0.eLwvPK > div:nth-child(1) > div > p > span")
       var viewCount = await page.evaluate(element2 => element2.textContent, element2)
       */
    
       //Scraping the stream category
       //Maximum timeout time is N seconds
       //If more than N seconds has passed, that means the streamer is not live -> error
       var element3 = await page.waitForSelector("#live-channel-stream-information > div > div > div > div > div.Layout-sc-1xcs6mc-0.chGnpF > div.Layout-sc-1xcs6mc-0.bMvWIE > div.Layout-sc-1xcs6mc-0.elJsHR > div > div:nth-child(2) > div > div > div.Layout-sc-1xcs6mc-0.dlwAAo > a", {timeout: 2900})
       var category = await page.evaluate(element3 => element3.textContent, element3)

       if(categoryList.includes(category)){

         console.log("URL:", link,",Category:", category, "Is in database");
         //Scraping the stream title
         var element4 = await page.waitForSelector("#live-channel-stream-information > div > div > div > div > div.Layout-sc-1xcs6mc-0.chGnpF > div.Layout-sc-1xcs6mc-0.bMvWIE > div.Layout-sc-1xcs6mc-0.elJsHR > div > div.Layout-sc-1xcs6mc-0.BcKcx > h2")
         var streamTitle = await page.evaluate(element4 => element4.textContent, element4)

         //Scraping the streamer name
         var element0 = await page.waitForSelector("#live-channel-stream-information > div > div > div > div > div.Layout-sc-1xcs6mc-0.chGnpF > div.Layout-sc-1xcs6mc-0.wDxTQ.metadata-layout__support > div.Layout-sc-1xcs6mc-0.beAYWq > a > h1")
         var streamerName = await page.evaluate(element0 => element0.textContent, element0)


         //console.log(isLive)
         //console.log(viewCount)
         console.log(category) //print the stream category to the console
         console.log(streamTitle) //print the stream title to the console
         console.log(link) //print the stream URL to the console
         console.log(streamerName) //print the streamer name to the console

         //obj = {category: category, title: streamTitle, URL: link, name: streamerName} //JSON format object

         var data = {category: category, title: streamTitle, URL: link, name: streamerName}

         //myJSON = JSON.stringify(obj) //creating the JSON to be sent to the database

         var dbcategory = category.split(" ").join("");

         client.connect(function(err){ //connect to the database
            if(err) throw err; //if we can't connect then throw error
    
            
            
            database.collection(dbcategory).insertOne(data, function(err){ //insert the stream properties into the database
                if(err) throw err //if we can't insert then throw error
                console.log("Insert Success") //the insert was successful
                client.close(); //close the connection to the database
            });
            
            
    
            //client.close();
    
          });

       }else{

         console.log("Error:", "URL:", link, ",Category:", category, "Is not in database");
       }


       
       //Writing the JSON to the output file
       //New entries will be appended to the file using newline
       /*
       fs.writeFile('output.txt', myJSON + '\n', {flag: 'a'}, err => {if (err){ 
         throw err} console.log(err)})
      */
         /*
         client.connect(function (err){

            if(err){
               console.error("Connection Error");
            }else{
               console.error("Connected");


               
               testCollection.insertOne(data, function (err){
                  if(err){
                     console.log("Insert error")
                     
                  }else{
                     console.log("insert success")
                  }
                  
               });
               
               
            }
            client.close(); //close the MongoClient instance
         
         });
         */
         

         
   
      } catch (error){



      }

     
   
      
     


   }
   


   browser.close() //close the web browser instance
   await cursor.close(); //close the cursor when we are done with it
   client.close(); //close the MongoClinet Instance
   //client.close(); //close the MongoClient instance


   
}

//Web Scraper Function Call
//Prints error (if any) to the terminal
scrape().catch(console.error)

