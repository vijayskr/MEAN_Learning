var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err,dba) {
    if(err) {
        throw err;
    }

    var dbo = dba.db("test");
    var myobj = {
        name: "ABC Inc",
        address: "ABC Location"
    };

    dbo.collection("customers").insertOne(myobj, function(err, res) {
        if(err) {
            throw err;
        }
        console.log("1 document inserted");
        //dba.close();
    });

    dbo.collection("customers").findOne({}, function(err, result, res) {
        if(err) {
            throw err;
        }
        console.log(result.name);
        dba.close();
    })
});