var http = require('http');
var	url = require("url");

http.createServer(function(req, res) {
/*    
    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.end('Hello World \n');
}).listen(5000, "127.0.0.1");
*/
///protocol:://serveraddress:portnumber/path/path…?querystring

//http://localhost:8585/abc/page?num1=20&num=30
var _get = url.parse(req.url, true).query; //default parsing
//This will convert to object format !!
    //_get={num1:10, num2:20}
var pathName= url.parse(req.url).pathname;
console.log(pathName);  

res.writeHead(200, {'Content-Type':'text/plain'});
var n1 =_get['num1'];
var n2 = _get['num2'];

if(pathName = '/add') {
    var add =parseInt(n1) + parseInt(n2);

    res.end('Addition: ' + add);
}
else if(pathName = '/sub') {
    var sub =parseInt(n1) - parseInt(n2);

    res.end('Subtraction: ' + sub);
}

}).listen(8585);
console.log("Server is lisenting......... \n");