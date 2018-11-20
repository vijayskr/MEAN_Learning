var express = require("express");
var url = require("url");
var app = express();

app.get("/add", function(req, res) {
  var params = url.parse(req.url, true).query;
  var x = params.x;
  var y = params.y;

  var res = x + y;
  console.log(res);
  res.json({ "Result: ": res });
});

app.get("/sub", function(req, res) {
  var params = url.parse(req.url, true).query;
  var x = params.x;
  var y = params.y;

  var res = x - y;
  console.log(res);
  res.json({ "Result: ": res });
});

var server = app.listen(8080, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Server is started & listening @ : " + host + port);
});

/*

var request = require("request");
describe("Hello World Server", function() 
{    describe("GET /", function() 
    {      
        it("returns status code 200", function(done) 
        {        
            request.get("http://localhost:8585/?num1=1&num2=3", function(error, response, body) 
            {            
                var num1 =_get['num1'];		            
                var num2 =_get['num2'];		                      
                var sum = parseInt(num1) + parseInt(num2);          
                expect(sum).toBe(4);          
                done();        
            });      
        });    
    });  
});

*/
