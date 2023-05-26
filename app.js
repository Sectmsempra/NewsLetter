//jshint esversion: 6
const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const request = require('request');


const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

// app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){

    res.sendFile(__dirname + "/signup.html")

});

app.post("/", function(req, res){

    var firstname = req.body.fname;
    var lastname = req.body.lname;
    var email = req.body.email;

    console.log(firstname, lastname, email);

});


app.listen("3000", function(){
    console.log("Server is running on 3000")
});