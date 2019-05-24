export default class DContactos {
    constructor(vista){
        this._nombre = vista.nombre;
        this._email = vista.email;
        this._fechaN = vista.fechaN
        this._telefono = vista.telefono
    }

    get nombre(){
        return this._nombre;
    }

    get email(){
        return this._email
    }

    

    get telefono(){
        return this._telefono
    }

    getFechaN(){
        let d = this._fechaN.getDate() + this._fechaN.getMonth() + "/" + this._fechaN.getFullYear();
        return d;
    }

    
    get fechaN(){
        return this._fechaN
    }
} 