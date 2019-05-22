
import Contacto from "./Contacto.js";
import Agenda from "./Agenda.js";

class Main {
    constructor() {
        let agenda = new Agenda(document.querySelector("#listado"));

        document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");

            if (form.checkValidity() === true) {

            let nombre = document.querySelector("#nombre").value;
            let email = document.querySelector("#email").value;
            let fechaN = document.querySelector("#fechaN").value;
            let telefono = document.querySelector("#telefono").value;

            let objagenda = {
                nombre: nombre,
                email: email,
                fechaN: fechaN,
                telefono: telefono,
            }

            let contacto = new Contacto(objagenda);

            agenda.addContacto(contacto);
        }
        form.classList.add("was-validated");


        })
    }
}

let m = new Main();