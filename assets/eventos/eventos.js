function login() {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    if (email === "123" && password === "456" ) {

    let boton = document.getElementById('btlogin')
    boton.className = "btn btn-success"
    boton.innerHTML = "Bienvenido "+email
    let modal = boostrap.Modal.getOrCreateInstance(documen.getElementById('login'))
    modal.hide()
    }

else { alert("Usuario y/o contraseña incorrectos")}
}
function cambiarUbicacion() {
    alert("cambiamos la ubicación")
}
document.getElementById('01-ubicacion-d').onclick = cambiarUbicacion;
