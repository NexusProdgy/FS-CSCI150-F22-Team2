//Ricardo Cabrera
//CSCI 150
//Project Streamer Discoverability

//Description:
//

//The program performs the URL verification through an asynchronous function called scrape()
//To run this program enter the command: 
/*
node first-verify-webscraper.js 
*/



//Adding External Node.js Modules
const puppeteer = require('puppeteer') //include puppeteer module
const {MongoClient} = require('mongodb') //include mongodb module

//const uri = "mongodb+srv://webscraper:csci150@csci150-project-streame.chizztp.mongodb.net/?retryWrites=true&w=majority"; //connection URI to database
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }); //create instance of MongoClient using our URI


const categoryList = []; //the categories that are displayed on our webiste
categoryList.push("League of Legends")
categoryList.push("VALORANT")
categoryList.push("Overwatch 2")
categoryList.push("Just Chatting")
categoryList.push("World of Warcraft")
categoryList.push("Minecraft")


const viewCountRange = 100; //the live viewer count range


//Web Scraper Function
async function scrape() {
   const browser = await puppeteer.launch({}) //create a new web browser instance
   const page = await browser.newPage() //create page variable that will be used to navigate to Twitch.tv web page
   const uri = "mongodb+srv://webscraper:csci150@csci150-project-streame.chizztp.mongodb.net/?retryWrites=true&w=majority"; //connection URI to database
   const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }); //create instance of MongoClient using our URI

   const database = client.db("TestDatabase"); //database we are connecting to
   
   


   var projection = {_id: 1, URL: 1}
   var cursor = database.collection("URLCollection").find({}).project(projection) //create a cursor that points to the URLCollection of the database


   //For each URL in the URLCollection of the Database, scrape the stream properties we need and use them to verify the stream URL
   for await (const item of cursor){
      var link = item.URL //the URL from the input file becomes the link that the variable page uses to navigate
      var data = {URL: link} //the URL from the URLCollection

      //Try catch block
      //If the streamer is not live then return an error
      try{
       await page.goto(link) //telling the page to navigate to a given Twitch.tv web page for a streamer
       
       
    
       //Scraping the stream category
       //Maximum timeout time is N seconds
       //If more than N seconds has passed, that means the streamer is not live -> error
       var element3 = await page.waitForSelector("#live-channel-stream-information > div > div > div > div > div.Layout-sc-1xcs6mc-0.chGnpF > div.Layout-sc-1xcs6mc-0.bMvWIE > div.Layout-sc-1xcs6mc-0.elJsHR > div > div:nth-child(2) > div > div > div.Layout-sc-1xcs6mc-0.dlwAAo > a", {timeout: 5000})
       var category = await page.evaluate(element3 => element3.textContent, element3) //get the stream category


       var element2 = await page.waitForSelector("#live-channel-stream-information > div > div > div > div > div.Layout-sc-1xcs6mc-0.chGnpF > div.Layout-sc-1xcs6mc-0.bMvWIE > div.Layout-sc-1xcs6mc-0.kFQuPx > div > div.Layout-sc-1xcs6mc-0.fKljfb > div.Layout-sc-1xcs6mc-0.cTzewX > div:nth-child(1) > div > p > span")
       var viewCount = await page.evaluate(element2 => element2.textContent, element2) //get the live viewer count

       //console.log(item);

       if(categoryList.includes(category)){ //check if the stream category is one that is currently on our website


        if(viewCount <= viewCountRange){ //check if the live viewer count is within our range

            console.log("URL:", link,",Category:", category, "Is in database");
            console.log("URL:", link,",View Count:", category, "Is within range");
            //Scraping the stream title
            var element4 = await page.waitForSelector("#live-channel-stream-information > div > div > div > div > div.Layout-sc-1xcs6mc-0.chGnpF > div.Layout-sc-1xcs6mc-0.bMvWIE > div.Layout-sc-1xcs6mc-0.elJsHR > div > div.Layout-sc-1xcs6mc-0.BcKcx > h2")
            var streamTitle = await page.evaluate(element4 => element4.textContent, element4) //get the stream title

             //Scraping the streamer name
            var element0 = await page.waitForSelector("#live-channel-stream-information > div > div > div > div > div.Layout-sc-1xcs6mc-0.chGnpF > div.Layout-sc-1xcs6mc-0.wDxTQ.metadata-layout__support > div.Layout-sc-1xcs6mc-0.beAYWq > a > h1")
            var streamerName = await page.evaluate(element0 => element0.textContent, element0) //get the streamer name


            //console.log(isLive)
            console.log(viewCount) //print the live view count to the console
            console.log(category) //print the stream category to the console
            console.log(streamTitle) //print the stream title to the console
            console.log(link) //print the stream URL to the console
            console.log(streamerName) //print the streamer name to the console



            client.connect(function(err){ //connect to the database
                if(err) throw err; //if we can't connect then throw error
        
                
                
                database.collection("VerifiedURLCollection").insertOne(data, function(err){ //insert the URL link into the VerifiedURLCollection
                    if(err) throw err //if we can't insert then throw error
                    console.log("Insert Success") //the insert was successful
                    //client.close(); //close the connection to the database
                });


                database.collection("URLCollection").deleteOne(data, function(err){ //remove the verified URL from the URLCollection
                    if(err) throw err //if we can't delete then throw error
                    console.log("Delete Success") //the removal was successful
                    client.close(); //close the connection to the database

                });
                
                
        
                //client.close();
        
              });




        }else{ //else the live viewer count was not in our range

            console.log("Error:", "URL:", link, ",View Count:", viewCount, "Is not within range");
            client.connect(function(err){ //connect to the database
                if(err) throw err; //if we can't connect then throw error
        

                //Remove the un-verified URL from the URLCollection
                database.collection("URLCollection").deleteOne(data, function(err){
                    if(err) throw err
                    console.log("Delete Success")
                    client.close();

                });
                
                
        
                //client.close();
        
              });

        }
        

       }else{ //else the stream category is one that is not on our website

         console.log("Error:", "URL:", link, ",Category:", category, "Is not in database");
            client.connect(function(err){ //connect to the database
                if(err) throw err; //if we can't connect then throw error
        

                //Remove the un-verified URL from the URLCollection
                database.collection("URLCollection").deleteOne(data, function(err){
                    if(err) throw err
                    console.log("Delete Success")
                    client.close();

                });
                
                
        
                //client.close();
        
              });
       }

         
   
      } catch (error){ //if the try catch block trows an error then that means the streamer is not live

        console.log("Error:", "URL:", link, ",Stream is not live");
            client.connect(function(err){ //connect to the database
                if(err) throw err; //if we can't connect then throw error
        

                //Remove the un-verified URL from the URLCollection
                database.collection("URLCollection").deleteOne(data, function(err){
                    if(err) throw err
                    console.log("Delete Success")
                    client.close();

                });
                
                
        
                //client.close();
        
              });



      }

     
   
      
     


   }
   


   browser.close() //close the web browser instance
   await cursor.close(); //close the cursor when we are done with it
   //client.close(); //close the MongoClinet Instance
   //client.close(); //close the MongoClient instance


   
}

//Web Scraper Function Call
//Prints error (if any) to the terminal
scrape().catch(console.error)

