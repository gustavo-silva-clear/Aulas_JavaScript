/*
Funções = executa uma instrução e retorna algo

função 
função anonima

parametros ou argumentos, são variavel com definição prévia na função, elas vão receber os valores

eval = avalia uma string e retorna um valor 
*/
function calc(n1 ,n2 , operator)
{
return eval(`${n1} ${operator} ${n2}`);
}

let resultado = calc(1,2 , "+");

console.log(resultado)