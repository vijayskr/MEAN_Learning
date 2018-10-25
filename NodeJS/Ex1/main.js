/* DAY 1
var hello = require('./hello');
hello.world();
*/

/* DAY 2
var fs = require('fs');

var data = "Hello Vijay";
fs.writeFile('abc.txt', data);
console.log("Written Complete");

console.log("Before readFile()");
fs.readFile('abc.txt', function(error, data) {
console.log("Data : " + data);
});
console.log("done");
*/

/* DAY 2
process.stdin.resume();

process.stdin.pipe(process.stdout, { end:false });

process.stdin.on("end", function(msg) {
    process.stdout.write(msg + " \n");
});

setInterval(function() {
    process.stdin.emit("end", "Goodbye");
}, 3000);

*/

/* DAY 3
process.on('exit', function(code) {
    //Following code will never execute
    setTimeout(function() {
        console.log("This will not run");
    }, 0);
    console.log("About to exit with code", code);
    });    
console.log("Program Ended");

*/
//DAY 3
/*
process.argv.forEach(function(val, index, array) {
    console.log(index + '::' + val);
});

process.stdout.write("Hello Vijay !! \n \n");

console.log(process.execPath);
console.log(process.platform);
*/

/*
    var num1 = parseInt(process.argv[2]);
    var num2 = parseInt(process.argv[3]);
    num3 = num1 + num2;
    console.log(num3);
process.stdout.write("Hello Vijay !! \n \n");
process.version();
process.cwd();

*/
/*
Instructor Example - SPAWN
const fs = require('fs');const child_process = require('child_process'); for(var i=0; i<3; i++) {   var workerProcess = child_process.spawn('node', ['support.js', i]);   workerProcess.stdout.on('data', function (data) {      console.log('stdout: ' + data);   });   workerProcess.stderr.on('data', function (data) {      console.log('stderr: ' + data);   });   workerProcess.on('close', function (code) {      console.log('child process exited with code ' + code);   });}

Instrutor Example - FORK
const fs = require('fs');const child_process = require('child_process'); for(var i=0; i<3; i++) {   var worker_process = child_process.fork("support.js", [i]);	   worker_process.on('close', function (code) {      console.log('child process exited with code ' + code);   });}
*/


const fs = require('fs');
const child_process = require('child_process');

for(var i=0; i < 3; i++) {
    //var workerProcess = child_process.spawn('node', ['support.js', i]);
    var workerProcess = child_process.fork('support.js', [i]);
    //workerProcess.stdout.on('data', function(data) {
      //  console.log('stderr: ' + data);
    //});

    workerProcess.on('close', function(code) {
        console.log('child process exited with code ' + code);
    });
}
