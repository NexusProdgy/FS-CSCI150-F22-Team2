//Ricardo Cabrera
//CSCI 150
//Project Streamer Discoverability

//Description:
This folder contains all of the files for the web scraper backend component of the project. The web scraper component is split into two programs: a verification web scraper and a main web scraper. 

//Verification Web Scraper
The verification web scraper is used to verify Twitch URLs that are uploaded to our database from the website. The verification step is needed because we want to check the live status, live viewer count, and category of a stream before it’s sent to our main webscraper.
A URL is not verified if: a stream is not live, a stream has more viewer that our specified range, or a stream category is not featured on our website.
The verification web scraper will use a URL and go to a Twitch stream using that URL. It will then gather the live status, live viewer count, and category of the stream. The web scraper will then decide if the URL should be verified before sending it to our main web scraper.

//Main Web Scraper
The main web scraper is used to gather the data from a stream whose URL was verified. This data is then sent to the database where the website can access it. The main web scraper will use a verified URL and go to a Twitch stream. It will then gather the stream category, stream title, streamer name.
After this, the web scraper will send the data it gather combined with the verified URL to the database.

//How to run the web scrapers
The web scraper programs must be run in this order:
1) first-verifiy-webscrper.js
2) webscraper.js

//Node.js modules used
puppeteer
mongodb

//Main programs:
first-verify-webscraper.js
webscraper.js


//Utiliy programs:
database-insertURL.js
database-readURL.js
database-renameCollection.js
deleteall.js


//WIP programs:
webscrapertest.js