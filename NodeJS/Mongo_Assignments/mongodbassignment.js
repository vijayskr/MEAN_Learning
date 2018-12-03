//Create Database
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});


//Insert Data to MongoDB
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(
  url,
  function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("customers").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  }
);

//Select Data from MongoDB
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(
  url,
  function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo
      .collection("customers")
      .find({})
      .toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      });
  }
);