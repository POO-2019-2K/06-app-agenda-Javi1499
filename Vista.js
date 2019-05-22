import Agenda from "./Agenda"
import Contacto from "./Contacto.js"
export default class Vista {
    constructor(tableT) {
        this._tablaTalleres = tableT;
        this._initTables();

    }

    _initTables() {
        //localStorage.removeItem("contactos")
        let lsProductos = JSON.parse(localStorage.getItem("contactos"));
        if (lsProductos === null) {
            return;
        }
        lsProductos.forEach((e, index) => {
            this._showInTable(new Contacto(e));
        });

        _showInTable(contacto) {
            let row = this._tablaTalleres.insertRow(-1);

            let cellNombre = row.insertCell(0)
            let cellEmail = row.insertCell(1);
            let cellFechaN = row.insertCell(2);
            let cellTelefono = row.insertCell(3);

            let btnEdit = document.createElement("input");
            btnEdit.type = "button";
            btnEdit.value = "Editar";
            btnEdit.className = "btn btn-success";


            let btnDelete = document.createElement("input");
            btnDelete.type = "button";
            btnDelete.value = "Eliminar";
            btnDelete.className = "btn btn-danger";

            cellNombre.innerHTML = contacto.nombre;
            cellEmail.innerHTML = contacto.email;
            cellFechaN.innerHTML = contacto.fechaN;
            cellTelefono.innerHTML = contacto.telefono;
            cellEdit.appendChild(btnEdit);
            cellDelete.appendChild(btnDelete);

            let objTaller = {
                nombre: taller.nombre,
                email: taller.email,
                fechaN: taller.fechaN,
                telefono: taller.telefono,
                duracion: taller.duracion,
                lugares: taller.lugares
            }
            this._talleresArray.push(objTaller);
        }

    }
}