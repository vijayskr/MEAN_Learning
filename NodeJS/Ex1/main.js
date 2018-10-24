/*var hello = require('./hello');
hello.world();
*/

/*var fs = require('fs');

var data = "Hello Vijay";
fs.writeFile('abc.txt', data);
console.log("Written Complete");

console.log("Before readFile()");
fs.readFile('abc.txt', function(error, data) {
console.log("Data : " + data);
});
console.log("done");
*/

process.stdin.resume();

process.stdin.pipe(process.stdout, { end:false });

process.stdin.on("end", function(msg) {
    process.stdout.write(msg + " \n");
});

setInterval(function() {
    process.stdin.emit("end", "Goodbye");
}, 3000);

