export class Encuesta {
    constructor(_id = '', user_id = '', pregunta1 = '', pregunta2 = '', pregunta3 = '', pregunta4 = '', pregunta5 = '',
    pregunta6 = '', pregunta7 = '', pregunta8 = '', pregunta9 = ''){
        this._id = _id;
        this.user_id = user_id;
        this.pregunta1 = pregunta1;
        this.pregunta2 = pregunta2;
        this.pregunta3 = pregunta3;
        this.pregunta4 = pregunta4;
        this.pregunta5 = pregunta5;
        this.pregunta6 = pregunta6;
        this.pregunta7 = pregunta7;
        this.pregunta8 = pregunta8;
        this.pregunta9 = pregunta9;

    }
    _id: string;
    user_id: string;
    pregunta1: string;
    pregunta2:string;
    pregunta3:string;
    pregunta4: string;
    pregunta5: string;
    pregunta6: string;
    pregunta7: string;
    pregunta8: string;
    pregunta9: string;
}
