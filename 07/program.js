var http = require('http');
var url = process.argv[2];
function callback(response){
    response.on("data", function (data) {
        console.log(data.toString());
         })  

}

http.get(url,callback);
