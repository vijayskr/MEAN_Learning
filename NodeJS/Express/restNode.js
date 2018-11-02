var express = require("express");
var app = express();
var http = require("http");
var fs = require("fs");
app.get("/listUsers", function(request, response) {
    //console.log(data);
  response.header("Access-Control-Allow-Origin", "*");
  fs.readFile(__dirname + "/" + "users.json", "utf8", function(err, data) {
    console.log(data);
    response.end(data);
  });
});
app.get("/add/:x/:y", function(request, response) {
  var x = request.params.x;
  var y = request.params.y;
  var result = parseInt(x) + parseInt(y);
  console.log(result);
  response.end("" + result);
});
var server = app.listen(8585, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
