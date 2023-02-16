const nombre = document.querySelector(".Nombre")
const numero = document.querySelector(".Numero")
const direccion = document.querySelector(".Direccion")
const btnAgregarTarea = document.querySelector(".btn-agregar-tarea")
const ListadoTareas = document.querySelector(".listado-tareas")

const local = window.localStorage;

fetch("http://www.raydelto.org/agenda.php")
    .then(Response => Response.json())
    .then(data => mostrarData(data))
    .catch(err = console.log("Error"))



btnAgregarTarea.onclick = () => {
    let contacto = {
        id: Math.random(1,100),
        nombre: nombre.value,
        numero: numero.value,
        direccion: direccion.value,
    }
   guardarContacto(local,contacto)
}

cargarContacto(local, ListadoTareas)

