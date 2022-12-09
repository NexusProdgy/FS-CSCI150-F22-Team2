const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")

const app = express();

app.use(express.json());
var uri = 'mongodb+srv://project150:project150@cluster1.2lqejbq.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(
    uri, {
        useNewUrlParser: true,
        //useFindAndModify: false,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function() {
    console.log("Connected successfully");
});

app.use(Router);

app.listen(3000, () => {
    console.log("Server is running at port 3000");
});