class CalcController {

constructor()
{
    this._displayCalc = "0";
    this._currentDate;
    this.initialize();


} 

initialize(){

let displayCalcEl = document.querySelector("#display");
let dateEl = document.querySelector("#data");
let timeEl = document.querySelector("#hora");

displayCalcEl.innerHTML = "12213232";
dateEl.innerHTML = "14/02/2023";
timeEl.innerHTML = "11:30";

}

get displayCalc(){

    return this._displayCalc;
}

get currentDate(){
    return this._currentDate;
}


set displayCalc(value){
    this._displayCalc = value;    
}

set displayCalc(value){
    this._currentDate = value;

}
}

//classe = conjunto de atributos e metodos
//encapsulamento = controla o acesso a um atributo ou um metodo
// getters e setters permitem definir como acessar os valores
