var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){
    var body = "";
    var thisUrl = url.parse(req.url, true);
    var date = new Date(thisUrl.query.iso);
    jsonTime = JSON.stringify({
            hour : date.getHours(),
            minute: date.getMinutes(),
            second : date.getSeconds()
        });
     unixTime = JSON.stringify({
         unixtime : date.getTime()
     });
    if(thisUrl.pathname == "/api/parsetime") body = jsonTime;
    if(thisUrl.pathname == "/api/unixtime") body = unixTime;
    req.on('data', function (data) {
        body += data;
        console.log("entre");
    });
    req.on('end', function () {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(body);
    });
});
server.listen(process.argv[2]);
