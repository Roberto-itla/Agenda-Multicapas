const guardarContacto = (local, contacto) => {
    local.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = "/"

}

const cargarContacto = (local, parentNode) =>{
    let claves = Object.keys(local)

    for(clave of claves){
        let contacto = JSON.parse (local.getItem(clave))
        crearContacto(parentNode, contacto, local)
    }
}

const crearContacto = (parentNode, contacto, local) => {

    let divContacto = document.createElement("div")
    let nombreContacto = document.createElement("h3")
    let numeroContacto = document.createElement("h3")
    let direccionContacto = document.createElement("h3")
    let iconoBorrar = document.createElement("h3")

    nombreContacto.innerHTML = contacto.nombre
    numeroContacto.innerHTML = contacto.numero
    direccionContacto.innerHTML = contacto.direccion
    iconoBorrar.innerHTML = "delete_forever"

divContacto.classList.add("tarea")
iconoBorrar.classList.add("material-symbols-outlined","iconos")

iconoBorrar.onclick = () =>{
    local.removeItem(contacto.id)
    window.location.href = "/"
}


divContacto.appendChild(nombreContacto)
divContacto.appendChild(numeroContacto)
divContacto.appendChild(direccionContacto)
divContacto.appendChild(iconoBorrar)

parentNode.appendChild(divContacto)




}