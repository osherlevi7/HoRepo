const express = require("express");
const https = require("https");
const request  = require("request");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("poblic"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/main.html")
})




app.listen(process.env.PORT || 3000, ()=>{
    console.log("This web on port 3000")
})