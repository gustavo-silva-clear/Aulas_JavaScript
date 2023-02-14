/* trabalhando com arrays */

let cars = ["Supra" , "GTR" , "RX-7" , new Date(), function(){}];

console.log(cars);//Mostra todo o conteudo do array
console.log(cars.length);//mostra a quantidade de indices
console.log(cars [2]);//mostra um indice especifico
console.log(cars[3].getFullYear());//extrai o ano de dentro de uma função que está no indice 
console.log(cars[4]());//chamo uma função que está em um indice

cars.forEach(function(value , index){

 console.log(index , value);

})//forEach serve para percorrer o array ele mostra todos os items que compoem o array
