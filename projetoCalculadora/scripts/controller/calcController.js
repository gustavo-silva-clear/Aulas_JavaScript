//puxa do HTML os id's e define todos os atributos em que serão modificadas as informações e mostradas ao usuario
class CalcController {

    constructor() {
        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();


 
    }

    initialize() {

        this.setDisplayDateTime();

        setInterval(() => {

            this.setDisplayDateTime();

        }, 1000);// atualiza a hora a cada 1000 milisegundos


    }
// metodo pra definir todos os parametros de data e hora

    setDisplayDateTime() {

        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{

            day:"2-digit",
            month:"short",
            year:"numeric"

        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    }

    get displayTime() {

        return this._timeEl.innerHTML;

    }

    set displayTime(value) {

        return this._timeEl.innerHTML = value;

    }

    get displayDate() {

        return this._dateEl.innerHTML;
    }

    set displayDate(value) {

        return this._dateEl.innerHTML = value;
    }

    get displayCalc() {

        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate() {
        return new Date();
    }

    set currentDate(value) {
        this._currentDate = value;

    }
}

