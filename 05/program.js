var fs = require('fs');
var path = process.argv[2];
var extension = "." + process.argv[3];
function callback(err, list){
    list.forEach(function(elem){
        if(elem.indexOf(extension)>-1) console.log(elem);

    })
}
fs.readdir(path,callback);
