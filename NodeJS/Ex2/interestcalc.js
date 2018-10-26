var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
    var qrystr = url.parse(req.url, true).query;

    res.writeHead(200, { 'Content-Type':'text/plain'});

        var princ = parseInt(qrystr['princ']);
        var inte = parseInt(qrystr['inte']);
        var yrs = parseInt(qrystr['yrs']);
    
        var totalInt = (1 + (inte/100) * yrs);
        var totalAmt = totalInt + princ;
   
res.end('<html><body><h1> Rate of Interest : </h1> <br> <h2>Total Inerest : ' + totalInt + '</h2><br><h2>Total Amount to be paid : ' + totalAmt + '</h2></body></html>');
}).listen(8585);

console.log("Server Runnig............ \n");