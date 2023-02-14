/* Trabalhando manipulação de data em diferentes formatos */

let now  = new Date();
console.log(now);//mostra a data em segundos desde 1970

console.log(now.getDate());//mostra o dia 
console.log(now.getFullYear());// mostra o ano
console.log(now.getMonth());//mostra o mês

console.log(now.toLocaleDateString("pt-br"));// mostra a data de acordo com cada local do mundo basta especificar
