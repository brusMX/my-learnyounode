var fs = require('fs')  

function doneReading(error,data){
      if (error) return console.error(error);
      console.log(data.toString().split("\n").length - 1);
}
fs.readFile(process.argv[2], doneReading);



  