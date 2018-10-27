const fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true })); 

fs.readFile('emp.json', 'utf8', (err, fileContents) => {
  if (err) {
    console.error(err)
    return
  }
  try {
    const data = JSON.parse(fileContents)
  } catch(err) {
    console.error(err)
  }

  app.post('/myjson', function(res, data) {
    res.send('Your JSON Data ' + data );
  });

  app.listen(8080, function() {
    console.log('Server running at http://127.0.0.1:8080/');
  });
})