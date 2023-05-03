"use strict";


const express = require("express");
const app = express();
const port = 5000;
app.listen(port);
console.log("Server on port: " + port);


app.get("/page/:pageName", function (request, response) {
    return response.sendFile(__dirname + "/pages/" + request.params['pageName'] + ".html");
});


app.get("/css/:cssName", function (request, response) {
    return response.sendFile(__dirname + "/css/" + request.params['cssName']);
});


app.get("/image/:imageName", function (request, response) {
    return response.sendFile(__dirname + "/images/" + request.params['imageName']);
});

