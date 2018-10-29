var fs = require('fs');

var buffer = '';

fs.readFile('temp.txt', function(err, buf) {
  console.log(buf.toString());
  fs.writeFile('newfile.txt', buf, function(err, buf) {
    if (err) throw err;
    console.log("File Write Completed");
  });
});
