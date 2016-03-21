var mymodule = require("./mymodule");
var path = process.argv[2];
var extension = "." + process.argv[3];
function callback(error,list){
      if (error) return console.error(error);
      list.forEach((el)=>console.log(el));
}
mymodule(path,extension,callback);