const puppeteer = require('puppeteer')
const fs = require('fs')
const readline = require('readline')

async function scrape() {
   const browser = await puppeteer.launch({})
   const page = await browser.newPage()
   const readStream = fs.createReadStream('urlFile.txt')
  
    
   fs.writeFile('output.txt', '', err => {if (err){ 
      throw err} console.log(err)})
         
       
     

   const readLine = readline.createInterface({
      input: readStream,
      crlfDelay : Infinity
   })

   for await (const line of readLine){
      var link = line

   
      try{
       await page.goto(link)
       /*
       var element = await page.waitForSelector("#live-channel-stream-information > div > div > div > div > div.Layout-sc-nxg1ff-0.wEGRY > div", {timeout: 7000})
       var isLive = await page.evaluate(element => element.textContent, element)
       */
       /*
       var element2 = await page.waitForSelector("#live-channel-stream-information > div > div > div > div > div.Layout-sc-nxg1ff-0.jYkTYc > div.Layout-sc-nxg1ff-0.bBfGll > div.Layout-sc-nxg1ff-0.jUcRho > div > div.Layout-sc-nxg1ff-0.cQQfqe > div.Layout-sc-nxg1ff-0.eLwvPK > div:nth-child(1) > div > p > span")
       var viewCount = await page.evaluate(element2 => element2.textContent, element2)
       */
    
       var element3 = await page.waitForSelector("#live-channel-stream-information > div > div > div > div > div.Layout-sc-nxg1ff-0.jYkTYc > div.Layout-sc-nxg1ff-0.bBfGll > div.Layout-sc-nxg1ff-0.jFPakw > div > div:nth-child(2) > div > div > div.Layout-sc-nxg1ff-0.FxhJR > a > span", {timeout: 2500})
       var category = await page.evaluate(element3 => element3.textContent, element3)
    
       var element4 = await page.waitForSelector("#live-channel-stream-information > div > div > div > div > div.Layout-sc-nxg1ff-0.jYkTYc > div.Layout-sc-nxg1ff-0.bBfGll > div.Layout-sc-nxg1ff-0.jFPakw > div > div.Layout-sc-nxg1ff-0.dRKpYM > h2")
       var streamTitle = await page.evaluate(element4 => element4.textContent, element4)
   
       var element0 = await page.waitForSelector("#live-channel-stream-information > div > div > div > div > div.Layout-sc-nxg1ff-0.jYkTYc > div.Layout-sc-nxg1ff-0.cuTDLl.metadata-layout__support > div.Layout-sc-nxg1ff-0.gcwIMz > a")
       var streamerName = await page.evaluate(element0 => element0.textContent, element0)
   
      } catch (error){
   
      }
     
   
     
   
      //console.log(isLive)
      //console.log(viewCount)
      console.log(category)
      console.log(streamTitle)
      console.log(link)
      console.log(streamerName)
   
   
      obj = {cat: category, title: streamTitle, URL: link, name: streamerName}
   
      myJSON = JSON.stringify(obj)
   
      
      fs.writeFile('output.txt', myJSON + '\n', {flag: 'a'}, err => {if (err){ 
       throw err} console.log(err)})
       
   


   }
   


   browser.close()


   
}

scrape().catch(console.error)