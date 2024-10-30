// Create web server
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var fs = require("fs");
var path = require("path");

// Create server
var server = require("http").createServer(app);

// Set up the server
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up the server to listen on port 3000
server.listen(3000, function() {
  console.log("Server listening on port 3000");
});