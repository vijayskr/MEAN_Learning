var net = require('net');

var HOST ='127.0.0.1';
var PORT = 6969;

net.createServer(function(sock) {
    console.log('CONNECTED' + sock.remoteAddress + ':' + sock.remoteAddress);
    sock.on('data', function(data) {
        console.log('DATA' + sock.remoteAddress + ':' + data);
        sock.write("You Said " + data + " ");
    });

    sock.on('close', function(data) {
        console.log('CLOSED' + sock.remoteAddress +':' + sock.remotePort);
    });
}).listen(PORT, HOST);

console.log("Server Listening on " + HOST + ':' + PORT);