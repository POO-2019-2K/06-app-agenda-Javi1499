import Contacto from "./Contacto.js"
import Vista from "./Vista.js"
export default class Agenda {
    constructor(tableT) {
        this._tablacontacto = tableT;
        this._contactoArray = [];
        this._initTables();

    }

    _initTables() {
        //localStorage.removeItem("contacto1")
        let lsContactos = JSON.parse(localStorage.getItem("contacto1"));
        if (lsContactos === null) {
            return;
        }
        lsContactos.forEach((e, index) => {
            e.fechaN = new Date(e.fechaN)
            this._showInTable(new Contacto(e));
        });
    }
    _addEditDeleteToRow(row, contacto) {
        let btnDelete = document.createElement("input");
        btnDelete.type = "button";
        btnDelete.value = 'Eliminar';
        btnDelete.className = 'btn btn-danger';


        row.cells[5].innerHTML = '';
        row.cells[5].appendChild(btnDelete);
        btnDelete.addEventListener('click', () => {
            this._contactoArray.splice(contacto, 1);
            row.innerHTML = "";
            localStorage.setItem("contacto1", JSON.stringify(this._contactoArray));

            return;
        });
        row.cells[4].innerHTML = "";
        row.cells[4].appendChild(btnDelete);
    }

    _showInTable(contacto) {
        let row = this._tablacontacto.insertRow(-1);

        let cellNombre = row.insertCell(0)
        let cellEmail = row.insertCell(1);
        let cellFechaN = row.insertCell(2);
        let cellTelefono = row.insertCell(3);
        let cellDelete = row.insertCell(4);
        row.insertCell(5);

        cellNombre.innerHTML = contacto.nombre;
        cellEmail.innerHTML = contacto.email;
        cellFechaN.innerHTML = contacto.getAge();
        cellTelefono.innerHTML = contacto.telefono;

        this._addEditDeleteToRow(row);

        let objContacto = {
            nombre: contacto.nombre,
            email: contacto.email,
            fechaN: contacto.fechaN,
            telefono: contacto.telefono,
            duracion: contacto.duracion,
            lugares: contacto.lugares
        }
        this._contactoArray.push(objContacto);
    }


    _contacto(email) {
        let foundAt = -1;

        this._contactoArray.forEach((e, index) => {
            if (e.email === email) {
                foundAt = index;
                return;
            }
        });
        console.log(foundAt);
        return foundAt;
    }
    _ContactoActualizar() {
        if (localStorage.getItem("contacto1") != null) {
            this._contactoArray = JSON.parse(localStorage.getItem("contacto1"));
        }
    }

    getContactoGuardar() {
        this._ContactoActualizar();
        return this._contactoArray;
    }


    sortByName1() {
        this._contactoArray.sort(function (a, b) {
            if (a.nombre > b.nombre) {
                return 1;
            } else {
                return -1;
            }
        });
        localStorage.setItem('contacto1', JSON.stringify(this._contactoArray));
    }

    sortByAge1() {
        this._contactoArray.sort(function (a, b) {
            return (a.edad - b.eda)
        })
        localStorage.setItem('contacto1', JSON.stringify(this._contactoArray));
    }


    sortByName() {
        this._contactoArray.sortByName1();
        this.update(this._contactoArray.getContactoGuardar());
    }

    sortByAge() {
        this._contactoArray.sortByAge1();
        this.update(this._contactoArray.getContactoGuardar());
    }


    addContacto(e) {
        let found = this._contacto(e.email);

        if (found >= 0) {
            Swal.fire({
                type: "error",
                title: "Error",
                text: "El contacto ya ha sido registrado"
            });
            return;
        }

        this._showInTable(e);

        this._contactoArray.sort()
        localStorage.setItem("contacto1", JSON.stringify(this._contactoArray));
        localStorage.setItem("contacto1", JSON.stringify(this._contactoArray));
    }
    


}