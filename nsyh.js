// menentukan  bilangan ganjil genap 

var input = require ("readline-sync");
var bilangan = input.questionInt("masukan bilangan = ");
if (bilangan % 2== 0){
    console.log(bilangan , "genap");
}else{
    console.log(bilangan , "ganjil"); 
}