import Contacto from "./Contacto.js"
export default class Agenda {
    constructor() {
        this._talleresArray = [];

    }

_talleres(nomT) {
    let foundAt = -1;

    this._talleresArray.forEach((e, index) => {
        if (e.nomT === nomT) {
            foundAt = index;
            return;
        }
    });
    console.log(foundAt);
    return foundAt;

}
addContacto(e) {
    this._showInTable(e);
    localStorage.setItem("contactos", JSON.stringify(this._talleresArray));
    localStorage.setItem("contactos", JSON.stringify(this._talleresArray));
        }}