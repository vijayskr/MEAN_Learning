var fs = require('fs');

var buffer = '';

fs.readFile('temp.txt', function(err, buf) {
  console.log(buf.toString());
  buffer = buf;
});

console.log(buffer);

fs.writeFile('newfile.txt', buffer, function(err) {
    if (err) throw err;

    console.log("File Write Completed");
});