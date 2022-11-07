//Adding External Node.js Modules
const puppeteer = require('puppeteer') //include puppeteer module
const fs = require('fs') //include filestream module
const readline = require('readline') //include readline module



//Web Scraper Function
async function scrape() {
   const browser = await puppeteer.launch({}) //create a new web browser instance
   const page = await browser.newPage() //create page variable that will be used to navigate to Twitch.tv web page
   const readStream = fs.createReadStream('urlFile.txt') //creating a read stream from a given input file
  
   //Truncating the output file to delete previous data
   //Using asynchronous writeFile function
   fs.writeFile('output.txt', '', err => {if (err){ 
      throw err} console.log(err)})
         
       
     
   //Reading from the input file one URL at a time
   //Use crlfDelay to allow program to recognize newline and carriage return
   const readLine = readline.createInterface({
      input: readStream,
      crlfDelay : Infinity
   })

   //For each URL in the input file, scrape the stream properties we need and write them to the output file
   for await (const line of readLine){
      var link = line //the URL from the input file becomes the link that the variable page uses to navigate

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
       var element3 = await page.waitForSelector("#live-channel-stream-information > div > div > div > div > div.Layout-sc-nxg1ff-0.jYkTYc > div.Layout-sc-nxg1ff-0.bBfGll > div.Layout-sc-nxg1ff-0.jFPakw > div > div:nth-child(2) > div > div > div.Layout-sc-nxg1ff-0.FxhJR > a > span", {timeout: 2850})
       var category = await page.evaluate(element3 => element3.textContent, element3)
    
       //Scraping the stream title
       var element4 = await page.waitForSelector("#live-channel-stream-information > div > div > div > div > div.Layout-sc-nxg1ff-0.jYkTYc > div.Layout-sc-nxg1ff-0.bBfGll > div.Layout-sc-nxg1ff-0.jFPakw > div > div.Layout-sc-nxg1ff-0.dRKpYM > h2")
       var streamTitle = await page.evaluate(element4 => element4.textContent, element4)
   
       //Scraping the streamer name
       var element0 = await page.waitForSelector("#live-channel-stream-information > div > div > div > div > div.Layout-sc-nxg1ff-0.jYkTYc > div.Layout-sc-nxg1ff-0.cuTDLl.metadata-layout__support > div.Layout-sc-nxg1ff-0.gcwIMz > a")
       var streamerName = await page.evaluate(element0 => element0.textContent, element0)


      //console.log(isLive)
      //console.log(viewCount)
      console.log(category) //print the stream category to the console
      console.log(streamTitle) //print the stream title to the console
      console.log(link) //print the stream URL to the console
      console.log(streamerName) //print the streamer name to the console
   
   
      obj = {category: category, title: streamTitle, URL: link, name: streamerName} //JSON format object
   
      myJSON = JSON.stringify(obj) //creating the JSON to be sent to the database


       
      //Writing the JSON to the output file
      //New entries will be appended to the file using newline
      fs.writeFile('output.txt', myJSON + '\n', {flag: 'a'}, err => {if (err){ 
         throw err} console.log(err)})
         
   
      } catch (error){
   
      }
     
   
      
     


   }
   


   browser.close() //close the web browser instance


   
}

//Web Scraper Function Call
//Prints error (if any) to the terminal
scrape().catch(console.error)