var http = require('http');
var url = [process.argv[2], process.argv[3], process.argv[4]];
var text = "";
var index =0;
function append(response){
    response.on("data", function (data) {
        if(data!= "end") text += data.toString();
         })         
    response.on("end", function (data) {
        console.log(text);
        text = "";
        http.get(url[++index],append);
    })
    response.on('error', console.error)  
}
http.get(url[index],append);
   

