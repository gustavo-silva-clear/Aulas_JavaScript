/* Orientação a objeto e funções de uma forma mais limpa 
 O que é orientação a objeto, é baseado em uma classe com atributos e motodos, o metodo tem que executar algo, e pra isso é utilizado o termo "this" 

*/
/*______________________Forma antiga de se declarar uma classe_______________________________________
//isso é um metodo
let celular =  function(){

    this.cor = "prata";//isso é um atributo
    
    this.ligar = function(){

        console.log("uma ligação!");
        return "ligando...";

    }

}

let objeto = new celular();

console.log(objeto);
console.log(objeto.cor);
console.log(objeto.ligar());
_______________________________________________________________________________________________________*/

//_____________________Nova forma de declarar uma classe_________________________________________________

class celular {

    constructor()
{
        this.cor = "prata";
}
ligar(){
    console.log("uma ligação!");
    return "ligando...";
} 

}

let objeto =  new celular();

console.log(objeto);
console.log(objeto.ligar());