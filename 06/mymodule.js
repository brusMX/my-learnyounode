var fs = require('fs');
module.exports = function(path, ext, callback) {     
    fs.readdir(path,function(err,list){
        if(err) return callback(err);
            var arr =[];
            list.forEach(function(elem){
                if(elem.indexOf(ext)>-1) arr.push(elem);
            })
            callback (null,arr);
    }); 
}  
    
