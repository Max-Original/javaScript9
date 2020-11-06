var express = require('express');
var bodyParser = require("body-parser");

var server = express();
var jsonParser = bodyParser.json();

server.use(jsonParser);
server.use(express.static(__dirname));


server.get("/", function (request, response) {
    console.log("Start page requested.");
    response.send("<h1>It is working</h1>");
});

server.get("/userGet", function (request, response) {
    console.log(request.query);
    var obj = request.query;
    console.log(obj.userName += ".ValidatedByGET");
    console.log(obj.userSNameGet += ".ValidatedByGET");
    console.log(obj.userAge += ".ValidatedByGET");
    console.log(obj.userResidenceGet += ".ValidatedByGET");
    response.send("You have successfully used Get method : "+ JSON.stringify(request.query));
});

server.post("/userPost", function (request, response) {
	console.log(request.body);

    var obj = request.body;
    console.log(obj.userName += ".ValidatedByPOST");
    console.log(obj.userAge += ".ValidatedByPOST");
    console.log(obj.userSName += ".ValidatedByPOST");
    console.log(obj.userResidents += ".ValidatedByPOST");
    response.send("You have successfully used Post method : "+ JSON.stringify(request.body));
});

server.listen(3000); //the server object listens on port 8080