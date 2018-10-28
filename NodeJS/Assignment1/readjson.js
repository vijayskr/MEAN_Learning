/*
const fs = require('fs');
var http = require('http');

var data = ' ';

fs.readFile('emp.json', 'utf8', (fileContents) => {
    data = JSON.stringify(fileContents);
    console.log(data.toString());
});
*/

var http = require("http");
var options = {
  hostname: 'http://127.0.0.1',
  port: 8080,
  path: '/myjson',
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
  }
};

var req = http.request(options, function(res) {
  console.log('Status: ' + res.statusCode);
  console.log('Headers: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (body) {
    console.log('Body: ' + body);
  });
});
req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});
// write data to request body
req.write('{"string": "Hello, World"}');
req.end();
