var http = require('http');
var url = process.argv[2];
var text = "";
var numberOfChars = 0;
function append(response){
    response.on("data", function (data) {
        if(data!= "end")
        text += data.toString();
         })
         
    response.on("end", function (data) {
        console.log(text.length);
        console.log(text);
    })
}

http.get(url,append);
