var http = require('http');
var fs = require('fs');
var file = process.argv[3];
var server = http.createServer(function(request,response){
    var readStream = fs.createReadStream(file);
    readStream.on('open', function () {
        response.writeHead(200, { 'content-type': 'text/plain' })  
        readStream.pipe(response);
    });

    readStream.on('error', function(err) {
        response.end(err);
    });
});
server.listen(process.argv[2]);