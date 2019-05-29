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
                let sfechaN = document.querySelector("#fechaN").value;
                sfechaN = sfechaN.split('-');

                let fechaN = new Date(sfechaN[0], sfechaN[1], sfechaN[2]);

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
        
        document.querySelector("#select").addEventListener("change", () => {
            if(document.querySelector("#select").value === "nombre"){
                agenda.sortByName();
            }else{
                agenda.sortByAge();
            }
        });
    }

    
}
let m = new Main();