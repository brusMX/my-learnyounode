var net = require('net');
var strftime = require('strftime');


function callback(socket){
    socket.end(strftime('%F %H:%M', new Date()) + '\n')}
var server = net.createServer(callback);
server.listen(process.argv[2]);
