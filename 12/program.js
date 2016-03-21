var http = require('http');
var server = http.createServer(function(req,res){
    var body = "";
    if (req.method != 'POST')  
        return res.end('send me a POST\n')  
    req.on('data', function (data) {
        body += data;
    });
    req.on('end', function () {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(body.toString().toUpperCase());
    });
});
server.listen(process.argv[2]);
