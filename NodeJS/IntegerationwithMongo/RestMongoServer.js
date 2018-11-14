var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


app.get('/listusers', function (request, response) {
response.header("Access-Control-Allow-Origin", "*");
var data={};
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    dbo.collection("users").find().toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      response.send(result);
      db.close();
    });
  });
    
});

var server = app.listen(8085, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);


});



