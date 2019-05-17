import Vista from "./Vista.js"
import Contactos from "./Contactos.js";

class Main {
    constructor() {
        let tabla = new Vista(document.querySelector("#listado"));

        document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");

            if (form.checkValidity() === true) {

            let nombre = document.querySelector("#nombre").value;
            let email = document.querySelector("email").value;
            let fechaN = document.querySelector("#fechaN").value;
            let telefono = document.querySelector("#telefono").value;

            let objVista = {
                nombre: nombre,
                email: email,
                fechaN: fechaN,
                telefono: telefono,
            }

            let vista = new Contactos(objVista);

            vista.addTalleres(vista);
        }
        form.classList.add("was-validated");


        })
    }
}

let m = new Main();