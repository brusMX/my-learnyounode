var aux = process.argv
var total = 0;
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
aux.forEach(function(elem){
    if(isNumber(elem)){
        total += Number(elem); 
    }
})
console.log(total);