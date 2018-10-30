var express = require('express');
var url = require('url');
var app = express();

app.get('/add', function(req, res) {
    var params = url.parse(req.url, true).query;
    var x = params.x;
    var y = params.y;

    var res = x + y;
    console.log(res);
    res.json({"Result: ": res});
});

app.get('/sub', function(req, res) {
    var params = url.parse(req.url, true).query;
    var x = params.x;
    var y = params.y;

    var res = x - y;
    console.log(res);
    res.json({"Result: " : res});

});

var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server is started & listening @ : " + host + port);
});